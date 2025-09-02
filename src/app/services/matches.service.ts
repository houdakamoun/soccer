import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  matchUrl = 'http://localhost:3000/matches';
  constructor(private httpClient: HttpClient) {}
  addMatch(data: any) {
    return this.httpClient.post<{ message: any }>(this.matchUrl, data);
  }
  getAllMatches() {
    return this.httpClient.get<{ matches: any }>(this.matchUrl);
  }
  getAllById(id: any) {
    return this.httpClient.get<{ match: any }>(`${this.matchUrl}/${id}`);
  }
  deleteMathes(id: any) {
    return this.httpClient.delete<{ message: any }>(`${this.matchUrl}/${id}`);
  }
  updateMaches(data: any) {
    return this.httpClient.put<{ message: any }>(this.matchUrl, data);
  }
}
