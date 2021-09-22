import React from "react";
import Card from "../Card/Card";
const Trainings = () => {
  const trainingData = [
    {
      imgUrl:
        "https://internshala.com/static/images/home/trainings/icons/programming_with_python.svg",
      title: "Programming with Python",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/trainings/icons/digital_marketing.svg",
      title: "Digital Marketing",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/trainings/icons/web_development.svg",
      title: "Web Development",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/trainings/icons/machine_learning.svg",
      title: "Machine Learning",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/trainings/icons/advanced_excel.svg",
      title: "Advanced Excel",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/trainings/icons/ethical_hacking.svg",
      title: "Ethical Hacking",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/trainings/icons/autocad.svg",
      title: "AutoCAD",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/trainings/icons/creative_writing.svg",
      title: "Creative Writing",
    },
  ];
  return (
    <div className="section">
      <h2 className="section-heading">Internshala Trainings</h2>
      <div className="section-description">
        <div className="section-description-heading">
          Learn new-age skills on the go
        </div>
        <a href="##" className="section-description-link">
          View all trainings<i className="fas fa-arrow-right"></i>
        </a>
      </div>
      <div className="categories-container trainings">
        <div className="categories-flex">
          {trainingData.map((training, index) => (
            <Card key={index} data={training} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainings;
