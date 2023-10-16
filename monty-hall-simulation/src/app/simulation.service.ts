import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

interface SimulationResponse {
  results: any[]; 
}

@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  private resultsSubject = new BehaviorSubject<any[]>([]);
  results = this.resultsSubject.asObservable();

  constructor(private http: HttpClient) {}

  simulateGames(numberOfSimulations: number, changeDoor: boolean) {
    const request = { numberOfSimulations, changeDoor };
    this.http.post<SimulationResponse>('https://localhost:5001/api/simulation/simulate', request)
      .subscribe(data => {
        this.resultsSubject.next(data.results);
      });
  }
  
}
