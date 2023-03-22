import { Button, Carousel } from "react-bootstrap";
import { useContext } from "react";
import TitleContext from "../context/titleContext";

const Gallery = () => {
  const contextTitle = useContext(TitleContext);
  const carouselArray = [
    {
      title: "First slide label",
      text: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      title: "Second slide label",
      text: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      title: "Third slide label",
      text: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    }
  ];

  return (
    <div className="container-sm bg-warning">
      <h3>{contextTitle}</h3>
      <Button variant="success"> Bootstrap Button </Button>
      <Carousel variant="dark">
        {carouselArray.map((item, i) => {
          return (
            <Carousel.Item key={i}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Gallery;

