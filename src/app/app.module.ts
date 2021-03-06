import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Reactive Form
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from './shared/services/auth.service';
import { OwnEventsComponent } from './components/own-events/own-events.component';
import { NextEventsComponent } from './components/next-events/next-events.component';
import { FooterComponent } from './components/footer/footer.component';
import {CreateEventComponent} from './components/create-event/create-event.component';
import {SidebarModule} from 'ng-sidebar';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {EventListComponent} from './components/event-list/event-list.component';
import { AgbComponent } from './components/agb/agb.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { DataPrivacyComponent } from './components/data-privacy/data-privacy.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import {ProfileOverviewComponent} from './components/profile-overview/profile-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    OwnEventsComponent,
    NextEventsComponent,
    SidebarComponent,
    NextEventsComponent,
    FooterComponent,
    CreateEventComponent,
    ImpressumComponent,
    DataPrivacyComponent,
    EventListComponent,
    AgbComponent,
    AccountSettingsComponent,
    ProfileOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    SidebarModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
