import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
})
export class EditPlayerComponent implements OnInit {
  team: any = {};
  player: any = {};
  id: any;
  constructor(
    private activatedRouter: ActivatedRoute,
    private route: Router,
    private playerservice: PlayersService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.getPlayerById();
  }
  getPlayerById() {
    // // // let players = JSON.parse(localStorage.getItem('players') || '[]');
    // // // for (let i = 0; i < players.length; i++) {
    // // //   if (players[i].id == this.id) {
    // // //     this.player = players[i];
    // // //     break;
    // //   }
    // }
    this.playerservice.getById(this.id).subscribe((result) => {
      this.player = result.player;
    });
  }
  editPlayer() {
    this.playerservice.updatePlayer(this.player).subscribe((result) => {
      console.log(result.message);

      this.route.navigate(['/table-player']);
    });
  }
}
