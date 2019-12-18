import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { FiltersComponent } from './filters/filters.component';
import { HistoryComponent } from './history/history.component';
import { DescriptionComponent } from './description/description.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminpageComponent } from './adminpage/adminpage.component';


@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    FiltersComponent,
    HistoryComponent,
    DescriptionComponent,
    CustomerComponent,
    AdminpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
