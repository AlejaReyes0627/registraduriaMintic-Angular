import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { NbButtonModule } from '@nebular/theme';
import { NbLayoutModule } from '@nebular/theme';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { FormsModule} from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    FormsModule,
    NbCardModule,
    NbButtonModule,
    NbLayoutModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    HomepageComponent,    
  ],
})
export class PagesModule {
}
