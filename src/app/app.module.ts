import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardModule } from './dashboard/dashboard.module'
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    // ngx-translate and the loader module
    /*HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            deps: [HttpClient],
            useFactory: (http : HttpClient) =>{
              return new TranslateHttpLoader(http);
            },
        }
    })*/
  ],
  providers: [
    {
      provide : MAT_FORM_FIELD_DEFAULT_OPTIONS, 
      useValue: { appearance: 'outline' }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
