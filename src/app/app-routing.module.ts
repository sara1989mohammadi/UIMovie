import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent} from './search.component';
import { DetialComponent } from './detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/search', pathMatch: 'full' },
    {path: 'detail/:id', component: DetialComponent },
    {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
