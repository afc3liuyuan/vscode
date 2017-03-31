import { Component, OnInit } from '@angular/core';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

    users: User[] = [];

    constructor(private userService: UserService) {

    }

    ngOnInit() {
        //用require动态加载的外部JS
        require("custom.js");

        // get users from secure api end point
        this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }
}
