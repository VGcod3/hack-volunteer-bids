using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bids.Core.Migrations
{
    /// <inheritdoc />
    public partial class addenumconection : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AuctionCategory",
                table: "Auctions",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<double>(
                name: "HighestPrice",
                table: "Auctions",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AuctionCategory",
                table: "Auctions");

            migrationBuilder.DropColumn(
                name: "HighestPrice",
                table: "Auctions");
        }
    }
}
