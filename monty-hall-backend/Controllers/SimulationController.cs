using Back.Model;
using Back;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Back.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class SimulationController : ControllerBase
    {
        private readonly ISimulationService _simulationService;

        public SimulationController(ISimulationService simulationService)
        {
            _simulationService = simulationService;
        }

        [HttpPost("simulate")]
        //[HttpPost]
        public ActionResult<SimulationResponse> SimulateGames([FromBody] SimulationRequest request)
        {
            if (request.NumberOfSimulations <= 0)
            {
                return BadRequest("Number of simulations must be greater than 0.");
            }

            var results = _simulationService.SimulateGames(request.NumberOfSimulations, request.ChangeDoor);

            var response = new SimulationResponse
            {
                Results = results
            };

            return Ok(response);
        }
    }

}
