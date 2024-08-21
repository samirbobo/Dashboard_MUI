import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import DashbordRow1 from "../components/DashbordRow1";
import DashbordRow2 from "../components/DashbordRow2";
import DashbordRow3 from "../components/DashbordRow3";
import Header from "../components/Header";

export default function Home() {
  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Header
          title={"DASHBOARD"}
          subTitle={"Welcome to your dashboard"}
          isDashbord={true}
        />

        <Button
          variant="contained"
          sx={{ textTransform: "capitalize", p: "6px 8px", mb: 1 }}
        >
          <DownloadOutlined />
          Download Reports
        </Button>
      </Stack>

      <DashbordRow1 />
      <DashbordRow2 />
      <DashbordRow3 />
    </Box>
  );
}
