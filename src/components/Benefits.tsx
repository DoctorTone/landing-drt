import { Container, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MouseIcon from "@mui/icons-material/Mouse";

const Benefits = () => {
  return (
    <Box component="div" sx={{ backgroundColor: "#333333", pt: 5, pb: 5 }}>
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
                More engagement
              </Typography>
              <Typography sx={{ color: "grey" }}>
                Customers can see objects as if they were real on your site, or
                look at instrucions and see them up close and real.
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
                  <MouseIcon color="warning" fontSize="large" />
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
                Customers can see objects as if they were real on your site, or
                look at instrucions and see them up close and real.
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
                  <MouseIcon color="warning" fontSize="large" />
                </Paper>
              </Stack>
              <Typography
                variant="h6"
                align="center"
                color={"white"}
                sx={{ mb: 1 }}
              >
                More sales
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
