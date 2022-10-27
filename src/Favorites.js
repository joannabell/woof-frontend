import FavoriteCard from "./FavoriteCard"

function Favorites( {favoriteRes, setFavoriteRes} ) {
    const favoriteCard = favoriteRes.map((res) => {
        return (
    
            <FavoriteCard
            key={res.id}
            name={res.name}
            summary={res.summary}
            
            
            />
        
        )
    }
    )
    
    return (
        <div>
            {favoriteCard}
        </div>
    )
}

export default Favorites;