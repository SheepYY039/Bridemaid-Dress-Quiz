import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import posed from 'react-pose';

import EnlargeImage from './EnlargeImage';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'right',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  media: {
    height: 275,
    objectPosition: 'top center',
    overflowY: 'hidden',
    display: 'inlineBlock',
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const ImageHoverClick = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
  },
  hover: {
    scale: 1.1,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
  },
  press: {
    scale: 1.05,
    // boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  },
});

const GetUrl = ({ url }) => {
  if (url !== 'undefined' && url !== 'null' && url !== '') {
    if (url.substring(0, 4) !== 'http') {
      return (
        <Link href={`http://${url}`} target="_blank">
          <Button color="secondary" variant="contained" size="small">
            View this product!
          </Button>
        </Link>
      );
    }
    return (
      <Link href={url} target="_blank">
        <Button color="secondary" variant="contained" size="small">
          View this product!
        </Button>
      </Link>
    );
  }
  return null;
};

const ProductCards = ({
  productMatch,
  product,
  item,
  optionName,
  productImage,
}) => {
  const classes = useStyles();
  const url = `${item.productPageUrl}`.toString().trim();
  return (
    <Grid item sm="auto" md="auto" style={{ alignSelf: 'center' }}>
      <Card key={Math.random()} className={classes.root}>
        {Object.keys(productImage).map(
          (key) =>
            key === productMatch[product].productId && (
              <ImageHoverClick key={`${productImage[key]}${Math.random()}`}>
                <EnlargeImage
                  className={classes.media}
                  image={productImage[key]}
                  title={item.name}
                  alt={item.name}
                />
              </ImageHoverClick>
            ),
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>

          <Grid container>
            {item.option.map((optionId) =>
              Object.values(optionName).map(
                (optionTag) =>
                  optionTag.optionId === optionId && (
                    <Grid item md="auto" sm="auto" key={Math.random()}>
                      <Chip
                        color="primary"
                        style={{ textTransform: 'uppercase' }}
                        label={optionTag.name}
                        className={classes.chip}
                        size="small"
                      />
                    </Grid>
                  ),
              ),
            )}
          </Grid>
          <Divider />
        </CardContent>
        <CardActions>
          <GetUrl url={url} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCards;
