import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "../images/img-11.jpg" },
  { url: "../images/img-10.jpg" },
  { url: "../images/img-7.jpg" },
  { url: "../images/img-8.jpg" },
  { url: "../images/img-9.jpg" },
  { url: "../images/img-6.jpg" },
];

const ImageSlider = () => {
  return (
    <div>
      <SimpleImageSlider
        width = {896}
        height = {504}
        images = {images}
        showNavs = {true}
        navStyle = {1}
        showBullets = {true}
       style = {{marginLeft: 250, margin: 50}}
      />
    </div>
  );
}

export default ImageSlider;