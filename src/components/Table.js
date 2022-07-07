import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";



export default function DataTable(props) {
  const { data, columns } = props;
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 50, 100]}
      />
    </div>
  );
}

DataTable.defaultProps = {
  data: [],
  columns: [],
};
