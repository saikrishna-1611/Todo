using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;
using TaskManagementAPI.Controllers;

public static class Routes
{
    public static void ConfigureRoutes(IEndpointRouteBuilder endpoints)
    {
        endpoints.MapControllerRoute("default", "api/v3/{controller=Auth}/{action=Index}/{id?}");
    }
}