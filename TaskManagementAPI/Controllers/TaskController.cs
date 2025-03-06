
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using TaskManagementAPI.Models;
using TaskManagementAPI.Data;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using Microsoft.Extensions.Logging;

namespace TaskManagementAPI.Controllers
{
    [Route("api/v3/task")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger<TaskController> _logger;

        public TaskController(ApplicationDbContext context, ILogger<TaskController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpPost("create")]
[Authorize]
public async Task<IActionResult> CreateTask([FromBody] TaskModel task)
{
    // Debug: Print all claims from the token
    foreach (var claim in User.Claims)
    {
        _logger.LogInformation($"Claim Type: {claim.Type}, Claim Value: {claim.Value}");
    }

    var userIdClaim = User.FindFirst("id");
    if (userIdClaim == null)
    {
        _logger.LogWarning("Invalid token: User ID claim not found.");
        return Unauthorized("Invalid token");
    }

    task.UserId = int.Parse(userIdClaim.Value);
    _context.Tasks.Add(task);
    await _context.SaveChangesAsync();

    _logger.LogInformation($"Task created successfully for user ID: {task.UserId}");
    return Created("", task);
}

        [HttpGet("get-tasks")]
        [Authorize]
        public async Task<IActionResult> GetTasks()
        {
            var userIdClaim = User.FindFirst("id");
            if (userIdClaim == null)
            {
                _logger.LogWarning("Invalid token: User ID claim not found.");
                return Unauthorized("Invalid token");
            }

            int userId = int.Parse(userIdClaim.Value);
            var tasks = await _context.Tasks.Where(t => t.UserId == userId).ToListAsync();

            _logger.LogInformation($"Retrieved {tasks.Count} tasks for user ID: {userId}");
            return Ok(tasks);
        }
    }
}