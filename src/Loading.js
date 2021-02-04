import React from 'react';

// Styling
import { css } from '@emotion/core';
// Spinner
import RingLoader from 'react-spinners/RingLoader';
// Skeleton
import Skeleton from 'react-loading-skeleton';

const Loader = () => {
  // css for loading page
  const override = css`
    display: block;
    margin: auto auto;
    border-color: red;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  return (
    <div className="loader" style={{ height: '100%' }}>
      <RingLoader css={override} size={100} color="#c9b2ba" />
      <Skeleton
        variant="rect"
        style={{ height: '100%', backgroundColor: '#ffffff' }}
      />
    </div>
  );
};

export default Loader;
