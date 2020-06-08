import { Component, OnInit } from '@angular/core';
import {EventService} from "../../shared/services/event.service";
import {AuthService} from "../../shared/services/auth.service";
import {Event} from "../../models/Event";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  event: Event;

  constructor(private db: EventService, private authService: AuthService) {
    this.event = new Event();
  }

  ngOnInit() {
  }
  save() {
    this.db.save(this.event);
    // this.event = new Event();
  }
}
