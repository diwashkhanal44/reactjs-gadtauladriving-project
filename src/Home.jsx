import React from "react";
import web from "./images/a.jpg";

function Home() {
  return (
    <>
      <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg ">
            <div className="col-10 mx-auto">
            <div className="row ">
              <div className="col-md-6  pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1 >Be Expert at Driving with <strong className="brand-name">Gadtaula Driving School</strong></h1>
                <h2 className="">
                  we gurantee your driving perfection
                </h2>
                <div className="">
                  <a href="www.google.com" className="btn-get-started ">Get Started</a>
                </div>
              </div>
              <div className="col-md-6 order-1 order-lg-2 header-img mx-auto ">
              <img src={web} alt="hello.jpg" height='300' width='300'  className="animated" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
