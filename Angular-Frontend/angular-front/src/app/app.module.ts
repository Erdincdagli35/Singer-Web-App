import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingerListComponent } from './singer-list/singer-list.component';
import { CreateSingerComponent } from './create-singer/create-singer.component';
import { FormsModule } from '@angular/forms';
import { UpdateSingerComponent } from './update-singer/update-singer.component'
import { SingerDetailsComponent } from './singer-details/singer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SingerListComponent,
    CreateSingerComponent,
    UpdateSingerComponent,
    SingerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
