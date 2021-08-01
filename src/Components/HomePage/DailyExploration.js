import React, { useEffect } from "react";
import "./DailyExploration.css";

function DailyExploration() {
  const itemList = [
    {
      title: "brewbakes",
      img: "https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/college_phases/brewbakes.jpeg",
    },
    {
      title: "graduation",
      img: "https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/cae94a65/src/Assets/college_phases/graduation.gif",
    },
    {
      title: "holi",
      img: "https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/college_phases/holi.jpeg",
    },
    {
      title: "library",
      img: "https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/college_phases/library.jpeg",
    },
    {
      title: "dandiya",
      img: "https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/college_phases/dandiya.jpg",
    },
  ];

  //   const [question, setQuestion] = useState([]);

  //   const getDailyQuestion = async () => {
  //     const dailyExplorationRef = firebase.database().ref("DailyExploration");
  //     await dailyExplorationRef.once("value", (snapshot) => {
  //       let items = [];
  //       snapshot.forEach((child) => {
  //         const dict = {};
  //         dict.title = child.val().title;
  //         dict.description = child.val().description;
  //         dict.image = child.val().image;
  //         dict.pathLink = child.val().pathLink;
  //         dict.boughtBy = child.val().boughtBy;
  //         dict.category = child.val().category;
  //         dict.key = child.key;
  //         items.push(dict);
  //       });
  //       setSupplies(items);
  //     });
  //     return supplies;
  //   };

  //   useEffect(() => {
  //     getDailyQuestion();
  //   }, []);

  function randomAngle() {
    let angle = -15 + Math.random() * 30;
    return angle + "deg";
  }

  return (
    <div className="Daily_container">
      <div className="Upper_container">
        <div className="Quiz_container">
          <h1>Cool ass question</h1>
          <div className="Quiz_option">A. Hot ass</div>
          <div className="Quiz_option">A. Error 404</div>
          <div className="Quiz_option">A. Hot ass</div>
          <div className="Quiz_option">A. Hot ass</div>
          <h5>
            Question by <a>NN Group</a>
          </h5>
        </div>
        <div className="Resource_container">
          <div className="Resource_item">
            <img src="https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/college_phases/brewbakes.jpeg"></img>
            <div>
              <h3>Title</h3>
              <h5>Description blah blah blah blah</h5>
            </div>
          </div>
          <div className="Resource_item locked">
            <img src="https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/college_phases/brewbakes.jpeg"></img>
            <div>
              <h3>Title</h3>
              <h5>Description blah blah blah blah</h5>
            </div>
          </div>
        </div>
      </div>
      <h5>Today's explorers</h5>
      <div className="explorers_container">
        <img src="https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/college_phases/brewbakes.jpeg"></img>
        <img src="https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/college_phases/brewbakes.jpeg"></img>
        <img src="https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/college_phases/brewbakes.jpeg"></img>
        <img src="https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/college_phases/brewbakes.jpeg"></img>
        <img src="https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/college_phases/brewbakes.jpeg"></img>
      </div>
    </div>
  );
}

export default DailyExploration;
