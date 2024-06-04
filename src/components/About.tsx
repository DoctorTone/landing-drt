import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "50%",
  border: "2px black solid",
  marginBottom: "20px",
});

const About = () => {
  return (
    <Box sx={{ pt: 3, pb: 5, backgroundColor: "#aaaaaa", color: "black" }}>
      <Container sx={{ maxWidth: { sm: "sm", md: "md" } }}>
        <Typography sx={{ mb: 1 }} textAlign="center" variant="h3">
          <a id="about_page"></a>
          About
        </Typography>
        <Img src="./images/profile.jpg" />
        <Typography sx={{ mb: 2 }}>
          I'm Dr Tony Glover and I have more than 25 years experience in the
          software development industry. I am passionate about all things 3D -
          my mission is to create stunning interactive websites that showcase
          the power of 3D graphics.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          I formed DRT in 2017 to provide 3D data visualisation services to a
          number of companies. Since then I've had the pleasure of working with
          some amazing people on all sorts of wonderful projects.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          I've worked with clients in both small and large companies, as well as
          start-ups and academic institutions. I've worked on a diverse array of
          projects including 3D editors for the construction industry, data
          visualisation applications, virtual museum exhibits, driving
          simulators, mental health trials and even a brain surgery simulator!
        </Typography>
        <Typography sx={{ mb: 2 }}>
          I'm always open to new project ideas and collaborations and would love
          to hear from you if you have an exciting and challenging project that
          you need some help with. Feel free to get in touch.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
