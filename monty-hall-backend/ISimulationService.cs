using Back.Model;

namespace Back
{
    public interface ISimulationService
    {
        List<GameResult> SimulateGames(int numberOfSimulations, bool changeDoor);

    }
}
