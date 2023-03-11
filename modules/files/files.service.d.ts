import { FileDirectories } from '@app/types/global';
export declare class FilesService {
    uploadFile(file: any, mode: FileDirectories): Promise<string>;
    deleteFile(fileUrl: any, mode: FileDirectories): Promise<void>;
    private fileToUrl;
    private urlToFile;
    private generateFileName;
    private getStaticPath;
    private createFolderIfNotExists;
}
