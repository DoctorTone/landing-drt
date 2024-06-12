import { Container, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MouseIcon from "@mui/icons-material/Mouse";
import HeadsetIcon from "@mui/icons-material/Headset";
import Diversity3Icon from "@mui/icons-material/Diversity3";

const Benefits = () => {
  return (
    <Box component="div" sx={{ backgroundColor: "black", pt: 5, pb: 5 }}>
      <Container>
        <Typography variant="h4" align="center" sx={{ color: "orange", mb: 5 }}>
          Why use 3D technology?
        </Typography>
        <Grid container spacing={10}>
          <Grid item xs={4}>
            <Paper
              sx={{
                padding: "7.5%",
                backgroundColor: "black",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              <Stack alignItems="center">
                <Paper
                  sx={{
                    width: "25%",
                    backgroundColor: "#222222",
                    textAlign: "center",
                    padding: "5% 0",
                    mb: 2,
                  }}
                >
                  <MouseIcon color="warning" fontSize="large" />
                </Paper>
              </Stack>
              <Typography
                variant="h6"
                align="center"
                color={"white"}
                sx={{ mb: 1 }}
              >
                Better engagement
              </Typography>
              <Typography sx={{ color: "grey" }}>
                Interacting with realistic looking objects gives customers a
                better
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              sx={{
                padding: "7.5%",
                backgroundColor: "black",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              <Stack alignItems="center">
                <Paper
                  sx={{
                    width: "25%",
                    backgroundColor: "#222222",
                    textAlign: "center",
                    padding: "5% 0",
                    mb: 2,
                  }}
                >
                  <HeadsetIcon color="warning" fontSize="large" />
                </Paper>
              </Stack>
              <Typography
                variant="h6"
                align="center"
                color={"white"}
                sx={{ mb: 1 }}
              >
                More immersive
              </Typography>
              <Typography sx={{ color: "grey" }}>
                You can take people on an experience, a virtual tour of another
                world. You can even use virtual reality to take this to the max.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              sx={{
                padding: "7.5%",
                backgroundColor: "black",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              <Stack alignItems="center">
                <Paper
                  sx={{
                    width: "25%",
                    backgroundColor: "#222222",
                    textAlign: "center",
                    padding: "5% 0",
                    mb: 2,
                  }}
                >
                  <Diversity3Icon color="warning" fontSize="large" />
                </Paper>
              </Stack>
              <Typography
                variant="h6"
                align="center"
                color={"white"}
                sx={{ mb: 1 }}
              >
                Increased visitors and sales
              </Typography>
              <Typography sx={{ color: "grey" }}>
                Customers can see objects as if they were real on your site, or
                look at instrucions and see them up close and real.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
