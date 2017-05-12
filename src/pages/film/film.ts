import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {WebApiObservableService} from "./WebApiObservableService";
import {Http, HttpModule} from "@angular/http";
import {Film} from "../../model/Film";

@Component({
  selector: 'film-list',
  templateUrl: 'film.html',
  styleUrls:["/src/pages/film/film.scss"],

})
export class FilmListPage {

  public films : Film[]
  public type : string


  constructor(navCtrl: NavController
    , public navParams : NavParams
    , public filmService : WebApiObservableService) {

    console.log(navParams.data.type)
    this.type = navParams.data.type

  }

  ngOnInit() {
    this.getFilms()
  }

  private getFilms() {
    this.filmService.getService("https://stormy-lowlands-93910.herokuapp.com/api/films")
      .subscribe(
        data => this.films = data
        ,err => {
          console.log(err)
        }
      );
  }

}
