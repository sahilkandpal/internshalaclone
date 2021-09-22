import React from "react";
import Card from "../Card/Card";
const Internships = () => {
  const cityData = [
    {
      imgUrl:
        "https://internshala.com/static/images/home/internships/categories/work_from_home.svg",
      title: "Work from home",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/internships/categories/delhi_ncr.svg",
      title: "Delhi/NCR",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/internships/categories/bangalore.svg",
      title: "Bangalore",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/internships/categories/mumbai.svg",
      title: "Mumbai",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/internships/categories/mumbai.svg",
      title: "Hyderabad",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/internships/categories/chennai.svg",
      title: "Chennai",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/internships/categories/kolkata.svg",
      title: "Kolkata",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/internships/categories/international.svg",
      title: "International",
    },
  ];

  const categoryData = [
    {
      imgUrl:
        "https://internshala.com/static/images/home/internships/categories/part_time.svg",
      title: "Part-time",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/internships/categories/engineering.svg",
      title: "Engineering",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/internships/categories/ngo.svg",
      title: "NGO",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/internships/categories/mba.svg",
      title: "MBA",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/internships/categories/design.svg",
      title: "Design",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/internships/categories/science.svg",
      title: "Science",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/internships/categories/media.svg",
      title: "Media",
    },
    {
      imgUrl:
        "https://internshala.com/static/images/home/internships/categories/humanities.svg",
      title: "Humanities",
    },
  ];
  return (
    <div className="section">
      <h2 className="section-heading">Internships</h2>
      <div className="section-description">
        <div className="section-description-heading">
          Apply to 10,000+ internships for free
        </div>
        <a href="##" className="section-description-link">
          View all internships<i className="fas fa-arrow-right"></i>
        </a>
      </div>
      <div className="categories-container">
        <div className="categories-container-heading">Popular cities</div>
        <div className="categories">
          <div className="scrollable-container">
            {cityData.map((city, index) => (
              <Card key={index} data={city} />
            ))}
          </div>
        </div>

        <div className="categories-container">
          <div className="categories-container-heading">Popular categories</div>
          <div className="categories">
            <div className="scrollable-container">
              {categoryData.map((category, index) => (
                <Card key={index} data={category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;
