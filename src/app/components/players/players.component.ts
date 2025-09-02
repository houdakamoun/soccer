import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  players: any = [];
  term: any;
  constructor(private playerservice: PlayersService) {
    this.getAllPlayer();
  }

  ngOnInit(): void {}
  getAllPlayer() {
    // this.players = JSON.parse(localStorage.getItem('players') || '[]');
    this.playerservice.getAllPlayer().subscribe((result) => {
      this.players = result.players;
    });
  }

  deleteParentsplayers(event: any) {}
}
