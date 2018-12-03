import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainnewComponent } from './components/mainnew/mainnew.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent},
	{ path: 'about', component: AboutComponent},
	// { path: 'noticia/:id', component: MainnewComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
