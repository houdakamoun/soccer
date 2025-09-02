import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
})
export class AddTeamComponent implements OnInit {
  title = 'Add Team';
  id: any;
  team: any = {};
  image: any;
  imagePreview: any;
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private teamservice: TeamsService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    if (this.id) {
      this.title = 'Edit Team';
      this.getTeamById();
    }
  }
  addEditTeam() {
    if (this.id) {
      return this.teamservice.updateTeams(this.team).subscribe((res) => {
        console.log(res.message);
        this.router.navigate(['/table-team']);
      });
    } else {
      console.log('111111111', this.image);

      return this.teamservice
        .addTeam(this.team, this.image)
        .subscribe((res) => {
          console.log(res.message);
          // this.router.navigate(['/table-team']);
        });
    }
  }
  getTeamById() {
    // let teams = JSON.parse(localStorage.getItem('teams') || '[]');
    // for (let i = 0; i < teams.length; i++) {
    //   if (teams[i].id == this.id) {
    //     this.team = teams[i];
    //     break;
    //   }
    // }
    return this.teamservice.getById(this.id).subscribe((result) => {});
  }
  onImageSelected(event: any) {
    const file = event.target.files[0];

    this.image = file;
    console.log();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
