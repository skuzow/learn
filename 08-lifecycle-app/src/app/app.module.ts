import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { ShowNameComponent } from './components/show-name/show-name.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    ShowNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
