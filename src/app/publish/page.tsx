import React from "react";
import Form from "./_components/Form";

const PublishPage = () => {
  return (
    <div className="grid grid-cols-6 md:grid-cols-12 min-h-screen 2xl:min-h-auto ">
      <div className="col-span-6 ">adf</div>
      <div className="col-span-6 h-screen overflow-y-scroll hide-scrollbar pt-24">
        <Form />
      </div>
    </div>
  );
};

export default PublishPage;
