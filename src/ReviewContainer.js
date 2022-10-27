// import Card from "react-bootstrap/Card";
import ReviewCard from "./ReviewCard"
import { useState, useEffect } from "react"
// import {useRef} from 'react';

// import { useState, useEffect } from "react"

function ReviewContainer({  setRestaurants, restaurants, restaurants2, handleDeleteRestaurant, refs }) {
    
   
    function deleteRestaurant(restaurantToDelete) {
        const updatedRestaurants = restaurants.filter((restaurant) => restaurant.id !== restaurantToDelete.id);
        setRestaurants(updatedRestaurants);
        alert("Restaurant Deleted!")
    }

    return (
            <div id="list-of-restaurants" className="review-container">
                <style>{'body { background-color: rgb(231, 222, 210); }'}</style>
                <div ref={refs} className="restaurants">
                    {restaurants.map((restaurant) => {
                        return (
                        <div key={restaurant.id} className="restaurant" >
                            <ReviewCard
                            restaurant={restaurant}
                            setRestaurants={setRestaurants} 
                            restaurants={restaurants}
                            restaurants2={restaurants2}
                            handleDeleteRestaurant={handleDeleteRestaurant}
                            deleteRestaurant={deleteRestaurant}
                            />
                        </div>
                        )
                    }
                    )} 
                </div>
                <div className="footer"></div>
            </div>
        
    )
    
    
    
    // const [ restaurants, setRestaurants ] = useState([])
    
    
    // const cards = restaurants.map((restaurant) => (
    //     <ReviewCard style = {{ width: '12rem', margin: "1rem" }}>
    //         {/* <Card.Img variant="top" src={restaurant.image} alt={title} /> */}
    //         <ReviewCard.Body>
    //             <ReviewCard.Title>{restaurant.name}</ReviewCard.Title>
    //             <ReviewCard.Text>
    //                 {restaurant.summary}
    //                 {restaurant.food_type}
    //                 {restaurant.price_rating}
    //             </ReviewCard.Text>
    //         </ReviewCard.Body>
    //     </ReviewCard>
    //     )
    // )

    // return (
    //     <ReviewCard.Group itemsPerRow={3}> { cards } </ReviewCard.Group>
    // )



}

export default ReviewContainer;