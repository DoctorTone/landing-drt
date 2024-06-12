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
                Enhanced engagement
              </Typography>
              <Typography sx={{ color: "grey" }}>
                Users can explore and interact with realistic 3D models, making
                the experience more memorable, whilst feeling more involved.
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
                Improved visualisation
              </Typography>
              <Typography sx={{ color: "grey" }}>
                Products can be represented realistically and viewed from any
                angle. Complex data can be simplified and shared for a better
                understanding.
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
                Innovative Branding
              </Typography>
              <Typography sx={{ color: "grey" }}>
                There are more innovative ways to represent your brand. This can
                enhance the appearence from a traditional website.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
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
                Increased visitors
              </Typography>
              <Typography sx={{ color: "grey" }}>
                Users can explore and interact with realistic 3D models, making
                the experience more memorable, whilst feeling more involved.
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
                Amazing storytelling
              </Typography>
              <Typography sx={{ color: "grey" }}>
                Products can be represented realistically and viewed from any
                angle. Complex data can be simplified and shared for a better
                understanding.
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
                Competitive edge
              </Typography>
              <Typography sx={{ color: "grey" }}>
                There are more innovative ways to represent your brand. This can
                enhance the appearence from a traditional website.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
