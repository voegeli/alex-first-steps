import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HobbiesComponent } from 'src/app/pages/hobbies/hobbies.component';
import { IndexComponent } from 'src/app/pages/index/index.component';

const routes: Routes = [
    {
        path: 'index',
        component: IndexComponent
    },
    {
        path: 'hobbies',
        component: HobbiesComponent
    },
    {
        path: '**', redirectTo: 'index'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
