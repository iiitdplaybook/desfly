/** @format */
import React from "react";
import "./Login.css";
import firebase from "firebase";
import Creators from "../Footer/Creators";
import TeamMembers from "../Footer/Team";
import fire from "../../fire";
import { auth, provider } from "../../fire";
import { useStateValue } from "../../StateProvider";
// import { auth } from "../../fire";
import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Testimonials from "../Testimonies/TestimonialsName";
import FadeIn from "./../Utils/FadeIn";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";

import { ToastContainer, toast } from "react-toastify";

const logo =
  "https://cdn.statically.io/gh/iiitdplaybook/desfly/86d7435f/src/login_bg.png";

function Login() {
  // const contri = [
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  //   { pic: userProfile, text: "Name" },
  // ];

  const [contri, setcontri] = React.useState([]);
  const [emails, setEmails] = useState([]);

  // React.useEffect(()=>{
  //   const unsub = fire.firestore().collection('Testimonies').where("isApproved", "==", true).onSnapshot(snapshot =>{
  //       const data = snapshot.docs.map(doc => {return ({text:doc.data().Name.split(" ")[0], pic:doc.data().UserAvatar})});
  //       if (data!=null){
  //         setcontri(data)
  //       }

  //   });
  //   return () => {
  //       unsub();
  //   }
  // });

  const vel2 = 25;
  let history = useHistory();

  function loadUser(user) {
    const firestoreUser = firebase
      .firestore()
      .collection("users")
      .doc(user.uid);
    const data = firestoreUser.get().then(function (doc) {
      if (!doc.exists) {
        const userData = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          UserAvatar: user.photoURL,
        };
        firestoreUser.set(userData).then(function () {});
      }
    });
  }

  const signIn = () => {
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // history.push("/homepage");
        // console.log(result.user.email);
        if (emails.includes(result.user.email)) {
          // console.log("Hell yeah");
          // console.log(result.user.email);
          localStorage.setItem("isSignedIn", true);
          loadUser(result.user);
          history.push("/homepage");
        } else {
          // console.log("God damn");
          // history.push("/");
          // localStorage.setItem("isSignedIn", false);
          toast.configure();
          const notify = () =>
            toast.info("You do not have access.", {
              draggablePercent: 30,
            });
          notify();
          return;
        }
      })
      .catch((error) => {});
  };

  const getEmails = async () => {
    var emails = [];

    let emailsRef = firebase.database().ref("Emails");
    await emailsRef.once("value", (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const temp = childSnapshot.val().email;
        emails.push(temp);
      });
    });

    // console.log("Emails");
    // console.log(emails);

    setEmails(emails);
  };

  useEffect(() => {
    getEmails();
    return () => {};
  }, []);

  const useStyles = makeStyles({
    root: {
      width: 200,
      marginLeft: 50,
    },
    media: {
      height: 150,
    },
  });

  return (
    <div className="login">
      <div className="circle"></div>
      <div className="login__logo">
        <img id="logo" src={logo} />
        <Link
          className="login__link"
          to={{
            pathname:
              "https://twitter.com/imkshitij16/status/1413888823163899907?s=20",
          }}
          target="_blank"
        >
          <Button className="login__form">Huh?</Button>
        </Link>
      </div>

      <div className="login__action">
        <div className="login__heading">
          <h1 className="textCard2">Design Flywheel</h1>
          <h5 className="textCard3">Zero to One in UI/UX Design</h5>
        </div>

        <div className="login__buttons">
          <Button id="signIn" onClick={signIn}>
            <i class="fa fa-unlock"></i>&nbsp; Sign up using Gmail
          </Button>
          <Button id="guest" component={Link} to={"/homepage"}>
            Take a Sneak Peek
          </Button>
          {/* Don't delete
              <Player
                autoplay
                loop
                src={blob}
                style={{ height: '300px', width: '300px', zIndex: '-1' }}
              >
              </Player> */}
        </div>
      </div>

      <div className="login_footer" style={{ color: "#3d3d3d" }}>
        Created with Playbook &copy; 2021
      </div>
    </div>
  );
}

export default Login;
