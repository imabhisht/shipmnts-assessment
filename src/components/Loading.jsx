import React, { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";

const LoadingSpinner = ({ texts }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex justify-center">
          <HashLoader color="#6366f1" size={75} />
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
