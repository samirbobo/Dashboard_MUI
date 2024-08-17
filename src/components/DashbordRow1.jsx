import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { useTheme } from "@emotion/react";
import { Stack } from "@mui/material";
import { pieData1, pieData2, pieData3, pieData4 } from "../data";

export default function DashbordRow1() {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      gap={1}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
    >
      <Card
        icon={
          <EmailIcon
            sx={{ fontSize: "25px", color: theme.palette.secondary.main }}
          />
        }
        title={"12,361"}
        subTitle={"Emails Sent"}
        data={pieData1}
        scheme={"nivo"}
        value={"14"}
      />
      <Card
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "25px", color: theme.palette.secondary.main }}
          />
        }
        title={"431,225"}
        subTitle={"Sales obtained"}
        data={pieData2}
        scheme={"category10"}
        value={"21"}
      />
      <Card
        icon={
          <PersonAddIcon
            sx={{ fontSize: "25px", color: theme.palette.secondary.main }}
          />
        }
        title={"32,441"}
        subTitle={"New Clients"}
        data={pieData3}
        scheme={"accent"}
        value={"5"}
      />
      <Card
        icon={
          <TrafficIcon
            sx={{ fontSize: "25px", color: theme.palette.secondary.main }}
          />
        }
        title={"1,325,134"}
        subTitle={"Traffic Received"}
        data={pieData4}
        scheme={"dark2"}
        value={"43"}
      />
    </Stack>
  );
}
