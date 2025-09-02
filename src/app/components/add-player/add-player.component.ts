import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
})
export class AddPlayerComponent implements OnInit {
  palyer: any = {};
  teams: any = [];
  players: any = [];
  selectedFile: File | null = null;
  constructor(
    private router: Router,
    private playerservice: PlayersService,
    private teamservice: TeamsService
  ) {}

  ngOnInit(): void {
    this.getAllTeam();
  }
  addPlayer() {
    this.playerservice.addPlayer(this.palyer).subscribe((res) => {
      this.router.navigate(['/table-player']);
    });
  }

  getAllTeam() {
    // this.teams = JSON.parse(localStorage.getItem('teams') || '[]');
    this.teamservice.getAllTeams().subscribe((result) => {
      this.teams = result.teams;
    });
  }
  // getAllPlayer() {
  //   this.playerservice.getAllPlayer().subscribe((res) => {
  //     this.players = res.players;
  //   });
  // }
}
