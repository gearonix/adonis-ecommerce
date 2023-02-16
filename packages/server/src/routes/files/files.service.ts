import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {ServerExceptions} from "@app/types/exceptions";
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid'
import {RequestContext} from "nestjs-request-context";

@Injectable()
export class FilesService{
    private staticPath = path.resolve(__dirname,'..','..','static')

    public async uploadFile(file): Promise<string>{
        try{
            const fileName = await this.generateFileName(file.originalname)
            if (!fs.existsSync(this.staticPath)){
                fs.mkdirSync(this.staticPath, {recursive: true})
            }
            fs.writeFileSync(path.join(this.staticPath,fileName), file.buffer)

            return this.fileToUrl(fileName)
        }
        catch (e){
            throw new HttpException(ServerExceptions.FILE_UPLOAD_ERROR,
            HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    public async deleteFile(fileUrl){
        try{
            const fileName = await this.urlToFile(fileUrl)

            fs.unlinkSync(path.join(this.staticPath, fileName))
        }
        catch (e){
            throw new HttpException(ServerExceptions.FILE_REMOVAL_ERROR,
                HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }




    private async fileToUrl(fileName: string): Promise<string>{
        const req = RequestContext.currentContext.req;
        return `${req.protocol}://${req.get('Host')}/static/${fileName}`
    }

    private async urlToFile(fileUrl: string): Promise<string>{
        return fileUrl.split('/static/')[1]
    }

    private async generateFileName(fileName: string): Promise<string>{
        const fileNameArray = fileName.split('.')

        return `${uuid.v4()}.${fileNameArray[fileNameArray.length - 1]}`
    }

}
