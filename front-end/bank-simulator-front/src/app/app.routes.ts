import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'registerUser',
        loadComponent: () => 
            import('./Pages/RegisterUser/RegisterUser').then(
                (m) => m.RegisterUser
            )
    },
    {
        path: '',
        redirectTo: 'registerUser',
        pathMatch: 'full'
    }
];
