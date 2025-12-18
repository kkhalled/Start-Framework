import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import PortFolioCard from "../../components/PortfolioCard/PortFolioCard";
import Divider from "../../components/Divider/Divider";
import Footer from "../../components/Footer/Footer";
import CardModal from "../../components/CardModal/CardModal";

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);

  let [portfolioItems, _setPortfolioItems] = React.useState([
    { id: 1, title: "Project One", src: "/img1.png" },
    { id: 2, title: "Project Two", src: "/img2.png" },
    { id: 3, title: "Project Three", src: "/img3.png" },
  ]);

  return (
    <>
      {/* <CardModal /> */}
      <NavBar />
   <div className="container portfolio-container py-5 ">
       <header className="text-center mt-5 pt-5  tex-dark  ">
        <h1 className="fw-bolder text-uppercase fs-1">portfolio component</h1>
        <Divider className="text-dark" />
      </header>
      <div className="container   ">
        <div className="row g-5 px-1 py-4">
          {portfolioItems.map((item) => {
            return (
              <>
                <PortFolioCard
                  key={item.id}
                  src={item.src}
                  onClick={() => {
                    setSelectedImg(item.src);
                  }}
                />
              </>
            );
          })}
          {portfolioItems.map((item) => {
            return (
              <>
                <PortFolioCard
                  key={item.id}
                  src={item.src}
                  onClick={() => {
                    setSelectedImg(item.src);
                  }}
                />
              </>
            );
          })}
        </div>
      </div>
   </div>

      <Footer />
      <CardModal img={selectedImg} onClose={() => setSelectedImg(null)} />
    </>
  );
}
