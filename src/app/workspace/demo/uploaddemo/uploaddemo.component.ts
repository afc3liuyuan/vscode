import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/primeng';

@Component({
    selector: 'app-uploaddemo',
    templateUrl: './uploaddemo.component.html',
    styleUrls: ['./uploaddemo.component.css']
})
export class UploaddemoComponent {

    msgs: Message[];
    uploadedFiles: any[] = [];

    onUpload(event) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: '文件已上传', detail: '' });
    }

}
