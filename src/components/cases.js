import React from "react";

const caseStudies = [
  {
    id: 1,
    subtitle: "#attention",
    title: "Special attention for beginners",
    img: "1",
  },
  {
    id: 2,
    subtitle: "#availability",
    title: "All classes available in your fingertips",
    img: "2",
  },
  {
    id: 3,
    subtitle: "#classes",
    title: "Regular and Weekend Classes",
    img: "3",
  },
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">
                <img
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
