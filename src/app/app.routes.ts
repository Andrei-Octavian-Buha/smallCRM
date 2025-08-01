import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
export const routes: Routes = [

               {   path: 'dashboard', 
            component: DashboardComponent,
            title: 'Home -',
        },
               {   path: 'user', 
            component: UserComponent,
            title: 'Users -',
        },
        {   path: 'user/:id', 
            component: UserDetailComponent,
            title: 'User Detail -',
        }
];
