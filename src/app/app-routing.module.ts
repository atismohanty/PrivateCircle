import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { FiltersComponent } from './filters/filters.component';
import { HistoryComponent } from './history/history.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
{path:"lists",component:ListsComponent},
{path:"filters",component:FiltersComponent},
{path:"history",component:HistoryComponent},
{path:"description",component:DescriptionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 


 }
