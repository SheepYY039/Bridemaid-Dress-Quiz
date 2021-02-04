import React, { useState, useMemo } from 'react';
import { Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import Grid from '@material-ui/core/Grid';
import ProductCards from './ProductCards';

const MapProducts = ({
  response,
  productImage,
  products,
  optionName,
  body,
  setBody,
}) => {
  const [productMatch, setProductMatch] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const matching = (response) => {
    // setIsLoading(true);
    Object.values(response).map((tag) =>
      products.map((product) =>
        product.option.map((label) => {
          const copyMatch = productMatch;
          if (label === tag) {
            copyMatch.push({
              key: Math.random(),
              productId: product.productId,
              name: product.name,
              option: product.option,
              productPageUrl: product.productPageUrl,
            });
          }

          const getUnique = (arr, index) => {
            const unique = arr
              .map((e) => e[index])
              .map((e, i, final) => final.indexOf(e) === i && i)
              .filter((e) => arr[e])
              .map((e) => arr[e]);
            return unique;
          };
          const filteredMatch = getUnique(copyMatch, 'productId');

          setProductMatch(filteredMatch);
          return filteredMatch;
        }),
      ),
    );

    Object.keys(products).map((product) => {
      const url = `${products[product].productPageUrl}`.toString().trim();
      const options = products[product].option.map((optionId) => {
        let tempOptions = '';
        Object.values(optionName).map(
          (optionTag) =>
            optionTag.optionId === optionId &&
            (tempOptions += `\n\t\u2022 ${optionTag.name}`),
        );
        return tempOptions;
      });
      body += `\n\u2022 ${products[product].name}${options}\n\tMore Details: ${url}\n`;
    });
    setBody(body);
  };

  useMemo(() => matching(response), [response]);
  return (
    <Modal.Content
      style={{
        backgroundColor: '#fce4ec',
        height: '60vh',
        overflowY: 'scroll',
      }}
    >
      {productMatch.length === 0 ? (
        <>
          <h1>Sorry No Products Found, Showing All Products</h1>
          <Grid container spacing={2} justify="space-around">
            {Object.keys(products).map((product) => (
              <ProductCards
                key={`${products[product].productId}${Math.random()}`}
                productImage={productImage}
                productMatch={products}
                item={products[product]}
                product={product}
                optionName={optionName}
                body={body}
                setBody={setBody}
              />
            ))}
          </Grid>
        </>
      ) : (
        <Grid container spacing={1} justify="space-around">
          {Object.keys(productMatch).map((product) => (
            <ProductCards
              key={`${productMatch[product].productId}${Math.random()}`}
              productImage={productImage}
              productMatch={productMatch}
              item={productMatch[product]}
              product={product}
              optionName={optionName}
              body={body}
              setBody={setBody}
            />
          ))}
        </Grid>
      )}
    </Modal.Content>
  );
};

export default MapProducts;
