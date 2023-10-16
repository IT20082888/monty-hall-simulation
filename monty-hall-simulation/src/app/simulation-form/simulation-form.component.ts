import { Component } from '@angular/core';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-simulation-form',
  templateUrl: './simulation-form.component.html',
  styleUrls: ['./simulation-form.component.css']
})
export class SimulationFormComponent {
  numberOfSimulations: number = 100;
  changeDoor: boolean = true;

  constructor(private simulationService: SimulationService) {}

  startSimulation() {
    this.simulationService.simulateGames(this.numberOfSimulations, this.changeDoor);
  }
}
