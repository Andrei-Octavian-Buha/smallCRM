import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {
  sideBarOpen = false;
  toggleSideBar(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
