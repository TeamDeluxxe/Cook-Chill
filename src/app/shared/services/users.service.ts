import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {ProfileOverview} from '../../models/Profile-Overview';
import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  profile: Observable<ProfileOverview[]>;
  userData: any;

  constructor(private db: AngularFirestore, private authService: AuthService, private afAuth: AngularFireAuth) {
    this.profile = db.collection<ProfileOverview>('/profile').valueChanges({idField: 'id'});
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user.uid;
      }
    });
  }


  async save(profile: ProfileOverview) {
    try {
      await this.db.collection('/profile').add({
        uid: this.userData,
        firstName: profile.firstName,
        surname: profile.surname,
        allergies: profile.allergies
        // city: profile.city
        // interests: profile.interests,
        // intentions: profile.intentions,
        // age: profile.age
      });
      console.log('Klappt');
    } catch (e) {
      console.log('Klappt nicht');
    }
  }

}
