import React, { useState } from 'react';
import { Form } from 'semantic-ui-react'

function NewRestaurantForm ( {handleAddRestaurant} ) {
    const [formData, setFormData] = useState({
        name: "",
        summary: "",
        food_type: "",
        price_rating: ""
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newRestaurant = {
            name: formData.name,
            summary: formData.summary,
            food_type: formData.food_type,
            price_rating: formData.price_rating
        }
    

    fetch(`http://localhost:9292/restaurants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRestaurant),
    })
    .then((response) => response.json())
    .then(data => {
      handleAddRestaurant(data)
      setFormData({
        name: "",
        summary: "",
        food_type: "",
        price_rating: ""
      })
    })
}

    return (
        <div>
            <strong className="form-title">Add a Dog-Friendly Restaurant!</strong>
            <Form className="form" onSubmit={handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input
                        fluid label ="Name"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <Form.Input
                        fluid label="Restaurant Summary"
                        placeholder="Summary"
                        name="summary"
                        value={formData.summary}
                        onChange={handleChange}
                    />
                    <Form.Input
                        fluid label="Type of Food"
                        placeholder="Type of Food"
                        name="food_type"
                        value={formData.food_type}
                        onChange={handleChange}
                    />
                    <Form.Input
                        fluid label="Price Rating"
                        placeholder="Price Rating"
                        name="price_rating"
                        value={formData.price_rating}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    )
}

export default NewRestaurantForm;