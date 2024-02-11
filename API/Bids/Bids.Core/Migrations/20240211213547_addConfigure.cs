using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Bids.Core.Migrations
{
    /// <inheritdoc />
    public partial class addConfigure : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Auctions_AspNetUsers_CreatedById",
                table: "Auctions");

            migrationBuilder.AlterColumn<string>(
                name: "CreatedById",
                table: "Auctions",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "Auctions",
                columns: new[] { "Id", "AuctionCategory", "Completed", "CreatedById", "CreatedOn", "Deleted", "DeletedOn", "Description", "FinishDate", "HighestPrice", "Name", "StartDate", "StartPrice", "UpdatedOn" },
                values: new object[,]
                {
                    { 1L, "Jewelry", false, "9f1614df-d564-4795-b7ce-9e0d9cc79e31", new DateTime(2024, 2, 11, 21, 35, 46, 530, DateTimeKind.Utc).AddTicks(7416), false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "A rare and exquisite Ming Dynasty vase, perfect for collectors.", new DateTime(2024, 3, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), 5500.0, "Antique Vase from Ming Dynasty", new DateTime(2024, 3, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), 5000.0, new DateTime(2024, 2, 11, 21, 35, 46, 530, DateTimeKind.Utc).AddTicks(7417) },
                    { 2L, "Art", false, "9f1614df-d564-4795-b7ce-9e0d9cc79e31", new DateTime(2024, 2, 11, 21, 35, 46, 530, DateTimeKind.Utc).AddTicks(7424), false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "A striking modern art print by a renowned contemporary artist. Numbered and signed.", new DateTime(2024, 4, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), 2500.0, "Limited Edition Modern Art Print", new DateTime(2024, 4, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 2000.0, new DateTime(2024, 2, 11, 21, 35, 46, 530, DateTimeKind.Utc).AddTicks(7425) }
                });

            migrationBuilder.InsertData(
                table: "Bids",
                columns: new[] { "Id", "AuctionId", "CreatedOn", "Deleted", "DeletedOn", "SetById", "SetOn", "UpdatedOn", "Value" },
                values: new object[,]
                {
                    { new Guid("0239e895-7c63-48a4-b143-a9b34ce08953"), 1L, new DateTime(2024, 2, 11, 21, 35, 46, 532, DateTimeKind.Utc).AddTicks(6259), false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, new DateTime(2024, 2, 11, 21, 35, 46, 532, DateTimeKind.Utc).AddTicks(6257), new DateTime(2024, 2, 11, 21, 35, 46, 532, DateTimeKind.Utc).AddTicks(6260), 1050.0 },
                    { new Guid("2f0cd4b8-ab63-40df-9eb5-f19906393341"), 2L, new DateTime(2024, 2, 11, 21, 35, 46, 532, DateTimeKind.Utc).AddTicks(6282), false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, new DateTime(2024, 2, 11, 21, 35, 46, 532, DateTimeKind.Utc).AddTicks(6281), new DateTime(2024, 2, 11, 21, 35, 46, 532, DateTimeKind.Utc).AddTicks(6283), 750.0 },
                    { new Guid("674eb90c-96a2-4000-a905-6b2482a4b4f0"), 1L, new DateTime(2024, 2, 11, 21, 35, 46, 532, DateTimeKind.Utc).AddTicks(6267), false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, new DateTime(2024, 2, 11, 21, 35, 46, 532, DateTimeKind.Utc).AddTicks(6265), new DateTime(2024, 2, 11, 21, 35, 46, 532, DateTimeKind.Utc).AddTicks(6267), 1100.0 },
                    { new Guid("d1409e07-5844-42ee-a0f0-22772bb0d98d"), 2L, new DateTime(2024, 2, 11, 21, 35, 46, 532, DateTimeKind.Utc).AddTicks(6273), false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, new DateTime(2024, 2, 11, 21, 35, 46, 532, DateTimeKind.Utc).AddTicks(6272), new DateTime(2024, 2, 11, 21, 35, 46, 532, DateTimeKind.Utc).AddTicks(6274), 500.0 }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Auctions_AspNetUsers_CreatedById",
                table: "Auctions",
                column: "CreatedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Auctions_AspNetUsers_CreatedById",
                table: "Auctions");

            migrationBuilder.DeleteData(
                table: "Bids",
                keyColumn: "Id",
                keyValue: new Guid("0239e895-7c63-48a4-b143-a9b34ce08953"));

            migrationBuilder.DeleteData(
                table: "Bids",
                keyColumn: "Id",
                keyValue: new Guid("2f0cd4b8-ab63-40df-9eb5-f19906393341"));

            migrationBuilder.DeleteData(
                table: "Bids",
                keyColumn: "Id",
                keyValue: new Guid("674eb90c-96a2-4000-a905-6b2482a4b4f0"));

            migrationBuilder.DeleteData(
                table: "Bids",
                keyColumn: "Id",
                keyValue: new Guid("d1409e07-5844-42ee-a0f0-22772bb0d98d"));

            migrationBuilder.DeleteData(
                table: "Auctions",
                keyColumn: "Id",
                keyValue: 1L);

            migrationBuilder.DeleteData(
                table: "Auctions",
                keyColumn: "Id",
                keyValue: 2L);

            migrationBuilder.AlterColumn<string>(
                name: "CreatedById",
                table: "Auctions",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddForeignKey(
                name: "FK_Auctions_AspNetUsers_CreatedById",
                table: "Auctions",
                column: "CreatedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
