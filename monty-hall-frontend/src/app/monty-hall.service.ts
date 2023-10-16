import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimulationRequest, SimulationResponse } from './monty-hall.model';

@Injectable({
  providedIn: 'root'
})
export class MontyHallService {

  private apiUrl = 'https://localhost:44316/api/Simulation'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  simulateGames(request: SimulationRequest): Observable<SimulationResponse> {
    return this.http.post<SimulationResponse>(`${this.apiUrl}/simulate`, request);
  }
}
