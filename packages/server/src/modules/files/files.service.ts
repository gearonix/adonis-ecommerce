import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {ServerExceptions} from '@app/types/exceptions'
import * as fs from 'fs'
import * as path from 'path'
import * as uuid from 'uuid'
import {RequestContext} from 'nestjs-request-context'
import {FileDirectories} from '@app/types/global'
import {appConfig} from '@app/config'
import {getRequest, lastItemOf} from '@app/lib/helpers'

@Injectable()
export class FilesService {
  public async uploadFile(file, mode : FileDirectories): Promise<string> {
    try {
      const fileName = await this.generateFileName(file.originalname)
      const staticPath = this.getStaticPath(mode)

      await this.createFolderIfNotExists(staticPath)

      fs.writeFileSync(path.join(staticPath, fileName), file.buffer)

      return this.fileToUrl(fileName, mode)
    } catch (e) {
      throw new HttpException(ServerExceptions.FILE_UPLOAD_ERROR,
          HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  public async deleteFile(fileUrl, mode: FileDirectories) {
    try {
      const staticPath = this.getStaticPath(mode)

      await this.createFolderIfNotExists(staticPath)

      const fileName = await this.urlToFile(fileUrl, mode)

      fs.unlinkSync(path.join(this.getStaticPath(mode), fileName))
    } catch (e) {

    }
  }


  private async fileToUrl(fileName: string, mode: FileDirectories): Promise<string> {
    const req = getRequest(RequestContext)
    return `${req.protocol}://${req.get('Host')}/${appConfig.globalPrefix}/static/${mode}/${fileName}`
  }

  private async urlToFile(fileUrl: string, mode: FileDirectories): Promise<string> {
    return lastItemOf(fileUrl.split(`/static/${mode}/`))
  }

  private async generateFileName(fileName: string): Promise<string> {
    return `${uuid.v4()}.${lastItemOf(fileName.split('.'))}`
  }

  private getStaticPath(mode: FileDirectories): string {
    return path.resolve(__dirname, '..', '..', 'static', mode)
  }

  private createFolderIfNotExists(staticPath) {
    if (!fs.existsSync(staticPath)) {
      fs.mkdirSync(staticPath, {recursive: true})
    }
  }
}
