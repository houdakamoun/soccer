import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css'],
})
export class MatchComponent implements OnInit {
  @Input() match: any = {};
  @Output() newmatches = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
  deletenewmatches() {
    this.newmatches.emit(this.match.id);
  }
  compare(a: any, b: any) {
    if (a > b) {
      return ['win', 'blue'];
    } else if (a < b) {
      return ['loss', 'green'];
    } else {
      return ['null', 'yellow'];
    }
  }
}
