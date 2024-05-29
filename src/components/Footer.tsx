import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
return (
    <Box>
        <Container>
        <Typography>
        <CopyrightIcon /> DRT Software Ltd 2024
        </Typography>
        </Container>
    </Box>
)
}

export default Footer;