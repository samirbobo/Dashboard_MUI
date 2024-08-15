// nivo دي مكتبه تم تحملها مخصصه في الرسومات واسمها
import { ResponsiveBar } from "@nivo/bar";
import { barData } from "../data";
import { Box, useTheme } from "@mui/material";

export default function Bar() {
  const theme = useTheme();

  return (
    // لازم تدي ارتفاع للرسمه بتاعتك عشان تظهر من غيرها الكود صح بس مش هتظهر
    <Box sx={{ height: "75vh" }}>
      <ResponsiveBar
        data={barData} // دي الداتا الي بيتم رسمها لو مش موجوده الرسمه مش هتظهر لان مفيش بيانات ترسمها وبتكون ارايه
        keys={["Spain", "France", "Germany"]} // دي المسميات الي جواه الاراي لازم يكونوا متطابقين
        indexBy="year" // اسم القيمه الي علي اساسه هيبدا يحط القيم
        // theme: THEMING متخصصه في كل ما يخص الاوان بتاعت الرسمه والكود دا كله واخده كوبي بست من الموقع بتاعه في خانه اسمها
        // هبدا اعدل علي القيمه الموجوده عشان اخلي الرسمه بتاعتي الوانها متجاوبه مع المود المظلم وي الفاتح
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
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "paired" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", "1.6"]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          // محور اكس
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Year", // اسم المحور
          legendPosition: "middle",
          legendOffset: 40, // بعد اسم محور اكس عن المحور نفسه
          truncateTickAt: 0,
        }}
        axisLeft={{
          // محور وايه
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Salary/Month", // اسم المحور وايه
          legendPosition: "middle",
          legendOffset: -50, // بعد الاسم عن المحور وايه
          truncateTickAt: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
      />
    </Box>
  );
}
