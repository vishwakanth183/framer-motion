"use client"

import React,{useState} from "react";
import PortfolioHome from "@/src/components/portfolioHome";
import { UserContext } from "@/src/shared/context/useContext";
import Header from "@/src/shared/components/header/header";

const VKPortfolio = () => {

  const [currentPage,setCurrentPage] = useState("About Me");

  return <UserContext.Provider value={{
    currentPage,
    setCurrentPage
  }}>
    <Header />
    <PortfolioHome />
    {/* <div className="text-xl text-blue-500 dark:text-yellow-500">hey just checking dark</div> */}
  </UserContext.Provider>;
};

export default VKPortfolio;
