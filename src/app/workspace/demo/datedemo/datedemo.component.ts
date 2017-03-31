import { Component, OnInit } from '@angular/core';
//import { CalendarModule } from 'primeng/primeng';

@Component({
    selector: 'datedemo',
    templateUrl: './datedemo.component.html',
    styleUrls: ['./datedemo.component.css']
})
export class DatedemoComponent {

    date1: Date;
    date2: Date;
    date3: Date;

    zh: any;

    constructor() { }

    ngOnInit() {
        this.zh = {
            firstDayOfWeek: 1,
            dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
            dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
            monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
        };
    }

}
