import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  teamURL = 'http://localhost:3000/teams';
  constructor(private httpClient: HttpClient) {}
  addTeam(team: any, file: File) {
    console.log('rrrrr', file);

    const formData = new FormData();
    formData.append('image', file);
    formData.append('teamName', team.teamName);
    formData.append('teamDate', team.teamDate);
    formData.append('description', team.description);
    console.log(team);
    console.log(formData.get('image'));

    return this.httpClient.post<{ message: any }>(this.teamURL, formData);
  }
  getAllTeams() {
    return this.httpClient.get<{ teams: any }>(this.teamURL);
  }
  getAllTeamswithPlayers() {
    return this.httpClient.get<{ teams: any }>(`${this.teamURL}_with_populate`);
  }
  getById(id: any) {
    return this.httpClient.get<{ message: any }>(`${this.teamURL}/${id}`);
  }
  deleteTeams(id: any) {
    return this.httpClient.delete<{ message: any }>(`${this.teamURL}/${id}`);
  }
  updateTeams(data: any) {
    return this.httpClient.put<{ message: any }>(this.teamURL, data);
  }
}
