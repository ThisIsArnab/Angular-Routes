import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list.component';
import { CrisisListComponent} from './crisis-list.component';
import { PageNotFoundComponent} from './not-found.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeroListComponent, CrisisListComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
