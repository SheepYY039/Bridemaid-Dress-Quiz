import React from 'react';
import './Content.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SubmitModal from '../Modal/Modal';

const Buttons = ({
  categories,
  setQuestion,
  question,
  response,
  setResponse,
  answer,
  answerId,
  productImage,
  products,
  optionName,
  setAnswer,
  setAnswerId,
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

  function next() {
    number = question;
    if (number !== total) {
      number++;
      setQuestion(number);
    }
  }

  function previous() {
    number = question;
    if (number !== 0) {
      number--;
      setQuestion(number);
    }
  }

  return (
    <Grid
      container
      direction="row"
      justify="flex-end"
      alignItems="center"
      className="buttons"
      style={{ marginTop: '3%' }}
      spacing={1}
    >
      <Grid item sm={4} xs={6}>
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
      </Grid>
      <Grid item sm={4} xs={6}>
        {number !== total ? (
          <Button variant="contained" color="primary" onClick={() => next()}>
            Next
          </Button>
        ) : (
          <Button variant="outlined" disabled>
            Next
          </Button>
        )}
      </Grid>
      <Grid item sm={7} xs={12}>
        {number !== total ? (
          <Button
            variant="contained"
            style={{ color: '#000000' }}
            onClick={() => next()}
          >
            SKIP
          </Button>
        ) : (
          <Button disabled>SKIP</Button>
        )}
      </Grid>
      <Grid item sm={7} xs={12}>
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
            setAnswer={setAnswer}
            setAnswerId={setAnswerId}
            setQuestion={setQuestion}
            answerNameArr={answerNameArr}
            setAnswerNameArr={setAnswerNameArr}
            onSubmitCb={onSubmitCb}
            setStarted={setStarted}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Buttons;
