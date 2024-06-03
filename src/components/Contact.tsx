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
      action="https://usebasin.com/f/da50ea670849"
      method="POST"
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
        <Box sx={{ margin: "0 5% 2% 5%" }}>
          <Typography>Name</Typography>
          <TextField
            fullWidth
            required
            id="name"
            label="Enter name"
            placeholder="Enter name"
            name="userName"
          />
        </Box>
        <Box sx={{ margin: "0 5% 2% 5%" }}>
          <Typography>Email</Typography>
          <TextField
            fullWidth
            required
            type="email"
            id="email"
            label="Enter email"
            placeholder="name@name.com"
            name="userEmail"
          />
        </Box>
        <Box sx={{ margin: "0 5% 2% 5%" }}>
          <Typography>Phone</Typography>
          <TextField
            fullWidth
            id="phone"
            label="Enter number"
            placeholder="12345 678910"
            type="tel"
            name="userPhone"
          />
        </Box>
        <Box sx={{ margin: "0 5% 2% 5%" }}>
          <Typography>What can I help you with?</Typography>
          <TextField
            fullWidth
            required
            id="message"
            label="Enter message"
            placeholder="Message"
            multiline
            maxRows={3}
            name="userText"
          />
        </Box>
        <Grid container sx={{ mb: 3 }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
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
          <Button
            variant="contained"
            component="a"
            href="https://calendly.com/tony-mdjh/30min"
            target="_blank"
          >
            Schedule a call
          </Button>
        </Typography>
      </Container>
    </Box>
  );
};

export default Contact;
