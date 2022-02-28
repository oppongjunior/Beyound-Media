import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import PostContainer from "../Features/PostContainer/PostContainer";
import { foliData } from "../Features/Folio/FolioData";
import BannerFour from "../Components/Banners/BannerFour";
function AuthorPost() {
  return (
    <>
      <BannerFour title="Root" />
      <PostContainer data={foliData} />
      <Footer />
    </>
  );
}

export default AuthorPost;
