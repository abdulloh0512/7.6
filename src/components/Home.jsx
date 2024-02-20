import React from "react";
import Left from "./Left";
import Postman from "./Postman";

function Home() {
  return (
    <div className="grid grid-cols-[1fr_3fr] h-full">
      <Left />
      <Postman />
    </div>
  );
}

export default Home;
