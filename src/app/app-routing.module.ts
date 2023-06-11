import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardResolver } from './resolvers/dashboard.resolver';
import { ProfileResolver } from './resolvers/profile.resolver';
import { TaskResolver } from './resolvers/task.resolver';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/tasks',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('./module/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./module/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
            ),
        resolve: {
            profileResolver: ProfileResolver,
            dashboardResolver: DashboardResolver,
        },
    },
    {
        path: 'profile',
        loadChildren: () =>
            import('./module/profile/profile.module').then(
                (m) => m.ProfileModule
            ),
        resolve: {
            profileResolver: ProfileResolver,
        },
    },
    {
        path: 'tasks',
        loadChildren: () =>
            import('./module/task/task.module').then((m) => m.TaskModule),
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
