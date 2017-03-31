import { RouterModule } from '@angular/router';
import { TreedemoComponent } from './treedemo/treedemo.component';
import { MessagedemoComponent } from './messagedemo/messagedemo.component';
import { DatedemoComponent } from './datedemo/datedemo.component';
import { UploaddemoComponent } from './uploaddemo/uploaddemo.component';
import { DemoComponent } from './demo.component';

export const demoRoutes=[
	{
        path:'',
        component:DemoComponent,
        children: [
	    	{ path: '',redirectTo:'treedemo',pathMatch:'full'},
	    	{ path: 'treedemo', component:TreedemoComponent },
            { path: 'messagedemo', component:MessagedemoComponent },
            { path: 'datedemo', component:DatedemoComponent },
            { path: 'uploaddemo', component:UploaddemoComponent }
	    ]
    }
];