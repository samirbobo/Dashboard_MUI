import { Box, Typography, useTheme } from "@mui/material";

export default function Header({ title, subTitle, isDashbord = false }) {
  const theme = useTheme();
  return (
    <Box mb={isDashbord ? 2 : 4}>
      <Typography
        variant="h5"
        sx={{ color: theme.palette.info.light, fontWeight: "bold" }}
      >
        {title}
      </Typography>
      <Typography variant="body1" color={theme.palette.text.primary}>
        {subTitle}
      </Typography>
    </Box>
  );
}
