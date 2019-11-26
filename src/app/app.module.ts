import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
import { SceneOneComponent } from './scene-one/scene-one.component';
import { SceneTwoComponent } from './scene-two/scene-two.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SceneOneComponent,
    SceneTwoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
