import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";

const strucure = {
  header: true,
  about: true,
  resume: true,
  portfolio: false,
  footer: true,
}

function App() {

  const [resumeData, setResumeData] = useState();

  useEffect(() => {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: (response) => {
        setResumeData(response);
      },
      error: (xhr, status, err) => {
        alert(err);
      },
    });
  }, []);

  return (
    <div className="App">
      {(resumeData) ? (
        <>
          {strucure.header && <Header data={resumeData.main} />}
          {strucure.about && <About data={resumeData.main} />}
          {strucure.resume && <Resume data={resumeData.resume} />}
          {strucure.portfolio && <Portfolio data={resumeData.portfolio} />}
          {strucure.footer && <Footer data={resumeData.main} />}
        </>
      ) : (
        <>Not Loaded</>
      )}
    </div>
  );
}

export default App;
