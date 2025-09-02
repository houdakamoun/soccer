import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-matches',
  templateUrl: './table-matches.component.html',
  styleUrls: ['./table-matches.component.css'],
})
export class TableMatchesComponent implements OnInit {
  matches: any = [];

  constructor(private router: Router, private matchservice: MatchesService) {}

  ngOnInit(): void {
    this.getAllMatches();
  }

  getAllMatches() {
    // this.matches = JSON.parse(localStorage.getItem('matches') || '[]');
    this.matchservice.getAllMatches().subscribe((result) => {
      this.matches = result.matches;
    });
  }
  deleteMatches(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.matchservice.deleteMathes(id).subscribe((result) => {
          this.getAllMatches();
          Swal.fire({
            title: 'Deleted!',
            text: 'Your Match has been deleted.',
            icon: 'success',
          });
        });
      }
    });
  }

  navigateTo(id: any) {
    console.log('hello match');

    this.router.navigate(['/edit-match/' + id]);
  }
}
