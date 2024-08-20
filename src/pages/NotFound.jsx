import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: "70vh"}}>
      <Box>

      <Typography align="center" color={theme.palette.error.main} variant="h1">
        404
      </Typography>
      <Typography align="center" fontSize={{xs: "30px", sm: "50px"}} color={theme.palette.error.main} variant="h2">
        Page Not Found...
      </Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
