import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvShowComponent } from './tv-show/tv-show.component';

const routes: Routes = [
  {path:"",redirectTo:"home", pathMatch:"full"},
  {path:"home",canActivate:[AuthGuard], component:HomeComponent},
  {path:"details", canActivate:[AuthGuard], component:DetailsComponent},
  {path:"details/:id/:mediaType", canActivate:[AuthGuard], component:DetailsComponent},
  {path:"about",canActivate:[AuthGuard], component:AboutComponent},
  {path:"movies",canActivate:[AuthGuard], component:MoviesComponent},
  {path:"people",canActivate:[AuthGuard], component:PeopleComponent},
  {path:"tvshows",canActivate:[AuthGuard], component:TvShowComponent},
  {path:"tvshows",canActivate:[AuthGuard], component:TvShowComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
