import Card from "react-bootstrap/Card"
// import { useState, useEffect } from "react"

function ReviewContainer({ title, image, description }) {
    return (
        <Card style = {{ width: '12rem', margin: "1rem" }}>
            <Card.Img variant="top" src={image} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ReviewContainer;