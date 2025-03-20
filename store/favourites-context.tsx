import { createContext, ReactNode, useContext, useState } from "react";

type FavouritesContextType = {
  ids: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
};

const initialState: FavouritesContextType = {
  ids: [],
  addFavourite: (_id) => {},
  removeFavourite: (_id) => {},
};

const FavouritesContext = createContext<FavouritesContextType>(initialState);

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const [favIds, setFavIds] = useState<FavouritesContextType["ids"]>([]);

  const handleAddFavourite = (id: string) => {
    if (favIds.includes(id)) {
      return;
    }
    setFavIds((prevState) => [...prevState, id]);
  };

  const handleRemoveFavourite = (id: string) => {
    setFavIds((prevState) => prevState.filter((favId) => favId !== id));
  };

  return (
    <FavouritesContext.Provider
      value={{
        ids: favIds,
        addFavourite: handleAddFavourite,
        removeFavourite: handleRemoveFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  const favContext = useContext(FavouritesContext);
  if (!favContext) {
    console.warn("The component is not wrapper in Favourites Context Provider");
  }
  return favContext;
};
