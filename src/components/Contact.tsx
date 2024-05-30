import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{ pt: 3, pb: 5, backgroundColor: "#eeeeee", color: "black" }}
    >
      <Container maxWidth="md">
        <Typography sx={{ mb: 1 }} textAlign="center" variant="h3">
          <a id="contact_page"></a>
          Contact
        </Typography>
        <Grid container sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}>
            <Typography>Name</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              required
              id="name"
              label="name"
              placeholder="Enter name"
            />
          </Grid>
        </Grid>
        <Grid container sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}>
            <Typography>Email</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              required
              id="name"
              label="name"
              placeholder="Enter name"
            />
          </Grid>
        </Grid>
        <Grid container sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}>
            <Typography>Phone</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              required
              id="name"
              label="name"
              placeholder="Enter name"
            />
          </Grid>
        </Grid>
        <Grid container sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}>
            <Typography>Message</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              required
              id="name"
              label="name"
              placeholder="Enter name"
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <Button variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
