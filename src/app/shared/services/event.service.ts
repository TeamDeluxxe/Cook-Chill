import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Event} from '../../models/Event';
import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  event: Observable<Event[]>;
  userData: any;

  constructor(private db: AngularFirestore, private authService: AuthService, private afAuth: AngularFireAuth) {
    this.event = db.collection<Event>('/event').valueChanges({idField: 'id'});
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user.uid;
      }
    });
  }


  async save(event: Event) {
    try {
      await this.db.collection('/event').add({
        name: event.name,
        allergies: event.allergies,
        category: event.category,
        eventDate: event.date,
        meal: event.meal,
        price: event.price,
        time: event.time,
        shop: event.shop,
        visitNumber: event.visitNumber,
        visiter: event.visiter,
        registration_period: event.registrationperiod,
        confirmation_date: event.confirmationdate
      });
      console.log('Klappt');
    } catch (e) {
      console.log('Klappt nicht');
    }
  }

}
