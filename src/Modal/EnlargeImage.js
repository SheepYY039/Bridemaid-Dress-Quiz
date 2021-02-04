import React, { useState } from 'react';

import { Modal } from 'semantic-ui-react';

import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { SideBySideMagnifier } from 'react-image-magnifiers';

const EnlargeImage = ({ image, title, alt }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const useStyles = makeStyles((theme) => ({
    media: {
      height: 275,
      objectPosition: 'top center',
      overflowY: 'hidden',
      display: 'inlineBlock',
      cursor: 'zoom-in',
      overflowX: 'hidden',
      '& img': {
        width: 'auto',
        margin: 'auto',
        objectFit: 'contain',
        cursor: 'zoom-in !important',
      },
    },
    enlargeMedia: {
      height: '100%',
      width: 'auto',
      objectFit: 'cover',
      margin: 'auto',
      '& img': {
        height: '100%',
        width: 'auto',
        margin: 'auto',
        objectFit: 'contain',
      },
    },
  }));

  const classes = useStyles();

  return (
    <Modal
      closeIcon
      size="fullscreen"
      dimmer="inverted"
      open={open}
      onOpen={() => onOpen()}
      onClose={() => onClose()}
      trigger={
        <Button style={{ cursor: 'zoom-in' }}>
          <SideBySideMagnifier
            key={`${image}${Math.random()}`}
            className={classes.media}
            imageSrc={image}
            imageAlt={alt}
            alwaysInPlace
            overlayOpacity={0.6}
            switchSides
            zoomPosition="left"
            inPlaceMinBreakpoint={641}
            fillAvailableSpace={false}
            fillAlignTop={false}
            fillGapTop={0}
            fillGapRight={10}
            fillGapBottom={10}
            fillGapLeft={10}
            zoomContainerBorder="1px solid #ccc"
            zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
          />
        </Button>
      }
    >
      <CardMedia
        key={`${image}${Math.random()}Enlarge`}
        className={classes.enlargeMedia}
        component="img"
        image={image}
        title={title}
        alt={alt}
      />
    </Modal>
  );
};

export default EnlargeImage;
