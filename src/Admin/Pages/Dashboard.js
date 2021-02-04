import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Link,
  Typography,
  Grid,
} from '@material-ui/core';

import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import LinkIcon from '@material-ui/icons/Link';

export default () => (
  <Grid container direction="column" spacing={2}>
    <Grid item md="auto">
      <Typography variant="h3">
        <EmojiPeopleIcon fontSize="large" />
        Welcome to the administration panel
      </Typography>
    </Grid>
    <Grid item md="auto">
      <Card>
        <CardHeader title="Website Link" />
        <CardContent>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <LinkIcon />
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://www.myprojectbride.com"
              variant="body1"
            >
              Main Page
            </Link>
          </div>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);
