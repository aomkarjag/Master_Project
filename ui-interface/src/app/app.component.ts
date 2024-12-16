import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MostActivePeopleComponent } from './components/most-active-people/most-active-people.component';
import { FormsModule } from '@angular/forms';
import { MostActiveBusinessComponent } from "./components/most-active-business/most-active-business.component"; // Import FormsModule
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [MostActivePeopleComponent, FormsModule, MostActiveBusinessComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ui-interface';

  selectedTab: boolean = false; // Default selected tab

  // Method to set the active tab
  selectTab(tab: boolean ): void {
    this.selectedTab = tab;
  }
}
