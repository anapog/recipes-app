import { Component, OnInit } from "@angular/core";
import { HttpEvent, HttpEventType } from "@angular/common/http";

import { DataStorageService } from "../../shared/data-storage.service";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {}

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
