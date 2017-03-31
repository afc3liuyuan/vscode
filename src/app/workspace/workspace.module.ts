import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap';

import { WorkspaceComponent } from './workspace.component';
import { workspaceRoutes } from './workspace.routes';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';

@NgModule({
    imports: [
        SharedModule,
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
        RouterModule.forChild(workspaceRoutes)
    ],
    exports: [],
    declarations: [
        WorkspaceComponent,
        LeftNavComponent,
        TopMenuComponent,
        FooterInfoComponent
    ],
    providers: [
    ],
})
export class WorkspaceModule { }
