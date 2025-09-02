import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  teams: any = [];
  constructor(private teamService: TeamsService) {}

  ngOnInit(): void {
    this.getAllTeams();
  }
  getAllTeams() {
    this.teamService.getAllTeamswithPlayers().subscribe((res) => {
      this.teams = res.teams;
    });
  }
}
