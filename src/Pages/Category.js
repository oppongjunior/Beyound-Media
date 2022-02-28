import React, { useState, useEffect } from "react";
import BannerTwo from "../Components/Banners/BannerTwo";
import Footer from "../Components/Footer/Footer";
import PostContainer from "../Features/PostContainer/PostContainer";
import { useParams } from "react-router-dom";
import { foliData } from "../Features/Folio/FolioData";
import BannerThree from "../Components/Banners/BannerThree";
function Category() {
  const [data, setData] = useState([]);
  const [title,setTitle] = useState("");

  const category = useParams().id;
  const getData = () => {
    const newData = foliData.filter((item) => item.category === category);
    setData(newData);
  };
  const getTitle = () => {
    const newTitle = foliData.filter((item) => item.category === category);
    setTitle(newTitle[0].category);
  };

  useEffect(() => {
    getData();
    getTitle();
  }, []);
  return (
    <>
      <BannerThree title={title} />
      <PostContainer data={data} />
      <Footer />
    </>
  );
}

export default Category;
