import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PiechartComponent } from './piechart/piechart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LinechartComponent } from './linechart/linechart.component';


@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent,
    LinechartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
