import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { invoiceColumns, invoiceRows } from "../data";
import Header from "../components/Header";

export default function Invoices() {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Header title={"INVOICES"} subTitle={"List of Invoice Balances"} />
      <DataGrid checkboxSelection rows={invoiceRows} columns={invoiceColumns} />
    </Box>
  );
}
