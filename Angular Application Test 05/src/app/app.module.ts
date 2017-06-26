import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list.component';
import { CrisisListComponent} from './crisis-list.component';
import { PageNotFoundComponent} from './not-found.component';

const appRoutes: Routes = [
    { path: 'crisis-center', component: CrisisListComponent },
    { path: 'heroes', component: HeroListComponent },

    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), FormsModule ],
  declarations: [ AppComponent, HeroListComponent, CrisisListComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
