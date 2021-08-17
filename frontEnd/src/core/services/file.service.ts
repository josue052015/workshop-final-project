
import axios, { AxiosResponse } from "axios";
import settings from "@/core/utils/app-settings";
import { IDocument } from "../model";
export class FileService {
    public apiUrl: string;
    constructor(public controller: string = 'file') {
        this.apiUrl = settings.API_URL + "api/" + controller + "/";
    }
    public async uploadMany(files: File[], action = 'upload-many'){
        let data = new FormData();
        files.forEach((x) => data.append('files', x));
        const url = `${this.apiUrl}${action}`
        return await axios.post<IDocument>(url, data);
    }
    public async upload(file: File, action = 'upload') {
        let data = new FormData();
        data.append('file', file);
        const url = `${this.apiUrl}${action}`
        return await axios.post<IDocument>(url, data);
    }

    public download(name: string, contentType:string, action = 'download', blank = true) {
        let target = blank ? '_blank' : undefined;
        const url = this.getPublicUrl(name, contentType, action);
        window.open(url,target);
    }
    public getPublicUrl(fileName: string, contentType: string, action = 'download') {
        return `${settings.API_URL}api/file/${action}?fileName=${fileName}&contentType=${contentType}`;
    }

    public async ExportCsv(file: File, fileName: string) {
        const url = window.URL.createObjectURL(new Blob([file], { type: 'text/csv' }));
        let link = document.createElement('a')
        link.href = url;
        link.download = `${fileName}.csv`;
        document.body.appendChild(link);
        link.click()
        document.body.removeChild(link);
        //fiel
    }
}
