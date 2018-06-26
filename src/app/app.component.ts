import { Component, OnInit } from "@angular/core";

import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBiAiB3hAs1Rv2_sH2OodMhoWqHytmpgBo",
      authDomain: "ng-recipe-book-71c03.firebaseapp.com"
    });
  }
}
