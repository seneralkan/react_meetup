import {useContext} from 'react'
import FavoritesContext from '../../store/favorites-context';
import Card from '../ui/Card'
import styles from './MeetupItem.module.css'


function MeetupItem(props) {
    const favoriteMeetups= useContext(FavoritesContext);
    const itemIsFavorite = favoriteMeetups.itemIsFavorite(props.id);
    
    function toogleFavoriteStatusHandler() {
        if (itemIsFavorite){
            favoriteMeetups.removeFavorite(props.id)

        } else{
            favoriteMeetups.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                description: props.description,
                address: props.address,
            })
        }

    }
    return (
        <li className={styles.item}>
            <Card>
                <div className={styles.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={styles.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={styles.actions}>
                    <button onClick={toogleFavoriteStatusHandler}>{itemIsFavorite ? "Remove from Favorites" : "To favorites"}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem
