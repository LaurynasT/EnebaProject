import { useEffect, useState } from "react";
import type { Game } from "../../Interfaces/Games";
import { fetchGames } from "../../services/api";
import GameCard from "../compound/gameCard";
import type { Data } from "../../Interfaces/Data";

interface AppProps {
  searchQuery: string;
}

function App({ searchQuery }: AppProps) {
  const [games, setGames] = useState<Data<Game>>();

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await fetchGames<Data<Game>>("list", undefined, {
          search: searchQuery || undefined
        });
        setGames(data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    loadGames();
  }, [searchQuery]);

  return (
    <div className="max-w-[1120px] mx-auto p-4">
      <p className="text-white">
        Results found: <strong>{games?.count ?? 0}</strong>
      </p>

      <div className="flex flex-wrap gap-4 mt-4">
        {games?.results?.map((game) => (
          <GameCard key={game.id}>
            <GameCard.Image
              src={`${import.meta.env.VITE_API_IMAGE_URL}${game.imageUrl}`}
              alt={game.title}
            >
              {game.cashback > 0 && (
                <GameCard.Badge>CASHBACK</GameCard.Badge>
              )}
              <GameCard.Platform
                src={`${import.meta.env.VITE_API_IMAGE_URL}${game.platformImageUrl}`}
                alt=""
              >
                {game.platform}
              </GameCard.Platform>
            </GameCard.Image>

            <GameCard.Body>
              <GameCard.Title>{game.title}</GameCard.Title>
              <GameCard.Region>{game.region}</GameCard.Region>
              <GameCard.Price
                original={game.price}
                discount={game.discount ?? 0}
                final={game.finalPrice}
              />
              <GameCard.Cashback amount={game.cashback} />
            </GameCard.Body>

            <GameCard.Footer>
              <span className="flex items-center gap-1">{game.likes}</span>
            </GameCard.Footer>
          </GameCard>
        ))}
      </div>
    </div>
  );
}

export default App;