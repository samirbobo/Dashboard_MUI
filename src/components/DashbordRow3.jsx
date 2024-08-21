import { Box, Paper, Typography, useTheme } from "@mui/material";
import Pie from "./Pie";
import Bar from "./Bar";
import Geo from "./Geo";

export default function DashbordRow3() {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", gap: 1.5, mt: 1.5, flexWrap: "wrap" }}>
      <Paper
        sx={{
          width: "28%",
          flexGrow: 1,
          minWidth: { xs: "180px", sm: "400px" },
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>

        <Pie isDashbord={true} />

        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper
        sx={{
          width: "33%",
          flexGrow: 1,
          minWidth: { xs: "180px", sm: "400px" },
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Sales Quantity
        </Typography>

        <Bar isDashbord={true} />
      </Paper>

      <Paper
        sx={{
          width: "33%",
          flexGrow: 1,
          minWidth: { xs: "180px", sm: "400px" },
        }}
      >
        <Geo isDashbord={true} />
      </Paper>
    </Box>
  );
}
