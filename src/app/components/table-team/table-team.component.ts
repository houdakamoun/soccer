import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-table-team',
  templateUrl: './table-team.component.html',
  styleUrls: ['./table-team.component.css'],
})
export class TableTeamComponent implements OnInit {
  teams: any = [];
  team: any = {};
  constructor(private router: Router, private teamservice: TeamsService) {}

  ngOnInit(): void {
    this.getAllTeam();
  }
  getAllTeam() {
    // this.teams = JSON.parse(localStorage.getItem('teams') || '[]');
    this.teamservice.getAllTeams().subscribe((result) => {
      this.teams = result.teams;
    });
  }
  deleteteam(id: any) {
    this.teamservice.deleteTeams(id).subscribe((result) => {
      console.log(result.message);
      this.getAllTeam();
    });
  }
  navigateTo(id: any) {
    this.router.navigate(['/Add-team/' + id]);
  }
}
