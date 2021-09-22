import React from "react";
import Card from "../Card/Card";
const Jobs = () => {
  const jobData = [
    {
      imgUrl: "https://internshala.com/static/images/home/jobs/perks/ctc.svg",
      title: "Minimum CTC of 3 LPA",
    },
    {
      imgUrl: "https://internshala.com/static/images/home/jobs/perks/dream.svg",
      title: "Dream companies",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/jobs/perks/verified.svg",
      title: "100% verified jobs",
    },
  ];
  return (
    <div className="section">
      <h2 className="section-heading">
        Fresher Jobs<span className="badge">New</span>
      </h2>
      <div className="section-description">
        <div className="section-description-heading">
          Premium fresher jobs on your fingertips
        </div>
        <a href="##" className="section-description-link">
          View all jobs<i className="fas fa-arrow-right"></i>
        </a>
      </div>
      <div className="categories-container">
        <div className="jobs-categories-flex">
          {jobData.map((job, index) => (
            <Card key={index} data={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
