import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClubesComponent} from './clubes/clubes.component';
import { TreinadoresComponent } from './treinadores/treinadores.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  //Clubes
  {
    path: 'clubes',
    component: ClubesComponent
  },
  //Treinadores
  {
    path: 'treinadores',
    component: TreinadoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
