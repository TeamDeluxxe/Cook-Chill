import { Injectable, NgZone } from '@angular/core';
import { User } from '../../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Angemeldete Benutzerdaten speichern

  constructor(
    public afs: AngularFirestore,   // Inject Firestore-Dienst
    public afAuth: AngularFireAuth, // Inject Firebase-Authentifizierungsdienst
    public router: Router,
    public ngZone: NgZone // NgZone-Dienst zum Entfernen von Warnungen außerhalb des Gültigkeitsbereichs
  ) {
    /* Speichern von Benutzerdaten in localstorage wann
     angemeldet und beim Abmelden auf null gesetzt */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // Anmelden mit E-Mail / Passwort an
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Registrieren mit E-Mail / Passwort an
  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* SendVerificaitonMail () -Funktion auf, wenn sich ein neuer Benutzer anmeldet */

        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // E-Mail-Bestätigung senden, wenn sich ein neuer Benutzer registrieren
  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['verify-email-address']);
      })
  }

  // Passwort zurücksetzen
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
  }

  // Gibt true zurück, wenn der Benutzer angemeldet ist und die E-Mail-Adresse bestätigt wurde
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false);
  }



  // Authentifizierungslogik zum Ausführen von Authentifizierungsanbietern
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error)
      })
  }

  /* Einrichten der Benutzerdaten bei der Anmeldung mit Benutzername / Passwort,
  Anmeldung Benutzername / Passwort in der Firestore-Datenbank mit AngularFirestore + AngularFirestoreDocument-Dienst */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    })
  }

}
