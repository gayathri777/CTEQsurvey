import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /* {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }, */
  { path: '', redirectTo: 'consent-page', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  { path: 'survey-paper', loadChildren: () => import('./survey-paper/survey-paper.module').then(m => m.SurveyPaperPageModule)},
  { path: 'consent-page', loadChildren: () => import('./consent-page/consent-page.module').then(m => m.ConsentPagePageModule)},
  { path: 'question1', loadChildren: () => import('./question1/question1.module').then(m => m.Question1PageModule)},
  { path: 'question2', loadChildren: () => import('./question2/question2.module').then(m => m.Question2PageModule)},
  { path: 'question3', loadChildren: () => import('./question3/question3.module').then(m => m.Question3PageModule)},
  { path: 'question4', loadChildren: () => import('./question4/question4.module').then(m => m.Question4PageModule)},
  { path: 'question5', loadChildren: () => import('./question5/question5.module').then(m => m.Question5PageModule)},
  { path: 'question6', loadChildren: () => import('./question6/question6.module').then(m => m.Question6PageModule)},
  { path: 'question7', loadChildren: () => import('./question7/question7.module').then(m => m.Question7PageModule)},
  { path: 'question8', loadChildren: () => import('./question8/question8.module').then(m => m.Question8PageModule)},
  { path: 'question9', loadChildren: () => import('./question9/question9.module').then(m => m.Question9PageModule)},
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
