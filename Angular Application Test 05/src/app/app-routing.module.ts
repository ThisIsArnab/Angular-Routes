import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CrisisListComponent} from './crisis-list.component';
import { PageNotFoundComponent} from './not-found.component';


let routes: Routes = [
    { path: 'crisis-center', component: CrisisListComponent },
    { path: '', redirectTo: '/heroes', pathMatch:'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}
