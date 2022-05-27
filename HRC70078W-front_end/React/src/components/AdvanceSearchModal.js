import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import axios from 'axios';


export default function AdvanceSearchModal(props) {
  const { Advanceopen, setAdvanceOpen, setTableData } = props;

  function handleFormSubmit(e) {
    e.preventDefault();
    submit(e);
  }
  const submit = (e) => {
    let cust_number = e.target["cust_number"].value;
    let buisness_year = e.target["buisness_year"].value;
    let doc_id = e.target["doc_id"].value;
    let invoice_id = e.target["invoice_id"].value;
    console.log(cust_number);
    console.log(buisness_year);
    console.log(doc_id);
    console.log(invoice_id);

    axios
      .get(
        "http://localhost:8080/HRC_BACK_END/AdvanceSearch?cust_number=" +
          cust_number +
          "&buisness_year=" +
          buisness_year +
          "&doc_id=" +
          doc_id +
          "&invoice_id=" +
          invoice_id
      )
      .then((d) => {
        console.log(d);
        setTableData(d["data"]);
        setAdvanceOpen(false);
      })
      .catch((err) => alert(err));
  };
  return (
    <div>
      <Dialog size='sm'
        open={Advanceopen}
      >
          <form onSubmit={handleFormSubmit}>
          <DialogTitle style={{ backgroundColor: "#283a46", color: "#FFFFFF" }}>Advance Search</DialogTitle>
          <DialogContent style={{ backgroundColor: "#283a46", color: "#FFFFFF" }}>
              <Grid container spacing={2} columns={24}>
                  <Grid item xs={16} md={12}>
            <TextField
              style={{ backgroundColor: "white", borderRadius: "5px", width: "100%" }}
              id="filled-textarea"
              label=" Document ID"
              variant="outlined"
              name="doc_id"
            />
            </Grid>
            <Grid item xs={16} md={12}>
            <TextField
              style={{ backgroundColor: "white", borderRadius: "5px", width: "100%" }}
              id="filled-textarea"
              label="Invoice ID"
              variant="outlined"
              name="invoice_id"
            />
            </Grid>
            <Grid item xs={16} md={12}>
            <TextField
              style={{ backgroundColor: "white", borderRadius: "5px", width: "100%" }}
              id="filled-textarea"
              label="Customer Number"
              variant="outlined"
              name="cust_number"
            />
            </Grid>
              <Grid item xs={16} md={12}>
            <TextField
              style={{ backgroundColor: "white", borderRadius: "5px", width: "100%" }}
              id="filled-textarea"
              label="Business Year"
              variant="outlined"
              name="buisness_year"
            />
            </Grid>
            </Grid>
            </DialogContent>
                <DialogActions style={{ backgroundColor: "#283a46", color: "#FFFFFF", paddingLeft: "15px" }}>
              <Button variant ="outlined" style={{ minWidth: "50%", color: "#FFFFFF", }} type="submit">
                Search
              </Button>
              <Button variant ="outlined"
              style={{ minWidth: "50%", color: "#FFFFFF", }}
                onClick={() => {
                  setAdvanceOpen(false);
                }}
              >
                Cancel
              </Button>
              </DialogActions>
          </form>
      </Dialog>
    </div>
  );
}
