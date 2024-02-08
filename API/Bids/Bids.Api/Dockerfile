FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["Bids.Api/Bids.Api.csproj", "Bids.Api/"]
COPY ["Bids.Core.Entities/Bids.Core.Entities.csproj", "Bids.Core.Entities/"]
COPY ["Bids.Common.Abstrations/Bids.Common.Abstrations.csproj", "Bids.Common.Abstrations/"]
RUN dotnet restore "Bids.Api/Bids.Api.csproj"
COPY . .
WORKDIR "/src/Bids.Api"
RUN dotnet build "Bids.Api.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "Bids.Api.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Bids.Api.dll"]
