import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { SceneOneComponent } from './scene-one/scene-one.component';
import { SceneTwoComponent } from './scene-two/scene-two.component';

export const appRoutes: Routes = [
    { path: 'intro', component: IntroComponent },

    { path: 'scene-one', component: SceneOneComponent },

    { path: 'scene-two', component: SceneTwoComponent },

    { path: '',
      redirectTo: '/intro',
      pathMatch: 'full'
    }
    // { path: '**', component: PageNotFoundComponent }
  ];