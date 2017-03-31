import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './workspace/login/login.component';

import { AuthGuard } from './guards/auth.guard';

export const appRoutes=[
	{
		path:'',
		loadChildren:'./workspace/workspace.module#WorkspaceModule',
        canActivate: [AuthGuard]
	},
	{
		path:"login",
		component:LoginComponent
	},
	{
		path:"workspace",
		loadChildren:'./workspace/workspace.module#WorkspaceModule',
        canActivate: [AuthGuard]
	},
	{
		path:'**',
		redirectTo: 'workspace'
	}
];