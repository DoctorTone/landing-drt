import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import ConstructionIcon from "@mui/icons-material/Construction";
import HexagonOutlinedIcon from "@mui/icons-material/HexagonOutlined";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

const Services = () => {
  return (
    <Box sx={{ pt: 3, pb: 5, backgroundColor: "#000", color: "white" }}>
      <Container sx={{ maxWidth: { sm: "sm", md: "md" } }}>
        <Typography
          sx={{ mb: 1, color: "#ed6c02" }}
          textAlign="center"
          variant="h3"
        >
          <a id="services_page"></a>
          Services
        </Typography>
        <Stack alignItems="center" sx={{ mb: 2 }}>
          <ConstructionIcon fontSize="large" color="warning" />
        </Stack>
        <Typography sx={{ mb: 2, display: "flex", alignContent: "center" }}>
          <HexagonOutlinedIcon color="warning" sx={{ mr: 1 }} />
          <a id="services_page"></a> I build highly interactive and engaging 3D
          graphical web applications. These aren't just ordinary websites, I
          utilise 3D graphics technolgy to create immersive experiences.
        </Typography>
        <Typography sx={{ mb: 2, display: "flex", alignContent: "center" }}>
          <HexagonOutlinedIcon color="warning" sx={{ mr: 1 }} />
          This could offer a huge benefit if you are in such sectors as -
          engineering, data visualisation, virtual reality, education,
          architecture, aeronautics, cosmology, games, music, art, virtual
          tours, advertising... 3D technology has the ability to revolutionise
          how visitors interact with your content.
        </Typography>
        <Typography sx={{ mb: 2, display: "flex", alignContent: "center" }}>
          <HexagonOutlinedIcon color="warning" sx={{ mr: 1 }} />I am
          customer-focused, I provide the level of service I would expect
          myself, and I communicate the process every step of the way.
        </Typography>
        <Typography sx={{ mb: 2, display: "flex", alignContent: "center" }}>
          <HexagonOutlinedIcon color="warning" sx={{ mr: 1 }} />I offer
          consultancy services to try and help people decide on the best
          technology choices available and the most applicable to thier needs.
        </Typography>
        <Typography sx={{ mb: 2, display: "flex", alignContent: "center" }}>
          <HexagonOutlinedIcon color="warning" sx={{ mr: 1 }} />
          If you would like to discuss a potential project or collaboration or
          would just like to have a conversation about graphics technology in
          general then please get in touch.
        </Typography>
        <Typography sx={{ mb: 2, textAlign: "center" }}>
          You can use the contact form to send a message or alternatively you
          can email me at{" "}
          <Link
            sx={{ textDecoration: "none" }}
            href="mailto:enquiries@drt-software.com"
          >
            enquiries@drt-software.com
          </Link>
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

export default Services;
