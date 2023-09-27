import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServresComponent } from './servres/servres.component';
import { ARComponent } from './ar/ar.component';
import { ConcatpipPipe } from './concatpip.pipe';
import { ReusableComponent } from './reusable/reusable.component';
import { ChildComponent } from './child/child.component';
import { ShortenPipe } from './shorten.pipe';
import { MychartComponent } from './mychart/mychart.component';
import { RegisterationComponent } from './registeration/registeration.component';

@NgModule({
  declarations: [
    AppComponent,
    ServresComponent,
    ARComponent,
    ConcatpipPipe,
    ReusableComponent,
    ChildComponent,
    ShortenPipe,
    MychartComponent,
    RegisterationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
