import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeroListComponent} from './hero-list.component';
import { CrisisListComponent} from './crisis-list.component';
import { PageNotFoundComponent} from './not-found.component';


let routes: Routes = [
    { path: 'heroes', component:HeroListComponent },
    { path: 'crisis-center', component: CrisisListComponent },
    { path: '', component: HeroListComponent },
    { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}
