import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Required components for which route services to be activated
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';

// Import guard services
import { AuthGuard } from '../guard/auth.guard';
import { SecureInnerPagesGuard } from '../guard/secure-inner-pages.guard';
import {CreateEventComponent} from '../../components/create-event/create-event.component';
import {EventListComponent} from '../../components/event-list/event-list.component';
import {AgbComponent} from '../../components/agb/agb.component';
import {ImpressumComponent} from '../../components/impressum/impressum.component';
import {DataPrivacyComponent} from '../../components/data-privacy/data-privacy.component';

// Hier Routen
// { path: 'name_eingeben', component: componentname, canActivate: [AuthGuard] }
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'create-event', component: CreateEventComponent, canActivate: [AuthGuard] },
  { path: 'event-list', component: EventListComponent, canActivate: [AuthGuard] },
  { path: 'agb', component: AgbComponent, canActivate: [AuthGuard] },
  { path: 'datenschutz', component: DataPrivacyComponent, canActivate: [AuthGuard] },
  { path: 'event-list', component: EventListComponent, canActivate: [AuthGuard] },
  { path: 'impressum', component: ImpressumComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
