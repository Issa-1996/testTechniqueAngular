import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TacheUserComponent } from './tache-user/tache-user.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

const routes: Routes = [
  { path: '', component: UtilisateurComponent },
  { path: 'tache', component: TacheUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
