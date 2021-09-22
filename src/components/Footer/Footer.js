import React from "react";

const Footer = () => {
  const footerData = {
    places: [
      { text: "Internship in India", link: "" },
      { text: "Internship in Delhi", link: "" },
      { text: "Internship in Bangalore", link: "" },
      { text: "Internship in Hyderabad", link: "" },
      { text: "Internship in Mumbai", link: "" },
      { text: "Internship in Chennai", link: "" },
      { text: "Internship in Gurgaon", link: "" },
      { text: "Internship in Kolkata", link: "" },
      { text: "Virtual internship", link: "" },
    ],
    streams: [
      { text: "Computer Science Internship", link: "" },
      { text: "Electronics Internship", link: "" },
      { text: "Mechanical Internship", link: "" },
      { text: "Civil Internship", link: "" },
      { text: "Marketing Internship", link: "" },
      { text: "Chemical Internship", link: "" },
      { text: "Finance Internship", link: "" },
      { text: "Summer Research Fellowship", link: "" },
      { text: "Campus Ambassador Program", link: "" },
    ],
    trainings: [
      { text: "Programming with Python", link: "" },
      { text: "Digital Marketing", link: "" },
      { text: "Web Development", link: "" },
      { text: "Machine Learning", link: "" },
      { text: "Advanced Excel", link: "" },
      { text: "Ethical Hacking", link: "" },
      { text: "AutoCAD", link: "" },
      { text: "Creative Writing", link: "" },
      { text: "Data Science", link: "" },
    ],
    aboutLinks: [
      { text: "About us", link: "" },
      { text: "We're hiring", link: "" },
      { text: "Hire interns for you company", link: "" },
      { text: "Team Diary", link: "" },
      { text: "Blog", link: "" },
      { text: "Our Services", link: "" },
      { text: "Terms & Conditions", link: "" },
      { text: "Privacy", link: "" },
      { text: "Contact us", link: "" },
    ],
  };

  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <div className="footer-col-heading">Internship by places</div>
          {footerData.places.map((place, index) => (
            <a href="##" key={index}>
              {place.text}
            </a>
          ))}
        </div>
        <div className="footer-col">
          <div className="footer-col-heading">Internship by Stream</div>
          {footerData.streams.map((stream, index) => (
            <a href="##" key={index}>
              {stream.text}
            </a>
          ))}
        </div>
        <div className="footer-col">
          <div className="footer-col-heading">Online Trainings</div>
          {footerData.trainings.map((training, index) => (
            <a href="##" key={index}>
              {training.text}
            </a>
          ))}
        </div>
        <div className="footer-col">
          <div className="footer-col-heading">About Internshala</div>
          {footerData.aboutLinks.map((aboutLink, index) => (
            <a href="##" key={index}>
              {aboutLink.text}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-trainings">
        <div className="footer-trainings-heading">
          OnlineTrainings<span className="badge">OFFER</span>
        </div>
        <div className="list-grid">
          {footerData.trainings.map((training, index) => (
            <a href="##" key={index}>
              {training.text}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-about">
        <div className="list-grid">
          {footerData.aboutLinks.map((aboutLink, index) => (
            <a href="##" key={index}>
              {aboutLink.text}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          <div className="store-btn">
            <i className="fab fa-google-play"></i>
            Get Android App
          </div>
          <div className="social-links">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <div className="copyright">&copy; Copyright 2021 Internshala</div>
      </div>
    </div>
  );
};

export default Footer;
