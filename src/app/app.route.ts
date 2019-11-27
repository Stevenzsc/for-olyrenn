import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { SceneOneComponent } from './scene-one/scene-one.component';
import { SceneTwoComponent } from './scene-two/scene-two.component';
import { SceneThreeComponent } from './scene-three/scene-three.component';

export const appRoutes: Routes = [
    { path: 'intro', component: IntroComponent },

    { path: 'scene-one', component: SceneOneComponent },

    { path: 'scene-two', component: SceneTwoComponent },

    { path: 'scene-three', component: SceneThreeComponent },

    { path: '',
      redirectTo: '/scene-one',
      pathMatch: 'full'
    }
    // { path: '**', component: PageNotFoundComponent }
  ];