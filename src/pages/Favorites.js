import React from 'react'
import {useContext} from 'react'
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';


function Favorites() {

    const favoriteMeetup = useContext(FavoritesContext);

    let content;

    if (favoriteMeetup.totalFavorites === 0) {
        content = <p>You have got no favorite meetups yet. Start adding some</p>

    }else {
        content = <MeetupList items={favoriteMeetup.favorites}/>
    }


    return (
        <section>
            <h1>My Favorite Events</h1>
            {content}
        </section>
    )
}

export default Favorites;
