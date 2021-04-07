import React, { useState, useEffect } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  CardMedia,
  Tooltip,
  Link,
} from '@material-ui/core';
import { FaRegCheckCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { makeStyles } from '@material-ui/core/styles';
import Tilt from 'react-parallax-tilt';
import { truncate } from 'lodash';

function QnACard({ card, colors }) {
  const cardHeight = 250;
  const cardWidth = cardHeight * (2.5 / 3);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const useStyles = makeStyles({
    root: {
      display: 'inline-block',
      maxWidth: cardWidth,
      minWidth: cardWidth,
      maxHeight: cardHeight,
      background: `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`,
      borderRadius: 10,
    },
    actionArea: {
      width: cardWidth,
      height: cardHeight,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    question: {
      fontSize: '34px',
      color: '#fff',
      fontWeight: '900',
      textAlign: 'center',
      fontFamily: '"Poppins", "sans-serif"',
    },
    link: {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none',
      },
    },
    dialog: {
      margin: '0 auto',
    },
    divider: {
      padding: '5px',
    },
    answer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      background: '#e5e5e5',
      borderRadius: '5px',
      padding: '5px',
      margin: '10px 0',
      color: '#222222',
      fontSize: '13px',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        textDecoration: 'none !important',
        background: '#d5d5d5',
      },
    },
    invisible: {
      visibility: 'hidden !important',
    },
    answerImage: {
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      width: 'auto',
      height: 'auto',
      marginRight: '5px',
    },
    verified: {
      color: '#68C937',
      position: 'absolute',
      top: '5px',
      right: '5px',
    },
    subscribe: {
      textAlign: 'center',
      margin: '10px 0',
    },
  });
  const classes = useStyles();

  return (
    <>
      <Tilt>
        <Card className={classes.root} onClick={handleClickOpen}>
          <CardActionArea className={classes.actionArea}>
            <CardContent className={classes.content}>
              <Typography
                className={classes.question}
                style={{ whiteSpace: 'pre-line' }}
              >
                {card.question}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Tilt>
      <Dialog
        open={open}
        onClose={handleClose}
        className={classes.dialog}
        aria-labelledby='alert-dialog-title'
      >
        <DialogTitle className={classes.title}>{card.question}</DialogTitle>
        <DialogContent className={classes.dialogContent} dividers={true}>
          <DialogContentText className={classes.dialogText}>
            {card.answers.map((ans) => (
              <Link href={ans.link} className={classes.link}>
                <div className={classes.answer}>
                  <img src={ans.image} className={classes.answerImage} />
                  <div className={classes.divider}>
                    <div className={classes.body}>
                      <h4>{ans.heading}</h4>
                      <p>
                        {ans.description}
                        <br />
                      </p>
                    </div>
                    <div>
                      <IconContext.Provider value={{ color: '#68C937' }}>
                        <div
                          className={
                            ans.verified === 'True'
                              ? classes.verified
                              : classes.invisible
                          }
                        >
                          <FaRegCheckCircle />
                        </div>
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            <img
              className={classes.subscribe}
              src='https://dummyimage.com/400x200/eee/000.png&text=subscribe+card'
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default QnACard;
