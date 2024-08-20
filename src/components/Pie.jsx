import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { pieData } from "../data";

export default function Pie({ isDashbord = false }) {
  const theme = useTheme();
  return (
    <Box height={isDashbord ? "200px" : "75vh"}>
      <ResponsivePie
        data={pieData}
        theme={{
          text: {
            fontSize: 11,
            fill: "#333333",
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.text.disabled, // الوان دا متحكم في لون المحور نفسه الي هو الخط المرسوم
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary, // الوان دا بتاع اسامي المحاور
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.text.disabled, // لون الشرطه الي قبل كل قيمه ع المحاور
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary, // الوان دا بتاع الارقام الي علي المحاور
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.text.disabled, // لون الخطوط الي في ظهر الرسمه
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary, // الوان دا بتاع اسامي القيم بتاعتي الي برسمها وموجوده اقصي الايمين تحت
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: theme.palette.background.paper, // لون الباك جروند الي بتظهر وفيها الكلام
              color: theme.palette.text.primary, // لما بقف علي الرسمه بالموس بيظهر مربع فيه كلام بيشرح الرسمه الوان دا بتاع الكلام دا بقا
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        margin={
          isDashbord
            ? { top: 10, right: 0, bottom: 10, left: 0 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        innerRadius={isDashbord ? 0.8 : 0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLabels={isDashbord ? false : true}
        enableArcLinkLabels={isDashbord ? false : true}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary} // لون الكلام الي طالع من كل جزء في الرسمه علي شكل سهم
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
          },
        ]}
        legends={
          isDashbord
            ? []
            : [
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: theme.palette.text.primary,
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: theme.palette.text.disabled,
                      },
                    },
                  ],
                },
              ]
        }
      />
    </Box>
  );
}
