import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
})
export class MatchesComponent implements OnInit {
  matches: any = [];
  term: any;
  constructor(private matchservice: MatchesService) {
    this.getAllMatches();
  }

  ngOnInit(): void {}
  getAllMatches() {
    // this.matches = JSON.parse(localStorage.getItem('matches') || '[]');
    this.matchservice.getAllMatches().subscribe((result) => {
      this.matches = result.matches;
    });
  }
  deleteParentsMatches(event: any) {
    for (let i = 0; i < this.matches.length; i++) {
      if (this.matches[i].id == event) {
        this.matches.splice(i, 1);
        localStorage.setItem('matches', JSON.stringify(this.matches));
        break;
      }
    }
  }
}
