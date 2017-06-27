import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { HeroDetailComponent} from './hero-detail.component';
import { HeroListComponent} from './hero-list.component';
import { HeroService } from './hero.service';
import { HeroRoutingModule } from './hero-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, HeroRoutingModule],
    declarations: [HeroDetailComponent, HeroListComponent],
    providers:[HeroService]
})
export class HeroModule {}