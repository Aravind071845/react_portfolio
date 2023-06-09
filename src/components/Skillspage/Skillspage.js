import html from "../Assets/html.png";
import css from "../Assets/css-3.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import javascript from "../Assets/js.png";
import react from "../Assets/react-logo.png";
import materialui from "../Assets/materialui.png"
import bootstrap from "../Assets/bootstrap.png"
import colorSharp from "../Assets/color-sharp.png"
import '../../pages/style.css';

const Skillspage = () => {



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p className=" capitalize">Whats the most important thing after oxygen? to Be industry relevant and have the right skills <br></br> Checkout my skills</p>

              <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={900} className="owl-carousel owl-theme skill-slider cursor-pointer">
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>JAVA SCRIPT</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>REACT</h5>
                </div>
                <div className="item">
                  <img src={materialui} alt="Image" />
                  <h5>Materila-UI</h5>
                </div>

                <div className="item">
                  <img src={bootstrap} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>

                <div className="item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN0Uu0auB-_30X62d-vUYM-jhN4TkqPqgv6A&usqp=CAU" alt="Image" />
                  <h5>GITHUB</h5>
                </div>

              </Carousel>


            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

/*
 <div className="item">
                  <img src={solidity} alt="Image" />
                  <h5>SOLIDITY</h5>
                </div>
*/
export default Skillspage;