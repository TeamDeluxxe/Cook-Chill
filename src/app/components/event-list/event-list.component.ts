import { Component, OnInit } from '@angular/core';
import {Event} from '../../models/Event';
import {FormControl} from "@angular/forms";
import {formatSize} from "@angular-devkit/build-angular/src/angular-cli-files/utilities/stats";
import {formatDate} from "@angular/common";
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


  constructor() {
  }

  ngOnInit() {
    this.eventList = [];
    this.filteredEventList = [];

    let e1: Event = {
      name: 'Veranstaltung1',
      allergies: 'Tomate',
      category: 'Kuchen',
      date: new Date(2020, 11, 24),
      meal: 'StaeK mit kartoffel',
      price: 10,
      shop: true,
      visitNumber: 5,
      visiter: 3,
      whoCooks: 'Emiljano',
      whoShops: 'Gastgeber'
    };
    this.eventList.push(e1);
    let e2: Event = {
      name: 'Veranstaltung2',
      allergies: 'Gurke',
      category: 'Vegan',
      date: new Date(2019, 10, 14),
      meal: 'Pizza',
      price: 15,
      shop: false,
      visitNumber: 7,
      visiter: 4,
      whoCooks: 'Gastgeber',
      whoShops: 'Nick'
    };
    this.eventList.push(e2);
    let e3: Event = {
      name: 'Veranstaltung3',
      allergies: 'Nuss',
      category: 'Süßigkeiten',
      date: new Date(2020, 7, 12),
      meal: 'Chips',
      price: 7,
      shop: true,
      visitNumber: 6,
      visiter: 2,
      whoCooks: 'Hennig',
      whoShops: 'Emiljano'
    };
    this.eventList.push(e3);

    this.doFilter();
  }

  doFilter() {

    this.filteredEventList = this.eventList.slice();

    if(this.filterGericht.value !== '') {

      // Filterung auf einen passenden Textteil (egal ob GROß oder kleinschreibung)
      this.filteredEventList = this.filteredEventList.filter(ev => ev.meal.toLowerCase().indexOf(this.filterGericht.value.toString().toLowerCase()) > -1);
    }
    if(this.filterName.value !== '') {


      this.filteredEventList = this.filteredEventList.filter(ev => ev.name.toLowerCase().indexOf(this.filterName.value.toString().toLowerCase()) > -1);
    }
    if(this.filterKategorie.value !== '') {


      this.filteredEventList = this.filteredEventList.filter(ev => ev.category.toLowerCase().indexOf(this.filterKategorie.value.toString().toLowerCase()) > -1);
    }
    if (this.filterAllegiere.value !== '') {



      this.filteredEventList = this.filteredEventList.filter(ev => ev.allergies.toLowerCase().indexOf(this.filterAllegiere.value.toString().toLowerCase()) > -1);
    }
    if(this.filterTeilnehmeranzahl.value !== null) {



      this.filteredEventList = this.filteredEventList.filter(ev => ev.visiter.toString().toLowerCase().indexOf(this.filterTeilnehmeranzahl.value.toString().toLowerCase()) > -1);
    }
    if(this.filterDatum.value !== '') {



      this.filteredEventList = this.filteredEventList.filter(ev => this.asISO(ev.date).toLowerCase().indexOf(this.filterDatum.value.toString().toLowerCase()) > -1);
    }

  }
  asISO(dateValue: Date): string {
    return dateValue != null // prüfen wir ab dass wir ein wert haben
      ? dateValue.getFullYear().toString() + // hol aus dem datum das jahr aus
      '-' + // fügt ein bindstrich ein
      (dateValue.getMonth() + 1).toString().padStart(2, '0') + // hol den monat als nummer und mit padstart füllt den text mit 0 aus damit der text 2 zahle hat
      '-' + // fügt ein bindstrich ein
      dateValue.getDate().toString().padStart(2, '0')  // hold den tag als nummer und mit padstart füllt den text mit 0 aus damit der text dann 2 zahke hat
      : ''; // leer text zzurück geben wenn datum wert null ist  //das ist ein code ohne if zu benutzen

    }


}

