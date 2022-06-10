import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from  '@angular/material/toolbar';

import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import { BackgroundComponent } from './background/background.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatSelectModule } from '@angular/material/select'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import { FormsModule } from '@angular/forms';
import { ApplicationListComponent } from './application-list/application-list.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    BackgroundComponent,
    ApplicationListComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
