import { Routes } from '@angular/router';
import { Feature1Component } from './features/feature1/feature1.component';
import { Feature2Component } from './features/feature2/feature2.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'feature1', component: Feature1Component },
    { path: 'feature2', component: Feature2Component },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
