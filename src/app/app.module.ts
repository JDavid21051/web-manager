import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbSidebarService,
  NbCardModule,
  NbIconModule, NbButtonModule
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';


export const NebularModules = [
  NbThemeModule.forRoot({name: 'corporate'}),
  NbLayoutModule,
  NbSidebarModule,
  NbEvaIconsModule,
  NbIconModule,
  NbCardModule,
  NbButtonModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...NebularModules
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
