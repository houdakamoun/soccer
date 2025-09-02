import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'node:console';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  match: any = {};
  id: any;
  constructor(
    private activatedRouter: ActivatedRoute,
    private route: Router,
    private matchservice: MatchesService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.getMatchById();
  }
  getMatchById() {
    // let matches = JSON.parse(localStorage.getItem('matches') || '[]');
    // for (let i = 0; i < matches.length; i++) {
    //   if (matches[i].id == this.id) {
    //     this.match = matches[i];
    //     break;
    //   }
    // }
    this.matchservice.getAllById(this.id).subscribe((result) => {
      this.match = result.match;
    });
  }
  editMatch() {
    this.matchservice.updateMaches(this.match).subscribe((result) => {
      console.log(result.message);

      this.route.navigate(['/table-match']);
    });
  }
}
