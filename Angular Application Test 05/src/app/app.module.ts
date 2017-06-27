import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeroListComponent } from './heroes/hero-list.component';
import { CrisisListComponent} from './crisis-list.component';
import { PageNotFoundComponent } from './not-found.component';
import { HeroModule } from './heroes/heroes.module';

@NgModule({
  imports:      [ BrowserModule,HeroModule, AppRoutingModule, FormsModule ],    /** NOTE: order of route tables is important */
  declarations: [ AppComponent, CrisisListComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
