import React, { useState } from 'react';
import { Icon, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LineShareButton,
  LineIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MapProducts from './MapProducts';

const SubmitModal = ({
  setResponse,
  answer,
  response,
  answerId,
  productImage,
  products,
  optionName,
  setQuestion,
  answerNameArr,
  setAnswerNameArr,
  onSubmitCb,
  setStarted,
}) => {
  axios.defaults.baseURL =
    'https://asia-east2-quiz-myprojectbride.cloudfunctions.net/api';

  const [open, setOpen] = useState(false);
  const [body, setBody] = useState(`My Results:\n`);

  const clearState = () => {
    onSubmitCb && onSubmitCb();
    setStarted(false);
    setQuestion(0);
    setOpen(false);
  };

  const submitFunction = () => {
    setOpen(true);
    const getAnsNameArr = () => {
      const tempArr = answerNameArr;
      Object.keys(answer).map((id) => {
        tempArr.push({ name: answer[id] });
        setAnswerNameArr(tempArr);
        return answerNameArr;
      });
      postResponse();
    };
    const postResponse = async () => {
      console.log(answer);
      await axios
        .post('/response', {
          answer,
          answerNames: answerNameArr,
        })
        .then((res) => console.log(res))
        .catch((error) => {
          console.log(error);
        });
    };
    setResponse(answerId);
    getAnsNameArr();
  };

  const separator = `\n`;

  const handleEmailOnClick = () => {
    console.log(body);
    window.top.location =
      'mailto:?subject=' +
      encodeURIComponent('My Project Bride Bridesmaid Dress Quiz Results') +
      '&body=' +
      body;
    // encodeURIComponent(body);
  };;
  return (
    <Modal
      open={open}
      dimmer="inverted"
      closeOnEscape={false}
      closeOnDimmerClick={false}
      size="fullscreen"
      trigger={
        <Button
          onClick={() => submitFunction()}
          color="secondary"
          variant="contained"
        >
          submit
        </Button>
      }
    >
      <Modal.Header style={{ backgroundColor: '#c9b2ba' }}>
        Product Match
      </Modal.Header>
      <MapProducts
        body={body}
        setBody={setBody}
        response={response}
        productImage={productImage}
        products={products}
        responseName={answer}
        optionName={optionName}
      />
      <Modal.Actions style={{ backgroundColor: '#ffeeff' }}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          {/* Laptop */}
          <Hidden smDown>
            <Grid item md={6}>
              <Grid container direction="row">
                <Typography md={2} style={{ textAlign: 'left' }} variant="h6">
                  Share my results!
                </Typography>
                <Grid item xs={1}>
                  <FacebookShareButton
                    url="https://www.myprojectbride.com"
                    quote="Check this quiz out!"
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                </Grid>
                <Grid item xs={1}>
                  <WhatsappShareButton
                    url="https://www.myprojectbride.com"
                    title="Check this quiz out!"
                    separator=":: "
                    className="Demo__some-network__share-button"
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </Grid>
                <Grid item xs={1}>
                  <LineShareButton
                    url="https://www.myprojectbride.com"
                    title="Check this quiz out!"
                    className="Demo__some-network__share-button"
                  >
                    <LineIcon size={32} round />
                  </LineShareButton>
                </Grid>
                <Grid item xs={1}>
                  <TwitterShareButton
                    url="https://www.myprojectbride.com"
                    title="Check this quiz out!"
                    className="Demo__some-network__share-button"
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </Grid>
                <Grid item xs={1}>
                  <EmailShareButton
                    target="_blank"
                    url="https://www.myprojectbride.com"
                    onClick={() => handleEmailOnClick()}
                  >
                    <EmailIcon size={32} round />
                  </EmailShareButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={2}>
              <Button
                color="secondary"
                onClick={() => clearState()}
                variant="contained"
              >
                Restart
                <Icon name="right chevron" />
              </Button>
            </Grid>
          </Hidden>
          {/* Phone + Tablet */}
          <Hidden mdUp>
            <Grid
              item
              sm={8}
              xs={12}
              direction="row"
              justify="space-evenly"
              container
            >
              <Typography xs={2} style={{ textAlign: 'left' }} variant="h6">
                Share my results!
              </Typography>
              <Grid item xs={1}>
                <FacebookShareButton
                  url="https://www.myprojectbride.com"
                  quote="Check this quiz out!"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </Grid>
              <Grid item xs={1}>
                <WhatsappShareButton
                  url="https://www.myprojectbride.com"
                  title="Check this quiz out!"
                  separator=":: "
                  className="Demo__some-network__share-button"
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </Grid>
              <Grid item xs={1}>
                <LineShareButton
                  url="https://www.myprojectbride.com"
                  title="Check this quiz out!"
                  className="Demo__some-network__share-button"
                >
                  <LineIcon size={32} round />
                </LineShareButton>
              </Grid>
              <Grid item xs={1}>
                <TwitterShareButton
                  url="https://www.myprojectbride.com"
                  title="Check this quiz out!"
                  className="Demo__some-network__share-button"
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
              </Grid>
              <Grid item xs={1}>
                <EmailShareButton
                  url="https://www.myprojectbride.com"
                  onClick={() => handleEmailOnClick()}
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
              </Grid>
            </Grid>
            <Grid item sm="auto">
              <Button
                color="secondary"
                onClick={() => clearState()}
                variant="contained"
              >
                Restart
                <Icon name="right chevron" />
              </Button>
            </Grid>
          </Hidden>
        </Grid>
      </Modal.Actions>
    </Modal>
  );
};

export default SubmitModal;
