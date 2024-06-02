import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

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
        <Typography textAlign="center" sx={{ mb: 2 }}>
          I aim to respond to messages within one working day.
        </Typography>
        <Grid container sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={3} md={1}>
            <Typography>Name</Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              required
              id="name"
              label="Enter name"
              placeholder="Enter name"
            />
          </Grid>
        </Grid>
        <Grid container sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <Typography>Email</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              required
              type="email"
              id="email"
              label="Enter email"
              placeholder="name@name.com"
            />
          </Grid>
        </Grid>
        <Grid container sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <Typography>Phone</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              id="phone"
              label="Enter number"
              placeholder="12345 678910"
              type="tel"
            />
          </Grid>
        </Grid>
        <Grid container sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <Typography>Message</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              required
              id="message"
              label="Enter message"
              placeholder="Message"
              multiline
              maxRows={3}
            />
          </Grid>
        </Grid>
        <Grid container sx={{ mb: 3 }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <Button variant="contained">Submit</Button>
          </Grid>
        </Grid>
        <Typography sx={{ textAlign: "center" }} gutterBottom>
          Alternatively you can email me at{" "}
          <Link
            sx={{ textDecoration: "none" }}
            href="mailto:enquiries@drt-software.com"
          >
            enquiries@drt-software.com
          </Link>{" "}
          or call on 0115 8840440.
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          If you would prefer a face-to-face meeting then please feel free to{" "}
          <Button variant="contained">Schedule a call</Button>
        </Typography>
      </Container>
    </Box>
  );
};

export default Contact;
