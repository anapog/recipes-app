import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { DataStorageService } from "../../shared/data-storage.service";
import { AuthService } from "../../auth/auth.service";
import * as fromApp from "../../store/app.reducer";
import * as fromAuth from "../../auth/store/auth.reducers";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.authState = this.store.select("auth");
  }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(response => {
      // .subscribe((response: HttpEvent<Object>) => {
      // console.log(response.type === HttpEventType.Response);
      console.log(response);
    });
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  logout() {
    this.authService.logOut();
  }
}
