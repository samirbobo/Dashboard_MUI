import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import DashbordRow1 from "../components/DashbordRow1";

export default function Home() {
  return (
    <Box>
      <Box sx={{ mb: 1.3, textAlign: "right" }}>
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize", p: "6px 8px" }}
        >
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>

      <DashbordRow1 />
    </Box>
  );
}
