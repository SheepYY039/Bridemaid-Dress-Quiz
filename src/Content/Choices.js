import React from 'react';

import './Content.css';

import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';

import posed from 'react-pose';
import { log } from 'firebase-functions/lib/logger';

const Question = ({
  options,
  answer,
  answerId,
  image,
  setAnswer,
  setAnswerId,
}) => {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleInputChange = (event) => {
    const optionName = event.currentTarget.getAttribute('aria-label');
    const optionId = event.currentTarget.getAttribute('id');
    const { categoryId } = options[0];
    const answerLive = answer;
    const answerLiveId = answerId;
    if (!event.currentTarget.classList.contains('Mui-selected')) {
      answerLive[categoryId] = optionName;
      answerLiveId[categoryId] = optionId;
    } else {
      delete answerLive[categoryId];
      delete answerLiveId[categoryId];
    }
    setAnswer(answerLive);
    setAnswerId(answerLiveId);
  };

  const MyToggleButtonGroup = ({ label, ...props }) => (
    <ToggleButtonGroup
      {...props}
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="Choices"
      label={label}
    />
  );

  const OptionClick = posed.div({
    hoverable: true,
    pressable: true,
    init: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
    },
    hover: {
      scale: 1.015,
      boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
    },
    press: {
      scale: 1.005,
    },
  });

  const height = () => {
    let calc = '';
    if (window.innerWidth <= 425) {
      const inHeight = window.innerHeight;
      calc = `${inHeight}/100*50`;
    } else if (window.innerWidth <= 768) {
      calc = '100%';
    } else {
      calc = '';
    }
    console.log(calc);
    return calc;
  };
  const choiceStyle = {
    minHeight: `${() => height()}`,
  };

  return (
    <>
      <Hidden smDown>
        <Grid
          spacing={2}
          container
          className="choiceGrid"
          component={MyToggleButtonGroup}
          style={choiceStyle}
        >
          {Object.keys(options).map((option) => (
            <ToggleButton
              className=" MuiGrid-grid-sm-6 MuiGrid-grid-xs-12 MuiGrid-item"
              style={{
                height: '100%',
                borderRadius: '5%',
                border: 'none',
              }}
              id={`${options[option].optionId}`}
              key={`${options[option].name}${Math.random()}`}
              aria-label={`${options[option].name}`}
              value={`${options[option].name}`}
              onClick={(e) => handleInputChange(e)}
              index={option}
              component={OptionClick}
              color="secondary"
            >
              <Card
                style={{ minHeight: '275px', minWidth: '265px' }}
                key={`card${options[option].name}${Math.random()}`}
              >
                <h1 className="optionName">{`${options[option].name}`}</h1>

                {Object.keys(image).map(
                  (key) => {
                    console.log(image[key]);
                    return key === `${options[option].optionId}` && (
                      <div
                        className="imgDiv"
                        key={`img${image[key]}${Math.random()}`}
                      >
                        <img
                          className="img"
                          src={image[key]}
                          alt={`${options[option].name}`}
                        />
                      </div>
                    )},
                )}
              </Card>
            </ToggleButton>
          ))}
        </Grid>
      </Hidden>
      <Hidden xsDown mdUp>
        <Grid
          spacing={2}
          container
          className="choiceGrid"
          component={MyToggleButtonGroup}
          // style={{ overflowY: "scroll" }}
        >
          {Object.keys(options).map((option) => (
            <ToggleButton
              className=" MuiGrid-grid-sm-6 MuiGrid-grid-xs-12 MuiGrid-item"
              style={{
                height: 'fit-content',
                borderRadius: '5%',
                border: 'none',
              }}
              id={`${options[option].optionId}`}
              key={`${options[option].name}${Math.random()}`}
              aria-label={`${options[option].name}`}
              value={`${options[option].name}`}
              onClick={(e) => handleInputChange(e)}
              index={option}
              component={OptionClick}
              color="secondary"
            >
              <Card
                style={{ minHeight: '275px', minWidth: '265px' }}
                key={`card${options[option].name}${Math.random()}`}
              >
                <h1 className="optionName">{`${options[option].name}`}</h1>

                {Object.keys(image).map(
                  (key) =>
                    key === `${options[option].optionId}` && (
                      <div
                        className="imgDiv"
                        key={`img${image[key]}${Math.random()}`}
                      >
                        <img
                          className="img"
                          src={image[key]}
                          alt={`${options[option].name}`}
                        />
                      </div>
                    ),
                )}
              </Card>
            </ToggleButton>
          ))}
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid
          spacing={2}
          container
          className="choiceGrid"
          component={MyToggleButtonGroup}
          style={{ overflowY: 'scroll', height: '100%' }}
        >
          {Object.keys(options).map((option) => (
            <ToggleButton
              className=" MuiGrid-grid-sm-6 MuiGrid-grid-xs-12 MuiGrid-item"
              style={{
                height: 'fit-content',
                borderRadius: '5%',
                border: 'none',
              }}
              id={`${options[option].optionId}`}
              key={`${options[option].name}${Math.random()}`}
              aria-label={`${options[option].name}`}
              value={`${options[option].name}`}
              onClick={(e) => handleInputChange(e)}
              index={option}
              component={OptionClick}
              color="secondary"
            >
              <Card
                style={{ minHeight: '275px', minWidth: '265px' }}
                key={`card${options[option].name}${Math.random()}`}
              >
                <h1 className="optionName">{`${options[option].name}`}</h1>

                {Object.keys(image).map(
                  (key) =>
                    key === `${options[option].optionId}` && (
                      <div
                        className="imgDiv"
                        key={`img${image[key]}${Math.random()}`}
                      >
                        <img
                          className="img"
                          src={image[key]}
                          alt={`${options[option].name}`}
                        />
                      </div>
                    ),
                )}
              </Card>
            </ToggleButton>
          ))}
        </Grid>
      </Hidden>
    </>
  );
};

export default Question;
