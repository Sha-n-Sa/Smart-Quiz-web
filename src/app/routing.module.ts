import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { PollsComponent } from './polls/polls.component';
import { VoteComponent } from './vote/vote.component';
import { ProgressComponent } from './progress/progress.component';



// Save space in the root module, export components here
export const routedComponents = [
  AppComponent,
  HomeComponent,
  WelcomeComponent,
  PollsComponent,
  VoteComponent,
  AdminComponent,
  FeedbackComponent,
  StudentComponent,
  ProgressComponent
 
];

const routes: Routes = [
  { path: 'av/polls', component: PollsComponent },
  { path: 'av/my-polls', component: PollsComponent },
  { path: 'av/vote/:id', component: VoteComponent },
  { path: 'av/new', component: AdminComponent },
  { path: 'av/edit/:rid/:pid', component: AdminComponent },
  { path: 'av/welcome', component: WelcomeComponent },
  { path: 'av/feedback', component: FeedbackComponent },
  { path: 'av/student', component: StudentComponent },
  { path: 'av/progress/:id', component: ProgressComponent},
   { path: 'av', component: HomeComponent},



 
  { path: '**', redirectTo: 'av', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }