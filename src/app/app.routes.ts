import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'course-list',
        component: CourseListComponent
    },
    {
        path: 'course-details/:id',
        component: CourseDetailsComponent 
    },
    {
        path: 'home',
        component: HomeComponent 
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'course-list'
    }
];
