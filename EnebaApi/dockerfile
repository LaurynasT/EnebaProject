FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src
COPY ["EnebaApi.csproj", "./"]
RUN dotnet restore
COPY . .
RUN dotnet build "EnebaApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "EnebaApi.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080
ENV ASPNETCORE_ENVIRONMENT=Production
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "EnebaApi.dll"]