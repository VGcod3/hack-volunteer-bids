using Bids.Abstrations;
using Bids.Core.Entities.Users;
using Bids.Core.Filters;
using Bids.Core.Filters.Auction;
using Bids.Entities;

namespace Bids.Core;

internal static class AuctionExtensions
{
    internal static IQueryable<Auction> FilterBy(this IQueryable<Auction> auctions,
        AuctionFilter filter)
    {
        return auctions.Where(a => 
            !a.Deleted
            && (string.IsNullOrEmpty(filter.SearchField) || a.Name.Contains(filter.SearchField) || a.Description.Contains(filter.SearchField)));
    }
    
    internal static IQueryable<Auction> OrderBy(this IQueryable<Auction> auctions,
        AuctionFilter filter)
    {
        return filter.SortBy switch
        {
            SortOptionsEnum.Price => auctions.OrderBy(a => a.HighestPrice),
            SortOptionsEnum.CreatedAt => auctions.OrderBy(a => a.CreatedOn),
            SortOptionsEnum.TimeEnd => auctions.OrderBy(a => a.FinishDate),
            _ => auctions
        };
    }

    internal static AuctionDto ToDto(this Auction auction)
    {
        return new AuctionDto()
        {
            Name = auction.Name,
            Description = auction.Description,
            PlacedBy = auction.CreatedBy.Email ?? string.Empty,
            AuctionStart = auction.StartDate,
            AuctionEnd = auction.FinishDate,
            StartPrice = auction.StartPrice,
            HighestPrice = auction.HighestPrice
        };
    }
    
    internal static Auction FromDto(this AuctionDto auctionDto, User user)
    {
        return new Auction()
        {
            Id = auctionDto.Id,
            Name = auctionDto.Name,
            Description = auctionDto.Description,
            CreatedBy = user,
            StartDate = auctionDto.AuctionStart,
            FinishDate = auctionDto.AuctionEnd,
            StartPrice = auctionDto.StartPrice,
            HighestPrice = auctionDto.StartPrice
        };
    }
    
    internal static void PopulateFromDto(this Auction auction, AuctionDto auctionDto)
    {
        auction.StartPrice = auctionDto.StartPrice;
        auction.HighestPrice = auctionDto.HighestPrice;
        auction.StartDate = auctionDto.AuctionStart;
        auction.FinishDate = auctionDto.AuctionEnd;
        auction.Name = auctionDto.Name;
        auction.Description = auctionDto.Description;
    }
}