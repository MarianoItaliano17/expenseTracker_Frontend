import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expenseTrackerFront';

  isCollapsed = false;
  isMobileView = false;

  ngOnInit(): void {
    this.checkViewport();
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.checkViewport();
  }

  private checkViewport(): void {
    this.isMobileView = window.innerWidth < 768;
  }

}
