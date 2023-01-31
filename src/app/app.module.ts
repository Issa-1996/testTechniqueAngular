import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DataApiServiceService } from './Service/data-api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { TacheUserComponent } from './tache-user/tache-user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    NavBarComponent,
    TacheUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [
    DataApiServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
