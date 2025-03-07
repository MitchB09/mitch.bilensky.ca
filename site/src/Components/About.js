import React from "react";


const About = (props) => {

  const { data: resumeData } = props;
  const name = resumeData.name;
  const profilepic = "images/" + resumeData.image;
  const bio = resumeData.bio;
  const street = resumeData.address?.street;
  const city = resumeData.address?.city;
  const state = resumeData.address?.state;
  const zip = resumeData.address?.zip;
  const phone = resumeData.phone;
  const email = resumeData.email;


  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Mitch Bilensky Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a
                  href={process.env.PUBLIC_URL + "/resume.pdf"}
                  className="button"
                >
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
          <h2>About This Site</h2>

          <p>
            This site is built in React with infrastructure provisioned in AWS
            using CloudFormation. This site is also setup with CI/CD privided
            by GitHub Actions. For further info,
            <a href="https://github.com/MitchB09/mitch.bilensky.ca">
              &nbsp;checkout the repo on GitHub!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
