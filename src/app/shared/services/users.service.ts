import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {ObjectUnsubscribedError, Observable} from 'rxjs';
import {ProfileOverview} from '../../models/Profile-Overview';
import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  profile: Observable<ProfileOverview[]>;

  // profileCollection: AngularFirestoreCollection<ProfileOverview>;
  // profile: Observable<ProfileOverview[]>;
  userData: any;

  constructor(private db: AngularFirestore, private authService: AuthService, private afAuth: AngularFireAuth) {
    this.profile = db.collection<ProfileOverview>('/profile').valueChanges({idField: 'id'});
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user.uid;
      }
    });
  }

  // constructor(private db: AngularFirestore, private authService: AuthService, private afAuth: AngularFireAuth) {
  //   this.profileCollection = this.db.collection('Profile');
  //   this.profile = this.profileCollection.snapshotChanges().map(
  //     changes => {
  //       return changes.map(
  //         a => {
  //           const data = a.payload.doc.data() as ProfileOverview;
  //           data.id = a.payload.doc.id;
  //           return data;
  //         });
  //     });
  //
  //   )
  // }


   save(profile: ProfileOverview) {
    try {
       this.db.collection('/profile').add({
        uid: this.userData,
        firstName: profile.firstName,
        surname: profile.surname,
        allergies: profile.allergies,
        city: profile.city,
        age: profile.age,
        interests: profile.interests,
        intentions: profile.intentions,

      });
       console.log('Klappt');
    } catch (e) {
      console.log('Klappt nicht');
    }
  }

  getProfile() {
    return this.db.collection('profile').snapshotChanges();
  }

  delete(p: ProfileOverview) {
    this.db.collection('/profile').doc(p.uid).delete();
  }
}
