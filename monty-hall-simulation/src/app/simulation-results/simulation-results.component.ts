import { Component } from '@angular/core';
import { SimulationService } from '../simulation.service';

interface GameResult {
  isWin: boolean;
  switchedDoor: boolean;
}

@Component({
  selector: 'app-simulation-results',
  templateUrl: './simulation-results.component.html',
  styleUrls: ['./simulation-results.component.css']
})
export class SimulationResultsComponent {
  results: GameResult[] = [];

  constructor(private simulationService: SimulationService) {
    this.simulationService.results.subscribe((data) => {
      this.results = data;
    });
  }
}
