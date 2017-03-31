import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap';
import { demoRoutes } from './demo.routes';

import { DemoComponent } from './demo.component';
import { TreedemoComponent } from './treedemo/treedemo.component';
import { MessagedemoComponent } from './messagedemo/messagedemo.component';
import { DatedemoComponent } from './datedemo/datedemo.component';
import { UploaddemoComponent } from './uploaddemo/uploaddemo.component';

import { NodeService } from '../../services/nodeservice';
import { TreeModule,TreeNode } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

import { DialogModule } from 'primeng/primeng';
import { ConfirmDialogModule } from 'primeng/primeng';

import { CalendarModule } from 'primeng/primeng';

import { FileUploadModule } from 'primeng/primeng';

@NgModule({
    imports: [
        SharedModule,
        TreeModule,
        TabViewModule,
        GrowlModule,
        ButtonModule,
        ContextMenuModule,
        CodeHighlighterModule,
        DialogModule,
        ConfirmDialogModule,
        CalendarModule,
        FileUploadModule,
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
        RouterModule.forChild(demoRoutes)
    ],
    exports: [],
    declarations: [
        DemoComponent,
        TreedemoComponent,
        MessagedemoComponent,
        DatedemoComponent,
        UploaddemoComponent
    ],
    providers: [
        NodeService
    ]
})
export class DemoModule { }