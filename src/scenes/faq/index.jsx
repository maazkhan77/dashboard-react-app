import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { ExpandMore } from "@mui/icons-material";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Question Page" />

      <Accordion sx={{ mt: 1 }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Who Am I
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>I am a Fullstack developer (MERN)</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mt: 2 }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            My Contact No.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Phone Number / Whatsapp -- 9511669712</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mt: 2 }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Email
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Maazkhan7769@gmail.com</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mt: 2 }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            My Current Status
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Working As a Front End Developer (React)</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mt: 2 }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Am I looking for Opportunity ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>yes feel free to contact me</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
