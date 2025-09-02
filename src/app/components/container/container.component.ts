import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  title = 'Bonjour';
  constructor() {}
  currentDate = Date.now();
  ngOnInit(): void {
    setInterval(() => {
      this.currentDate = Date.now();
    });
  }
}
