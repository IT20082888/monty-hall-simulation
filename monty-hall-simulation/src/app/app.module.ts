import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this line
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimulationFormComponent } from './simulation-form/simulation-form.component';
import { SimulationResultsComponent } from './simulation-results/simulation-results.component';

@NgModule({
  declarations: [
    AppComponent,
    SimulationFormComponent,
    SimulationResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Add this line

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

