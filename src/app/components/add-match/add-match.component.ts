import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css'],
})
export class AddMatchComponent implements OnInit {
  match: any = {};
  constructor(private router: Router, private matchservice: MatchesService) {}

  ngOnInit(): void {}
  addMatch() {
    //   let t = JSON.parse(localStorage.getItem('matches') || '[]');
    //   this.match.id = t.length === 0 ? 1 : t.at(-1).id + 1;
    //   t.push(this.match);
    //   localStorage.setItem('matches', JSON.stringify(t));
    //   this.router.navigate(['/table-match']);
    this.matchservice.addMatch(this.match).subscribe((result) => {
      this.router.navigate(['/table-match']);
    });
  }
}
