import React, { useState, useEffect } from "react";
import DetailsContainer from "../Components/DetailsContainer/DetailsContainer";
import { useParams } from "react-router-dom";
import { foliData } from "../Features/Folio/FolioData";
import Footer from "../Components/Footer/Footer";

function Details() {
  const [data, setData] = useState([]);
  const title = useParams().id;

  const getData = () => {
    const newData = foliData.find((item) => item.title === title);
    setData(newData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <DetailsContainer data={data} />
      <Footer />
    </>
  );
}

export default Details;
