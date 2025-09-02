import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  count: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
