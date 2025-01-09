import React from "react";
const page = ({ searchParams }: { searchParams: string }) => {

  return (
    <div>
      <p>Product test page</p>
      <h2>{JSON.stringify(searchParams)}</h2>
    </div>
  );
};

export default page;
