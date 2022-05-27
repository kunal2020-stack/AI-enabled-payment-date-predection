import React, { useState, useEffect } from "react";

import ToggleButton from "@mui/material/ToggleButton";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddModal from "./AddModal";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import AdvanceSearchModal from "./AdvanceSearchModal";
import "./DataTable.css";
import RefreshIcon from '@mui/icons-material/Refresh';
import axios from "axios";
import Stack from "@mui/material/Stack";
import AnalyticsModal from "./AnalyticsModal";

const columns = [
  { field: "sl_no", headerName: "SL_No", width: 100, type: "number",align:"center"},
  { field: "business_code", 
    headerName: "Business Code",
    width: 120},
  { field: "cust_number", 
    headerName: "Customer Number",
    width: 130},
  {
    field: "clear_date",
    headerName: "Clear Date",
  },
  {
    field: "buisness_year",
    headerName: "Buisness Year",
  },
  {
    field: "doc_id",
    headerName: "Document Id",
  },
  {
    field: "posting_date",
    headerName: "Posting Date",
  },
  {
    field: "document_create_date",
    headerName: "Document Created",
    width: 140,
  },
  {
    field: "due_in_date",
    headerName: "Due Date",
  },
  {
    field: "invoice_currency",
    headerName: "Invoice Currency",
    width: 120,
  },
  {
    field: "document_type",
    headerName: "Document Type",
    width: 115,
  },
  {
    field: "posting_id",
    headerName: "Posting Id",
  },
  {
    field: "total_open_amount",
    headerName: "Total Open Amount",
    width: 140,
  },
  {
    field: "baseline_create_date",
    headerName: "Baseline Create Date",
    width: 150,
  },
  {
    field: "cust_payment_terms",
    headerName: "Customer Payment Terms",
    width: 220,
    align: "center",
  },
  {
    field: "invoice_id",
    headerName: "Invoice Id",
    width: 110,
    align: "center",
    type: "number",
  },
];

export default function DataTable2() {
  //Datagrid
  const [page, setPage] = React.useState(10);
  const [search, setSearch] = React.useState("");
  const [tableData, setTableData] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);
  const [selectedRowData, setselectedRowData] = useState([]);
  //   Edit
  const [Editopen, setEditOpen] = useState(false);
  const [inv_curr, setinv_curr] = useState("");
  const [cust_pay_term, setcust_pay_term] = useState("");
  const [Editdata, setEditdata] = useState("");

  // Delete
  const [DeleteOpen, setDeleteOpen] = useState(false);
  const DeletehandleOpen = () => setDeleteOpen(true);

  // AdvanceSearch
  const [Advanceopen, setAdvanceOpen] = React.useState(false);

  const [Analyticsopen, setAnalyticsopen] = React.useState(false);
  

  //   Edit Functions
  const EdithandleOpen = () => setEditOpen(true);
  

  //   AdvanceSearchFuncs

  const AdvancehandleOpen = () => setAdvanceOpen(true);

  //Analytics Function

  const AnalyticshandleOpen = () => setAnalyticsopen(true);

  //Grid functions
  useEffect(() => {
    fetch("http://localhost:8080/HRC_BACK_END/fetch")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (search.match(/^[0-9]*$/g) && search.length === 8) {
      axios.get(`http://localhost:8080/HRC_BACK_END/SearchData?cust_number=${e.target.value}`)
      .then((d) => {
        setTableData(d["data"]);
      })
    }else{
      fetch("http://localhost:8080/HRC_BACK_END/fetch")
      .then((data) => data.json())
      .then((data) => setTableData(data));
    }
  };

  return (
    <>
      <div className="actions">
      <div className="toggle">
            <Button style={{ minWidth: "140px", color: "white", borderColor:"#2196f3"}}
             variant="outlined"
             onClick={AnalyticshandleOpen}
            >
              Predict
            </Button>
            <Button style={{ minWidth: "140px", color: "white", borderColor:"#2196f3"}}
              variant="outlined"
              onClick={AnalyticshandleOpen}
            >
              Analytics
            </Button>
            <AnalyticsModal
              Analyticsopen={Analyticsopen}
              setAnalyticsopen={setAnalyticsopen}
            />
            <Button style={{ minWidth: "140px", color: "white", borderColor:"#2196f3"}}
             variant="outlined"
              onClick={AdvancehandleOpen}
            >
              AdvanceSearch
            </Button>
            <AdvanceSearchModal
              Advanceopen={Advanceopen}
              setAdvanceOpen={setAdvanceOpen}
              setTableData={setTableData}
            />
            <ToggleButton value="refresh" style={{width: "50px"}}>
            <RefreshIcon onClick={() => window.location.reload(false)} />
          </ToggleButton>
          </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Search Customer Id"
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => handleSearch(e)}
          />
      </div>
      <div>
        <Stack spacing={2} direction="row">
            <AddModal />
            <Button style={{ minWidth: "150px", minHeight: "30x", color: "white", borderColor:"#2196f3"}} 
              variant="outlined"
              onClick={EdithandleOpen}
            >
              Edit
            </Button>

            <EditModal
              Editopen={Editopen}
              setEditOpen={setEditOpen}
              selectionModel={selectionModel}
              inv_curr={inv_curr}
              cust_pay_term={cust_pay_term}
              />
            <Button style={{ minWidth: "150px", minHeight: "30x", color: "white", borderColor:"#2196f3"}} 
              variant="outlined"
              onClick={DeletehandleOpen}>
              Delete
            </Button>

            <DeleteModal
              DeleteOpen={DeleteOpen}
              setDeleteOpen={setDeleteOpen}
              selectionModel={selectionModel}
            />
        </Stack>
        </div>
      </div>
          <div style={{ height: 615, minWidth: "100%" }}>
            <DataGrid
              rows={tableData}
              columns={columns}
              checkboxSelection
              onSelectionModelChange={(ids) => {
                const selectedIDs = new Set(ids);
                setSelectionModel(ids);
                const selectedRowData = tableData.filter((row) =>
                  selectedIDs.has(row.sl_no.toString())
                );
                console.log(selectedRowData);
                setselectedRowData(selectedRowData);
              }}
              pageSize={page}
              onPageSizeChange={(newPage) => setPage(newPage)}
              rowsPerPageOptions={[5, 10, 20, 50, 100]}
              pagination
              disableSelectionOnClick
              getRowId={(row) => row.sl_no}
            />
          </div>
    </>
  );
}
