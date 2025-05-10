import { FaCameraRetro } from "react-icons/fa";
import "../Styles/Carousel.css";
import One from "../assets/one.jpg"
import Two from "../assets/two.jpg"
import Three from "../assets/three.jpg"
import Four from "../assets/four.jpg"
import Five from "../assets/five.jpg"
const images = [
  {
    src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    title: "Beautiful Moment",
  },
  { src: One, title: "Nature 1" },
  { src: Two, title: "Nature 2" },
  { src: Three, title: "Nature 3" },
  { src: Four, title: "Nature 4" },
  { src: Five, title: "Nature 5" },
  { src: "https://source.unsplash.com/random/300x400?nature,7", title: "Nature 6" },
  { src: "https://source.unsplash.com/random/300x400?nature,8", title: "Nature 7" },
  { src: "https://source.unsplash.com/random/300x400?nature,9", title: "Nature 8" },
  { src: "https://source.unsplash.com/random/300x400?nature,10", title: "Nature 9" },
];

const PhotoCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <h1 className="carousel-heading">❤️Love Gallery❤️</h1>
      <section className="intro-text">
        <h2>Just the Beginning😍😍</h2>
        <p>
          This is just a small glimpse of our gallery – our vision is to bring
          together <strong>hundreds of thousands</strong> of amazing photos in
          one place.So please be with me in this journey and hold my thoughout.
        </p>
      </section>

      <div className="card-3d">
        {images.map((img, idx) => (
          <div key={idx}>
            <img src={img.src} alt={img.title} />
            <div className="caption">
              <FaCameraRetro className="icon" />
              <span>{img.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
