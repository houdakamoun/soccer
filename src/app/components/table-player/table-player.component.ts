import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-table-player',
  templateUrl: './table-player.component.html',
  styleUrls: ['./table-player.component.css'],
})
export class TablePlayerComponent implements OnInit {
  players: any = [];
  palyer: any = {};
  teams: any = [];
  constructor(private router: Router, private playerservice: PlayersService) {}

  ngOnInit(): void {
    this.getAllPlayer();
    this.teams = JSON.parse(localStorage.getItem('teams') || '[]');
  }
  getAllPlayer() {
    // this.players = JSON.parse(localStorage.getItem('players') || '[]');
    this.playerservice.getAllPlayer().subscribe((result) => {
      this.players = result.players;
      console.log(this.players);
    });
  }

  deletePlayer(id: any) {
    this.playerservice.deletePlayer(id).subscribe((result) => {
      console.log(result.message);
      this.getAllPlayer();
    });
  }
  navigateTo(id: any) {
    console.log('hello player');

    this.router.navigate(['/edit-player/' + id]);
  }
}
