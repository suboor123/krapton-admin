import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardResolver } from './resolvers/dashboard.resolver';
import { ProfileResolver } from './resolvers/profile.resolver';
import { TaskResolver } from './resolvers/task.resolver';
import { AnnouncementResolver } from './resolvers/announcement.resolver';
import { AuthGaurdGuard } from './guards/auth-gaurd.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        loadChildren: () => import('./module/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./module/dashboard/dashboard.module').then((m) => m.DashboardModule),
        canActivate: [AuthGaurdGuard],
        resolve: {
            profileResolver: ProfileResolver,
            dashboardResolver: DashboardResolver,
        },
    },
    {
        path: 'profile',
        loadChildren: () => import('./module/profile/profile.module').then((m) => m.ProfileModule),
        canActivate: [AuthGaurdGuard],
        resolve: {
            profileResolver: ProfileResolver,
        },
    },
    {
        path: 'tasks',
        loadChildren: () => import('./module/task/task.module').then((m) => m.TaskModule),
    },
    {
        path: 'announcements',
        loadChildren: () => import('./module/announcement/announcement.module').then((m) => m.AnnouncementModule),
        canActivate: [AuthGaurdGuard],
        resolve: {
            profileResolver: ProfileResolver,
            taskResolver: TaskResolver,
        },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [ProfileResolver, TaskResolver, DashboardResolver],
})
export class AppRoutingModule {}
