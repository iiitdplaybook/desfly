// import React from "react";
import CourseCards from "./CourseCards";

const imageTimeManagement =
  "https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/SVG_for_cards/timeManagement.svg";
const imageNostalgia =
  "https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/SVG_for_cards/nostalgia.svg";
const imageOnlinesem =
  "https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/SVG_for_cards/onlineSem.svg";
const imagePlacements =
  "https://www.youtube.com/watch?v=b746_uGEtZg";
const imageClubs =
  "https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/SVG_for_cards/clubs.svg";
const imageProfproject =
  "https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/SVG_for_cards/teamwork.svg";
const imageResources =
  "https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/SVG_for_cards/resources2.svg";
const imageQuery =
  "https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/SVG_for_cards/query.svg";
const imageNetwork =
  "https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/SVG_for_cards/network.svg";
const qna =
  "https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/3d0bba54/src/Assets/undraw_Faq_re_31cw.svg";

function items() {
  // bottom left - color1
  // top right - color2

  const color1 = "#9F4EAD"; //purple
  const color2 = "#EEB86D"; //yellow

  const color3 = "#fff"; //sea blue
  const color4 = "#fff"; //sea green

  const color5 = "#9F7FE5"; //purple
  const color6 = "#5497E3"; //blue

  const color7 = "#236FDC"; //dark blue
  const color8 = "#4BBEFF"; //light blue

  const color9 = "#4A90F3"; //blue
  const color10 = "#7EF29D"; //green

  const color11 = "#412FAF"; //dark blue
  const color12 = "#50C1E8"; //light blue

  const color13 = "#181C33"; //blackish
  const color14 = "#4F4181"; //blackish purple

  const color15 = "#FF6ABB"; //flywheel pink
  const color16 = "#5522E3"; //flywheel purple

  const color17 = "#F57F36"; //light yellow
  const color18 = "#FFD78A"; //dark yellow

  const color19 = "#BD5D94"; //pink
  const color20 = "#17086E"; //dark blue

  const color21 = "#5C0DB1"; //dark purple
  const color22 = "#DBCCFF"; //light purple

  const opac = 0.3;
  const guestVar = !localStorage.getItem("isSignedIn");

  const itemslist = {
    Demo: [],
    Module1: [],
    allCards: [],
  };

  const Demo = [
    {
      gradientColor_1: color3,
      gradientColor_2: color4,
      title: "\nDemo class",
      n_testimonies: 14,
      reading_time: 31,
      image: imagePlacements,
      pathLink: "https://www.youtube.com/watch?v=b746_uGEtZg",
      opacity: 1,
      guestFilter: false,
    },
    ];

    const Module1 = [
        {
          gradientColor_1: color3,
          gradientColor_2: color4,
          title: "\nDesign Mindset Introduction",
          n_testimonies: 14,
          reading_time: 31,
          image: imagePlacements,
          pathLink: "https://www.youtube.com/watch?v=b746_uGEtZg",
          opacity: 1,
          guestFilter: guestVar,
        },
        {
            gradientColor_1: color3,
            gradientColor_2: color4,
            title: "\nSetting up the system",
            n_testimonies: 14,
            reading_time: 31,
            image: imagePlacements,
            pathLink: "https://www.youtube.com/watch?v=b746_uGEtZg",
            opacity: 1,
            guestFilter: guestVar,
          },
          {
            gradientColor_1: color3,
            gradientColor_2: color4,
            title: "\nCase studies",
            n_testimonies: 14,
            reading_time: 31,
            image: imagePlacements,
            pathLink: "https://www.youtube.com/watch?v=b746_uGEtZg",
            opacity: 1,
            guestFilter: guestVar,
          },
          {
            gradientColor_1: color3,
            gradientColor_2: color4,
            title: "\nDesign Mindset Introduction",
            n_testimonies: 14,
            reading_time: 31,
            image: imagePlacements,
            pathLink: "https://www.youtube.com/watch?v=b746_uGEtZg",
            opacity: 1,
            guestFilter: guestVar,
          },
        ];

  const allCards = [
    {
      gradientColor_1: color15,
      gradientColor_2: color16,
      title: "\nDemo class",
      n_testimonies: 14,
      reading_time: 15,
      image: imagePlacements,
      pathLink: "internships",
      opacity: 1,
      guestFilter: guestVar,
    },
    {
      gradientColor_1: color1,
      gradientColor_2: color2,
      title: "\nNostalgia",
      n_testimonies: 9,
      reading_time: 5,
      image: imageNostalgia,
      pathLink: "nostalgia",
      opacity: 1,
      guestFilter: false,
    },
    {
      gradientColor_1: color21,
      gradientColor_2: color22,
      title: "\nQuick Bites",
      n_testimonies: 8,
      reading_time: 3,
      image: qna,
      pathLink: "quickbites",
      opacity: 1,
      guestFilter: false,
    },
    {
      gradientColor_1: color3,
      gradientColor_2: color4,
      title: "Time Management",
      n_testimonies: 6,
      reading_time: 3,
      image: imageTimeManagement,
      pathLink: "timemanagement",
      opacity: 1,
      guestFilter: guestVar,
    },
    {
      gradientColor_1: color13,
      gradientColor_2: color14,
      title: "Resources for college",
      n_testimonies: 10,
      reading_time: 10,
      image: imageResources,
      pathLink: "resources",
      opacity: 1,
      guestFilter: guestVar,
    },
    {
      gradientColor_1: color9,
      gradientColor_2: color10,
      title: "\nCourse",
      n_testimonies: 6,
      reading_time: 3,
      image: imageClubs,
      pathLink: "course",
      opacity: 1,
      guestFilter: guestVar,
    },
    {
      gradientColor_1: color11,
      gradientColor_2: color12,
      title: "Projects With Professors",
      n_testimonies: 6,
      reading_time: 3,
      image: imageProfproject,
      pathLink: "explore",
      opacity: opac,
      guestFilter: guestVar,
    },
    {
      gradientColor_1: color17,
      gradientColor_2: color18,
      title: "Resolving \nQueries",
      n_testimonies: 6,
      reading_time: 3,
      image: imageQuery,
      pathLink: "explore",
      opacity: opac,
      guestFilter: guestVar,
    },
    {
      gradientColor_1: color7,
      gradientColor_2: color8,
      title: "\nNetworking",
      n_testimonies: 6,
      reading_time: 3,
      image: imageNetwork,
      pathLink: "explore",
      opacity: opac,
      guestFilter: guestVar,
    },
    {
      gradientColor_1: color19,
      gradientColor_2: color20,
      title: "\nEntertainment",
      n_testimonies: 6,
      reading_time: 3,
      image: imageTimeManagement,
      pathLink: "explore",
      opacity: opac,
      guestFilter: guestVar,
    },
    {
      gradientColor_1: color21,
      gradientColor_2: color22,
      title: "Talking to Friends or Seniors",
      n_testimonies: 6,
      reading_time: 3,
      image: imageTimeManagement,
      pathLink: "explore",
      opacity: opac,
      guestFilter: guestVar,
    },
  ];



  for (let index = 0; index < allCards.length; index++) {
    itemslist["allCards"].push(CourseCards(allCards[index]));
  }

  for (let index = 0; index < Demo.length; index++) {
    itemslist["Demo"].push(CourseCards(Demo[index]));
  }

  for (let index = 0; index < Module1.length; index++) {
    itemslist["Module1"].push(CourseCards(Module1[index]));
  }


  return itemslist;
}

export default items;
