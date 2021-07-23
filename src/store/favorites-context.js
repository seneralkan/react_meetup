import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
});



export function FavoritesContextProvider(props) {

    const [userFavorites, setuserFavorites] = useState([])

    // if you need a prev state of the function; 
    //so we need to write function inside the setstate 
    function addFavoriteHandler(favoriteMeetup) {
        setuserFavorites((prev) => {
            return prev.concat(favoriteMeetup)
        });
    };

    function removeFavoriteHandler(meetupId) {
        setuserFavorites((prev) => {
            return prev.filter(meetup => meetup.id !== meetupId)
        });   
    };

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    };

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.lenght,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
};

export default FavoritesContext;
