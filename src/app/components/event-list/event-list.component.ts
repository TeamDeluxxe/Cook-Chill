import { Component, OnInit } from '@angular/core';
import {Event} from '../../models/Event';
import {FormControl} from "@angular/forms";
import {formatSize} from "@angular-devkit/build-angular/src/angular-cli-files/utilities/stats";
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventList: Array<Event>;
  filteredEventList: Array<Event>;
  filterGericht = new FormControl('');
  filterKategorie = new FormControl('');
  filterTeilnehmeranzahl = new FormControl('');
  filterDatum = new FormControl('');
  filterAllegiere = new FormControl('');
  filterName = new FormControl('');


  constructor() { }

  ngOnInit() {
    this.eventList = [];
    this.filteredEventList = [];

    let e1: Event = { name: 'Veranstaltung1', allergies: 'Tomate', category: 'Kuchen', eventDate: new Date(2020,11,24), meal: 'StaeK mit kartoffel', price: 10, shop: true, visitNumber: 5, visiter: 3, whoCooks: 'Emiljano', whoShops: 'Gastgeber'};
    this.eventList.push(e1);
    let e2: Event = { name: 'Veranstaltung2', allergies: 'Gurke', category: 'Vegan', eventDate: new Date(2019,10,14), meal: 'Pizza', price: 15, shop: false, visitNumber: 7, visiter: 4, whoCooks: 'Gastgeber', whoShops: 'Nick'};
    this.eventList.push(e2);
    let e3: Event = { name: 'Veranstaltung3', allergies: 'Nuss', category: 'Süßigkeiten', eventDate: new Date(2020,7,12), meal: 'Chips', price: 7, shop: true, visitNumber: 6, visiter: 2, whoCooks: 'Hennig', whoShops: 'Emiljano'};
    this.eventList.push(e3);

    this.doFilter();
  }

  doFilter() {
    //this.eventList[0].meal = this.filterGericht.value;
    this.filteredEventList = this.eventList.slice();

    if(this.filterGericht.value !== '') {

      // Filterung auf einen passenden Textteil (egal ob GROß oder kleinschreibung)
      this.filteredEventList = this.filteredEventList.filter(ev => ev.meal.toLowerCase().indexOf( this.filterGericht.value.toString().toLowerCase()) > -1 );
    }

    }

}
