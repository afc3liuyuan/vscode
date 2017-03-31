import { RouterModule } from '@angular/router';
//import { DemoComponent } from './demo/demo.component';
import { WorkspaceComponent } from './workspace.component';

export const workspaceRoutes=[
	{
        path:'',
        component:WorkspaceComponent,
        children: [
	    	{ path: '',redirectTo:'demo',pathMatch:'full'},
	    	{ path: 'demo', loadChildren:'./demo/demo.module#DemoModule' },
	    ]
    }
];