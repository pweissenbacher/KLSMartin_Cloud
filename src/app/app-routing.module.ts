import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { LoginGuardService } from './login-guard.service';
import { MainComponent } from './main/main.component';

const routes: Routes = [{path: "dashboard", component: MainComponent, canActivate: [LoginGuardService]}, 
                        {path: "login", loadChildren: ()=>import ("./login/login.module").then(m=>m.LoginModule)},
                        {path: "**", redirectTo: "login", pathMatch: "full"},
                        {path: "", redirectTo: "login", pathMatch: "full"},
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
