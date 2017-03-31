import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/primeng';
import { Message } from 'primeng/primeng';

@Component({
    selector: 'messagedemo',
    templateUrl: './messagedemo.component.html',
    styleUrls: ['./messagedemo.component.css'],
    providers: [ConfirmationService]
})
export class MessagedemoComponent {

    msgs: Message[] = [];

    constructor(private confirmationService: ConfirmationService) { }

    display: boolean = false;

    showDialog() {
        this.display = true;
    }

    hideDialog() {
        this.display = false;
    }

    confirm1() {
        this.confirmationService.confirm({
            message: '确认提交此项?',
            header: '',
            icon: 'fa fa-question-circle',
            accept: () => {
                this.msgs = [];
                this.msgs.push({ severity: 'info', summary: '已确认', detail: '您已提交成功' });
            }
        });
    }

    confirm2() {
        this.confirmationService.confirm({
            message: '确认删除此项?',
            header: '',
            icon: 'fa fa-trash',
            accept: () => {
                this.msgs = [];
                this.msgs.push({ severity: 'info', summary: '已删除', detail: '您已删除成功' });
            }
        });
    }

}
