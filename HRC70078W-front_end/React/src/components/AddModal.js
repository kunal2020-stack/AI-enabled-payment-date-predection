import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import axios from "axios";

export default function AddModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function handleFormSubmit(e) {
    e.preventDefault();
    submit(e);
  }
  const submit = (e) => {
    let business_code = e.target["business_code"].value;
    let cust_number = e.target["cust_number"].value;
    let clear_date = e.target["clear_date"].value;
    let buisness_year = e.target["buisness_year"].value;
    let doc_id = e.target["doc_id"].value;
    let posting_date = e.target["posting_date"].value;
    let document_create_date = e.target["document_create_date"].value;
    // let document_create_date1 = e.target["document_create_date1"].value;
    let due_in_date = e.target["due_in_date"].value;
    let invoice_currency = e.target["invoice_currency"].value;
    let document_type = e.target["document_type"].value;
    let posting_id = e.target["posting_id"].value;
    let total_open_amount = e.target["total_open_amount"].value;
    let baseline_create_date = e.target["baseline_create_date"].value;
    let cust_payment_terms = e.target["cust_payment_terms"].value;
    let invoice_id = e.target["invoice_id"].value;

    let data = {
      business_code,
      cust_number,
      clear_date,
      buisness_year,
      doc_id,
      posting_date,
      document_create_date,
      // document_create_date1,
      due_in_date,
      invoice_currency,
      document_type,
      posting_id,
      total_open_amount,
      baseline_create_date,
      cust_payment_terms,
      invoice_id,
    };
    postInvoice(data);
  };

  const postInvoice = (data) => {
    axios
      .get(
        `http://localhost:8080/HRC_BACK_END/addData?business_code=${data.business_code}&cust_number=${data.cust_number}&clear_date=${data.clear_date}&buisness_year=${data.buisness_year}&doc_id=${data.doc_id}&posting_date=${data.posting_date}&document_create_date=${data.document_create_date}&due_in_date=${data.due_in_date}&invoice_currency=${data.invoice_currency}&document_type=${data.document_type}&posting_id=${data.posting_id}&total_open_amount=${data.total_open_amount}&baseline_create_date=${data.baseline_create_date}&cust_payment_terms=${data.cust_payment_terms}&invoice_id=${data.invoice_id}`
      )
      .then((d) => {

      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <Button
        style={{
          minWidth: "150px",
          minHeight: "30x",
          color: "white",
          borderColor: "#2196f3",
        }}
        variant="outlined"
        onClick={handleOpen}
      >
        Add
      </Button>
      <Dialog maxWidth="lg" open={open} onClose={handleClose}>
        <DialogTitle style={{ backgroundColor: "#283a46", color: "#FFFFFF" }}>
          Add
        </DialogTitle>
        <form onSubmit={handleFormSubmit}>
          <DialogContent
            style={{ backgroundColor: "#283a46", color: "#FFFFFF" }}
          >
            <Grid container rowSpacing={3} spacing={1}>
              <Grid container item spacing={3} columns={64}>
                <Grid item xs={16}>
                  <TextField
                    name="business_code"
                    label="Business Code"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    id="filled-textarea"
                    multiline
                    variant="filled"
                    size="small"
                  />
                </Grid>
                <Grid item xs={16}>
                  <TextField
                    name="cust_number"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    id="filled-textarea"
                    multiline
                    variant="filled"
                    size="small"
                    label="Customer Number"
                  />
                </Grid>
                <Grid item xs={16}>
                  <TextField
                    name="clear_date"
                    type={"date"}
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    id="filled-textarea"
                    multiline
                    variant="filled"
                    size="small"
                    label="Clear Date"
                  />
                </Grid>
                <Grid item xs={16}>
                  <TextField
                    name="buisness_year"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    id="filled-textarea"
                    multiline
                    variant="filled"
                    size="small"
                    label="Business Year"
                  />
                </Grid>
              </Grid>
              <Grid container item spacing={3} columns={64}>
                <Grid item xs={16}>
                  <TextField
                    name="doc_id"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    id="filled-textarea"
                    multiline
                    variant="filled"
                    size="small"
                    label="Document Id"
                  />
                </Grid>
                <Grid item xs={16}>
                  <TextField
                    name="posting_date"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    id="filled-textarea"
                    multiline
                    variant="filled"
                    size="small"
                    type={"date"}
                    label="Posting Date"
                  />
                </Grid>
                <Grid item xs={16}>
                  <TextField
                    name="document_create_date"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    id="filled-textarea"
                    multiline
                    variant="filled"
                    size="small"
                    label="Document Create Date"
                    type={"date"}
                  />
                </Grid>

                <Grid item xs={16}>
                  <TextField
                    name="due_in_date"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    id="filled-textarea"
                    multiline
                    variant="filled"
                    size="small"
                    label="Due in Date"
                    type={"date"}
                  />
                </Grid>
              </Grid>
              <Grid container item spacing={3} columns={64}>
                <Grid item xs={16}>
                  <TextField
                    name="invoice_currency"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    id="filled-textarea"
                    multiline
                    variant="filled"
                    size="small"
                    label="Invoice Currency"
                  />
                </Grid>
                <Grid item xs={16}>
                  <TextField
                    name="document_type"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    id="filled-textarea"
                    multiline
                    variant="filled"
                    size="small"
                    label="Documnet Type"
                  />
                </Grid>
                <Grid item xs={16}>
                  <TextField
                    name="posting_id"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    id="filled-textarea"
                    multiline
                    variant="filled"
                    size="small"
                    label="Posting Id"
                  />
                </Grid>
                <Grid item xs={16}>
                  <TextField
                    name="total_open_amount"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    id="filled-textarea"
                    multiline
                    variant="filled"
                    size="small"
                    label="Total Open Amount"
                  />
                </Grid>
              </Grid>
              <Grid container item spacing={3} columns={64}>
                <Grid item xs={16}>
                  <TextField
                    name="baseline_create_date"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    id="filled-textarea"
                    multiline
                    variant="filled"
                    label="Baseline Create Date"
                    size="small"
                    type={"date"}
                  />
                </Grid>
                <Grid item xs={16}>
                  <TextField
                    name="cust_payment_terms"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    id="filled-textarea"
                    multiline
                    variant="filled"
                    size="small"
                    label="Customer Payment Terms"
                  />
                </Grid>
                <Grid item xs={16}>
                  <TextField
                    name="invoice_id"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    id="filled-textarea"
                    multiline
                    variant="filled"
                    size="small"
                    label="Invoice ID"
                  />
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <div></div>
          <DialogActions
            style={{
              backgroundColor: "#283a46",
              color: "#FFFFFF",
              paddingLeft: "15px",
            }}
          >
            <Button
              style={{ minWidth: "50%", color: "#FFFFFF" }}
              type="submit"
              variant="outlined"
            >
              ADD
            </Button>
            <Button
              style={{ minWidth: "50%", color: "#FFFFFF" }}
              onClick={handleClose}
              variant="outlined"
            >
              CANCEL
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
