/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    height: "100%"
  },
  image: {
    position: 'relative',
    // height: 400,
    height: '-webkit-fill-available',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: "inherit !important",
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        backgroundColor: theme.palette.secondary.light,
        opacity: 0.85,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: `4px solid ${theme.palette.secondary.dark}`,
        color: theme.palette.secondary.dark,
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.secondary.dark,
    // backgroundColor: theme.palette.common.black,
    opacity: 0.6,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
    verticalAlign: 'middle',
    display: 'inline-flex',
  },
  coverTitle: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: '#fce4ec',
    color: 'black',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 54,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const Landing = ({ setStarted }) => {
  const classes = useStyles();
  return (
    <div className="App" style={{ height: '100vh' }}>
      <div className={classes.root}>
        <ButtonBase
          onClick={() => setStarted(true)}
          focusRipple
          centerRipple
          key="Start"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '100%',
            objectFit: 'cover',
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage:
                'url(https://www.myprojectbride.com/image/cache/catalog/banner/woodenlogo-2560x940w.webp)',
            }}
          />
          <span className={classes.imageBackdrop} />

          <span className={classes.imageButton}>
            <Hidden xsDown>
              <Typography
                component="span"
                variant="h2"
                color="inherit"
                className={classes.imageTitle}
              >
                Start Quiz Now!
                <ArrowForwardIcon
                  style={{
                    position: 'relative',
                    bottom: 0,
                  }}
                  fontSize="inherit"
                  color="inherit"
                />
                <span className={classes.imageMarked} />
              </Typography>
            </Hidden>
            <Hidden smUp>
              <Typography
                component="span"
                variant="h4"
                color="inherit"
                className={classes.imageTitle}
              >
                Start Quiz Now!
                <ArrowForwardIcon
                  style={{
                    position: 'relative',
                    bottom: 0,
                  }}
                  fontSize="inherit"
                  color="inherit"
                />
                <span className={classes.imageMarked} />
              </Typography>
            </Hidden>
          </span>
        </ButtonBase>
      </div>
    </div>
  );
};

export default Landing;
