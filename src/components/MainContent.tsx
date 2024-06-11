import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { RenderCanvas } from "./RenderCanvas";

const MainContent = () => {
  return (
    <Container sx={{ mt: 23, mb: 5 }}>
      <Box component="div" sx={{ mt: 15 }}>
        <Typography variant="h3" align="center">
          Unleash the power of 3D.
        </Typography>
        <Typography variant="h6" align="center" sx={{ color: "grey" }}>
          More engaging interaction, enhanced user experiences and increased
          sales for your website.
        </Typography>
      </Box>
      <Box component="div">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <RenderCanvas />
          </Grid>
        </Grid>
      </Box>
      <Box component="div" sx={{ mt: 3 }}>
        <Typography textAlign="center">
          Adopting the latest 3D graphics technlogy on your website can elevate
          your products or applications to another level.
        </Typography>
      </Box>
      <Box component="div" sx={{ mt: 2 }}>
        <Typography textAlign="center">
          The application areas are <span className="orangeText">huge</span>.
          I've helped both large and small companies, start-ups and academia and
          I can help you too.
        </Typography>
      </Box>
    </Container>
  );
};

export default MainContent;
