import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
import { SceneOneComponent } from './scene-one/scene-one.component';
import { SceneTwoComponent } from './scene-two/scene-two.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRippleModule} from '@angular/material/core';
import { SceneThreeComponent } from './scene-three/scene-three.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SceneOneComponent,
    SceneTwoComponent,
    SceneThreeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
