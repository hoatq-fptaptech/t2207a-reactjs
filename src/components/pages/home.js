import Sidebar from "../layouts/sidebar";

import {Carousel} from "react-bootstrap";
function Home(){
    return (
        <div className="row">
            <div className="col-lg-3 col-md-5">
                <Sidebar/>
            </div>
            <div className="col-lg-9 col-md-7">
            <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/img/banner/banner-1.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/img/banner/banner-2.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/img/banner/banner-1.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
export default Home;