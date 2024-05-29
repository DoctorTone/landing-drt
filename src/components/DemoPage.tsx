import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";

const DemoPage = () => {
  return (
    <Box sx={{ mt: 10, backgroundColor: "grey" }}>
      <Container>
        <Typography textAlign="center" variant="h3">
          See some of our demos
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography>Unleash the power of 3D.</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              More engaging interaction, enhanced user experiences and increased
              sales for your website.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DemoPage;
