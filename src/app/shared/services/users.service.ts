import {AngularFirestore} from '@angular/fire/firestore';
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

  constructor(private db: AngularFirestore) {
    this.profile = db.collection<ProfileOverview>('/profile').valueChanges({idField: 'id'});
  }

  async save(profile: ProfileOverview) {
    try {
      await this.db.collection('/profile').add({
        firstName: profile.firstName,
      });
      console.log('Klappt');
    } catch (e) {
      console.log('Fehler');
    }
  }

}
