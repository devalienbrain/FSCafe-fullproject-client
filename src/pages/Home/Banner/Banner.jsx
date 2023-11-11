import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import img2 from "../../../../public/Resources/home/02.jpg";
import img3 from "../../../../public/Resources/home/03.png";
import img4 from "../../../../public/Resources/home/04.jpg";
import img5 from "../../../../public/Resources/home/05.png";
import img6 from "../../../../public/Resources/home/06.png";
import img1 from "../../../../public/Resources/home/01.jpg";
const Banner = () => {
  return (
    <Carousel autoPlay stopOnHover className="text-center">
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
      <div>
        <img src={img5} />
      </div>
      <div>
        <img src={img6} />
      </div>
    </Carousel>
  );
};

export default Banner;
