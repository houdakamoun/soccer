import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(teams: any, teamId: any): any {
    console.log(teams);
    console.log(teamId);

    let team;

    return (team =
      teams.find((t: any) => t.id === Number(teamId))?.teamName || 'no team');
  }
}
