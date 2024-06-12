import { Container, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MouseIcon from "@mui/icons-material/Mouse";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Benefits = () => {
  return (
    <Box component="div" sx={{ backgroundColor: "black", pt: 5, pb: 5 }}>
      <Container>
        <Typography variant="h4" align="center" sx={{ color: "orange", mb: 5 }}>
          Why use 3D technology?
        </Typography>
        <Grid container spacing={0}>
          <Grid item xs={12} md={4}>
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
                the experience more memorable, and feel more involved.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
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
                  <VisibilityIcon color="warning" fontSize="large" />
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
          <Grid item xs={12}>
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
                  <EditIcon color="warning" fontSize="large" />
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
                There are more innovative ways to represent your products. This
                can greatly enhance the appearence compared to a traditional
                website.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12}>
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
                Increased visitors
              </Typography>
              <Typography sx={{ color: "grey" }}>
                The interactive and engaging nature of the site will encourage
                more users. Once there, they will be more tempted to stay.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
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
                  <AutoStoriesIcon color="warning" fontSize="large" />
                </Paper>
              </Stack>
              <Typography
                variant="h6"
                align="center"
                color={"white"}
                sx={{ mb: 1 }}
              >
                Compelling experiences
              </Typography>
              <Typography sx={{ color: "grey" }}>
                Visitors can explore interacive elements providing increased
                depth and context.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
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
                  <EmojiEventsIcon color="warning" fontSize="large" />
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
                3D interactive websites can provide a distinct advantage over a
                more conventional website.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
