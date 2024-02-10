using System.Text;
using Bids.Api.Common.Utils;
using Bids.Core;
using Bids.Entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(
    opts => opts.UseSqlServer(
        builder.Configuration.GetConnectionString("Default")));
builder.Services.AddCors(options =>
    options.AddPolicy("CorsPolicy", b => { b.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader(); }));

builder.Services.AddCore();

builder.Services.AddIdentity<User, IdentityRole>()
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors("CorsPolicy");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

await MigrateDbContext.MigrateAsync(app);
app.Run();