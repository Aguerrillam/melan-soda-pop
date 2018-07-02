import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PostsComponent} from './posts/posts.component';
import { AboutComponent} from './about/about.component';

const routes: Routes = [
  {
    path:'',
    component: PortfolioComponent
  },
  {
    path:'posts',
    component: PostsComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
