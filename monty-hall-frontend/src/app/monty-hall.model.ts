export interface SimulationRequest {
    numberOfSimulations: number;
    changeDoor: boolean;
  }
  
  export interface SimulationResponse {
    results: GameResult[];
  }
  
  export interface GameResult {
    isWin: boolean;
    switchedDoor: boolean;
  }
  