import { Component } from '@angular/core';
import { MontyHallService } from '../monty-hall.service';
import { SimulationRequest, SimulationResponse } from '../monty-hall.model';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent {

  request: SimulationRequest = {
    numberOfSimulations: 1,
    changeDoor: true
  };

  response: SimulationResponse | null = null;

  constructor(private montyHallService: MontyHallService) { }

  simulateGames(): void {
    this.montyHallService.simulateGames(this.request).subscribe(
      (response) => {
        this.response = response;
      },
      (error) => {
        console.error('Error during simulation:', error);
      }
    );
  }
}
