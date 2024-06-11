import { Container, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Benefits = () => {
  return (
    <Box component="div" sx={{ backgroundColor: "#333333", pt: 5, pb: 5 }}>
      <Container>
        <Typography variant="h4" align="center" sx={{ color: "orange", mb: 5 }}>
          Why use 3D technology on your website?
        </Typography>
        <Grid container spacing={10}>
          <Grid item xs={4}>
            <Paper
              sx={{
                padding: "5%",
                backgroundColor: "black",
                borderRadius: "20px",
              }}
            >
              <VisibilityIcon color="secondary" fontSize="large" />
              <Typography variant="h6" align="center" color={"white"}>
                View products
              </Typography>
              <Typography sx={{ color: "grey" }}>
                Customers can see objects as if they were real on your site, or
                look at instrucions and see them up close and real.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper sx={{ padding: "5%", backgroundColor: "black" }}>
              <Typography variant="h6" align="center" sx={{ color: "grey" }}>
                View products
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper sx={{ padding: "5%", backgroundColor: "black" }}>
              <Typography variant="h6" align="center" sx={{ color: "grey" }}>
                View products
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
