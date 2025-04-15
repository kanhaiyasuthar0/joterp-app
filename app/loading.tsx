import PageLoader from "@/components/loaders/page-loader";
import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <PageLoader />
    </div>
  );
};

export default loading;
