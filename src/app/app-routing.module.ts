import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { PostListComponent } from './post-list/post-list.component';
import { SearchComponent } from './search/search.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'posts', component: PostListComponent},
  {path:'posts/:id', component:ShowComponent},
  {path:'contact', component: ContactComponent },
  {path:'category/:id', component: CategoryComponent},
  {path:'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
