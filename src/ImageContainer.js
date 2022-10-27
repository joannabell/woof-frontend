import { Carousel, Row, Card } from "react-bootstrap";


function ImageContainer( {refs} ) {
    const handleScrollClick = () => {
        refs.current?.scrollIntoView({behavior: 'smooth'})
    }

  return (
    <div>
      <div className="overlay">
        <h1 className="overlay-text"><br /> Restaurants for Dogs <br /> & Their People!</h1>
        <button onClick={handleScrollClick} className="find-one-button">FIND ONE!</button>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ borderRadius: "30px" }}
            width={400}
            height={500}
            alt="900x500"
            src="/images/coop_close.jpeg"
          />
          <Carousel.Caption
            style={{
              color: "#fff",
              position: "absolute",
              left: "900px",
              top: "80px",
            }}
          ></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ borderRadius: "30px" }}
            width={400}
            height={500}
            alt="900x500"
            src="/images/kaden_dog.jpg"
          />
          <Carousel.Caption
            style={{
              color: "#fff",
              position: "absolute",
              right: "900px",
              top: "80x",
            }}
          ></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ borderRadius: "30px" }}
            width={300}
            height={500}
            alt="900x500"
            src="/images/joanna_dog.jpg"
          />
          <Carousel.Caption
            style={{
              color: "#fff",
              position: "absolute",
              left: "900px",
              top: "100x",
            }}
          ></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ borderRadius: "30px" }}
            width={400}
            height={500}
            alt="900x500"
            src="/images/nef_dogs.jpeg"
          />
          <Carousel.Caption
            style={{
              color: "#fff",
              position: "absolute",
              right: "900px",
              top: "80x",
            }}
          ></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageContainer;
