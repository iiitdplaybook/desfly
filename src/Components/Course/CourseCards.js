import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Tilt from "react-parallax-tilt";

import { toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";

function CourseCards(exploreCardInfo) {
  toast.configure();
  const notify = () =>
    toast.info("Locked. Sign up to access", {
      draggablePercent: 30,
      autoClose: 2500,
    });

  const cardHeight = 280;
  const cardWidth = cardHeight * (1.2);

  let gradientColor_1;
  let gradientColor_2;
  let title;
  let n_testimonies;
  let reading_time;
  let image;
  let pathLink;
  let opacity;
  let guestFilter;

  if (exploreCardInfo["title"]) {
    gradientColor_1 = exploreCardInfo["gradientColor_1"];
    gradientColor_2 = exploreCardInfo["gradientColor_2"];
    title = exploreCardInfo["title"];
    n_testimonies = exploreCardInfo["n_testimonies"];
    reading_time = exploreCardInfo["reading_time"];
    image = exploreCardInfo["image"];
    pathLink = exploreCardInfo["pathLink"];
    opacity = exploreCardInfo["opacity"];
    guestFilter = exploreCardInfo["guestFilter"];
  } else {
    gradientColor_1 = "#e66465";
    gradientColor_2 = "#9198e5";
    title = "No Title";
    n_testimonies = "N.A.";
    reading_time = "N.A.";
    image =
      "https://cdn.statically.io/gh/iiitdplaybook/iiitdplaybook/7a661570/src/Assets/TimeManagement.svg";
    pathLink = "explore";
    opacity = "1";
    guestFilter = false;
  }

  const useStyles = makeStyles({
    root: {
      maxWidth: cardWidth,
      minWidth: cardWidth,
      maxHeight: cardHeight,
      background: `linear-gradient(45deg, ${gradientColor_1}, ${gradientColor_2})`,
      borderRadius: 10,
      opacity: guestFilter ? ".3" : `${opacity}`,
      filter: guestFilter ? " grayscale(1)" : "none",
    },
    actionArea: {
      width: cardWidth,
      height: cardHeight,
    },
    link: {
      margin: "0%",
    },
    media: {
      maxHeight: cardHeight/2,
      margin: "5%",
      marginBottom: "0%",
      borderRadius: "6px"
    },
    title: {
      fontSize: 18,
      fontFamily: "Poppins",
      fontWeight: "bold",
      textAlign: "center",
      color: "#1c1c1c",
    },
    info: {
      fontSize: 12,
      textAlign: "center",
      margin: "2%",
      color: "#1c1c1c",
      opacity: ".5"
    },
  });
  const classes = useStyles();
  return (
      <Card className={classes.root}>
      
          <CardActionArea
            className={classes.actionArea}
          >
              <iframe className={classes.media} src="https://www.youtube.com/embed/b746_uGEtZg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allownetworking="internal"

allowfullscreen></iframe>
            {/* <CardMedia  image={image} title={title} /> */}

            <CardContent>
              <Typography
                className={classes.title}
              >
                {title}
              </Typography>
              <Typography className={classes.info} color="textSecondary">
                { `${reading_time} mins`}
              </Typography>
            </CardContent>
          </CardActionArea>
        
      </Card>
  );
}

export default CourseCards;
