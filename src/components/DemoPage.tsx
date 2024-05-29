import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";

const DemoPage = () => {
  return (
    <Box sx={{ mt: 10, pb: 10, backgroundColor: "grey" }}>
      <Container>
        <Typography sx={{ paddingTop: 3 }} textAlign="center" variant="h3">
          Demos
        </Typography>
        <Grid container sx={{ mb: 5 }} spacing={30}>
          <Grid item xs={6}>
            <Paper sx={{ textAlign: "center" }} elevation={3}>
              <Typography>
                One of the most common uses of 3D is for product configurators.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3}>
              This demo shows how something can be configured
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={30}>
          <Grid item xs={6}>
            <Paper sx={{ textAlign: "center" }} elevation={3}>
              <Typography>
                One of the most common uses of 3D is for product configurators.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3}>
              This demo shows how something can be configured
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DemoPage;
