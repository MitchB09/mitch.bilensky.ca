import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";

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
          <Header data={resumeData.main} />
          <About data={resumeData.main} />
          <Resume data={resumeData.resume} />
          <Portfolio data={resumeData.portfolio} />
          <Footer data={resumeData.main} />
        </>
      ) : (
        <>Not Loaded</>
      )}
    </div>
  );
}

export default App;
