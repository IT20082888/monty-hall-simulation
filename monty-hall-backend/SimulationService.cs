using Back.Model;

namespace Back
{
    public class SimulationService : ISimulationService
    {
        private readonly Random _random;

        public SimulationService()
        {
            _random = new Random();
        }

        public List<GameResult> SimulateGames(int numberOfSimulations, bool changeDoor)
        {
            var results = new List<GameResult>();

            for (int i = 0; i < numberOfSimulations; i++)
            {
                var result = SimulateGame(changeDoor);
                results.Add(result);
            }

            return results;
        }

        private GameResult SimulateGame(bool changeDoor)
        {
            // 1. Randomly place the car behind one of the doors
            int carDoor = _random.Next(3);

            // 2. Player makes an initial choice
            int initialChoice = _random.Next(3);

            // 3. Monty opens a door with a goat behind it
            int montyOpens = GetMontyOpensDoor(carDoor, initialChoice);

            // 4. Player either sticks with the initial choice or changes the door
            int finalChoice = changeDoor ? GetOtherDoor(initialChoice, montyOpens) : initialChoice;

            // 5. Determine if the final choice is a win
            bool isWin = (finalChoice == carDoor);

            return new GameResult
            {
                IsWin = isWin,
                SwitchedDoor = changeDoor
            };
        }

        private int GetMontyOpensDoor(int carDoor, int initialChoice)
        {
            List<int> doorsWithGoat = Enumerable.Range(0, 3).Where(door => door != carDoor && door != initialChoice).ToList();
            return doorsWithGoat[_random.Next(doorsWithGoat.Count)];
        }

        private int GetOtherDoor(int initialChoice, int montyOpens)
        {
            return Enumerable.Range(0, 3).First(door => door != initialChoice && door != montyOpens);
        }
    }
}
