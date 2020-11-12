import React from "react";

const Approach = () => {
  let objects = [];
  for (let i = 0; i < 100; i++) {
    objects.push("1");
  }
  return (
    <div className="page">
      <div className="container">
        <div className="cloumn">
          {objects.map((object, i) => (
            <h3>This is the approach page</h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Approach;
