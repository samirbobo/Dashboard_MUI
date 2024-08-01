import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { invoiceColumns, invoiceRows } from "../data";

export default function Invoices() {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <DataGrid checkboxSelection rows={invoiceRows} columns={invoiceColumns} />
    </Box>
  );
}
