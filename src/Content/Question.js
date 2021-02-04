import React from 'react';

import './Content.css';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import SubmitModal from '../Modal/Modal';

const Question = ({
  categories,
  setQuestion,
  question,
  response,
  setResponse,
  answerId,
  answer,
  productImage,
  products,
  optionName,
  answerNameArr,
  setAnswerNameArr,
  onSubmitCb,
  setStarted,
}) => {
  let total = 0;
  for (let index = 0; index < categories.length; index++) {
    total = index;
  }

  let number = question;

  const next = () => {
    number = question;
    if (number !== total) {
      number++;
      setQuestion(number);
    }
  };

  const previous = () => {
    number = question;
    if (number !== 0) {
      number--;
      setQuestion(number);
    }
  };

  const regex = /(<([^>]+)>)/gi;
  const result = `${categories[question].body}`.replace(regex, '');

  return (
    <div className="question" style={{ height: '100%', width: '100%' }}>
      {/* Laptop */}
      <Hidden smDown>
        <div
          style={{
            marginTop: '3%',
            marginBottom: '3%',
            height: '100%',
            paddingRight: '3%',
          }}
        >
          <Typography variant="h1">{`${categories[question].name}`}</Typography>
          {result !== 'null' && result !== 'undefined' && (
            <Typography variant="body1">{`${result}`}</Typography>
          )}
        </div>
      </Hidden>
      {/* tablet */}
      <Hidden mdUp xsDown>
        <div
          style={{
            marginBottom: '3%',
            height: '100%',
            paddingRight: '3%',
          }}
        >
          <Typography variant="h1">{`${categories[question].name}`}</Typography>
          {result !== 'null' && result !== 'undefined' && (
            <Typography variant="body1">{`${result}`}</Typography>
          )}
        </div>
      </Hidden>
      {/* Phone */}
      <Hidden smUp>
        <Typography
          style={{
            textAlign: 'left',
            alignSelf: 'flex-start',
            marginTop: '20px',
          }}
          variant="h1"
        >
          {`${categories[question].name}`}
        </Typography>
        {result !== 'null' && result !== 'undefined' && (
          <Typography style={{ textAlign: 'left' }} variant="body1">
            {`${result}`}
          </Typography>
        )}
      </Hidden>

      <Hidden smDown>
        <Grid
          container
          justify="flex-end"
          alignItems="flex-end"
          className="buttons"
        >
          <Grid item md={8}>
            {number !== 0 ? (
              <Button
                color="primary"
                variant="contained"
                onClick={() => previous()}
              >
                Previous
              </Button>
            ) : (
              <Button variant="outlined" disabled>
                Previous
              </Button>
            )}
            {number !== total ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => next()}
              >
                Next
              </Button>
            ) : (
              <Button variant="outlined" disabled>
                Next
              </Button>
            )}
          </Grid>
          <Grid item md={12} sm={12}>
            {number !== total ? (
              <Button style={{ color: '#000000' }} onClick={() => next()}>
                SKIP
              </Button>
            ) : (
              <Button disabled>SKIP</Button>
            )}
          </Grid>
          <Grid item md={12}>
            {number !== total ? (
              <Button variant="outlined" disabled>
                Submit
              </Button>
            ) : (
              <SubmitModal
                setResponse={setResponse}
                answerId={answerId}
                answer={answer}
                response={response}
                productImage={productImage}
                products={products}
                optionName={optionName}
                setQuestion={setQuestion}
                answerNameArr={answerNameArr}
                setAnswerNameArr={setAnswerNameArr}
                onSubmitCb={onSubmitCb}
                setStarted={setStarted}
              />
            )}
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
};

export default Question;
