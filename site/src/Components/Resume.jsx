import React from 'react';

function Resume(props) {
  const { data } = props;

  const skillmessage = data.skillmessage;
  const education = data.education.map((education) => {
    return <div key={education.school}><h3>{education.school}</h3>
      <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
      <p>{education.description}</p></div>
  })
  const work = data.work.map((work, index) => {
    return <div key={work.company + index}><h3>{work.company}</h3>
      <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
      <p>{work.description}</p>
    </div>
  })

  const renderSkillCategory = (category) => {
    return (
      <div key={category.name}>
        <h3>{category.name}</h3>
        <ul className="skills">
          {category.skills.map((skill) => {
            const className = 'bar-expand ' + skill.name.toLowerCase();
            return <li key={skill.name}><span style={{ width: skill.level }} className={className}></span><em>{skill.name}</em></li>
          })}
        </ul>
      </div>

    )
  }

  return (
    <section id="resume">

      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {education}
            </div>
          </div>
        </div>
      </div>


      <div className="row work">

        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>

        <div className="nine columns main-col">
          {work}
        </div>
      </div>



      <div className="row skill">

        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>

        <div className="nine columns main-col">

          <p>{skillmessage}
          </p>

          <div className="bars">
            <ul className="skillCategories">
              {data.skillCategories.map((category) => {
                return renderSkillCategory(category)
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
