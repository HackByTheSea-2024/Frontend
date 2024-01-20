import React from "react";
import FormCard from "./patient/FormCard";

const Carousel = (props) => {
    const [current, setCurrent] = React.useState(0);
    const images = props.data;
    const imageSlides = document.getElementsByClassName("slide-image");
    const bubbles = document.getElementsByClassName("bubble-outer");
    const nextImage = () => {
        let newIndex = current === images.length - 1 ? 0 : current + 1;
        imageSlides[current].className = "slide-image leftOut";
        imageSlides[newIndex].className = "slide-image leftIn";
        updateBubbles(newIndex);
        setCurrent(newIndex);
    };
    const prevImage = () => {
        let newIndex = current === 0 ? images.length - 1 : current - 1;
        imageSlides[current].className = "slide-image rightOut";
        imageSlides[newIndex].className = "slide-image rightIn";
        updateBubbles(newIndex);
        setCurrent(newIndex);
    };
    const jumpImage = (e) => {
        let jumpIndex = parseInt(e.target.id);
        if (jumpIndex === current) return;
        if (jumpIndex - current >= 0) {
            imageSlides[current].className = "slide-image leftOut";
            imageSlides[jumpIndex].className = "slide-image leftIn";
        } else {
            imageSlides[current].className = "slide-image rightOut";
            imageSlides[jumpIndex].className = "slide-image rightIn";
        }
        updateBubbles(jumpIndex);
        setCurrent(jumpIndex);
    };
    const updateBubbles = (highlight) => {
        bubbles[current].style.borderColor = "black";
        bubbles[highlight].style.borderColor = "white";
    };
    React.useEffect(() => {
        bubbles[current].style.borderColor = "white";
    }, []);
    return (
        <div className="gallery-container">
            <span className="button-prev" onClick={prevImage}>
                chevron_left
            </span>
            <span className="button-next" onClick={nextImage}>
                chevron_right
            </span>
            <div className="gallery-track">
                {images.map((image, index) => {
                    return (
                        <div
                            className="slide-image"
                            style={
                                index === 0
                                    ? {
                                          transform: "translateX(0%)",
                                      }
                                    : {
                                          transform: "translateX(100%)",
                                      }
                            }
                        >
                            <FormCard data={images[index]} />
                        </div>
                    );
                })}
            </div>
            <div className="gallery-footer">
                {images.map((image, index) => {
                    return (
                        <div
                            className="bubble-outer"
                            onClick={jumpImage}
                            id={index}
                        >
                            <div className="bubble-inner" id={index}></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;
