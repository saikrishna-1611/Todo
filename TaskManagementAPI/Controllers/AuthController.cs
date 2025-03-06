using Microsoft.AspNetCore.Mvc;
using TaskManagementAPI.Models;
using TaskManagementAPI.Services;
using Microsoft.Extensions.Logging;

namespace TaskManagementAPI.Controllers
{
    [Route("api/v3/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;
        private readonly ILogger<AuthController> _logger;

        public AuthController(AuthService authService, ILogger<AuthController> logger)
        {
            _authService = authService;
            _logger = logger;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            if (user == null)
            {
                _logger.LogWarning("Invalid user data received.");
                return BadRequest("Invalid user data.");
            }

            _logger.LogInformation($"Registering user: {user.Email}");
            var newUser = await _authService.Register(user);

            if (newUser == null)
            {
                _logger.LogWarning("Registration failed for user: {Email}", user.Email);
                return BadRequest("Registration failed.");
            }

            _logger.LogInformation($"User registered successfully: {user.Email}");
            return Created("", newUser);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] User user)
        {
            if (string.IsNullOrWhiteSpace(user.Email) || string.IsNullOrWhiteSpace(user.Password))
            {
                _logger.LogWarning("Login attempt with missing email or password.");
                return BadRequest("Email and password are required.");
            }

            _logger.LogInformation($"Login attempt for user: {user.Email}");
            var token = await _authService.Login(user.Email, user.Password);

            if (token == null)
            {
                _logger.LogWarning("Invalid credentials for user: {Email}", user.Email);
                return Unauthorized("Invalid credentials");
            }

            _logger.LogInformation($"Login successful for user: {user.Email}");
            return Ok(new { token });
        }
    }
}