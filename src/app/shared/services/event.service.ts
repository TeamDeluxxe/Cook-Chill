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
    this.event = db.collection<Event>('/event_list').valueChanges({idField: 'id'});
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user.uid;
      }
    });
  }


  async save(event: Event) {
    try {
      await this.db.collection('/event_list').add({
        name: event.name,
        allergies: event.allergies,
        category: event.category,
        eventDate: event.eventDate,
        meal: event.meal,
        price: event.price,
        shop: event.shop,
        visitNumber: event.visitNumber,
        visiter: event.visiter,
        whoCooks: event.whoCooks,
        whoShops: event.whoShops,
      });
      console.log('Klappt');
    } catch (e) {
      console.log('Klappt nicht');
    }
  }

}
