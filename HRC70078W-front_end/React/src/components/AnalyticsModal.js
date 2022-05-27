import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import axios from "axios";

export default function AnalyticsModal(props) {
  const { Analyticsopen, setAnalyticsopen } = props;

  return (
    <div>
      <Modal
        open={Analyticsopen}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form >
          <Box className="modal" style={{backgroundColor:"#283a46"}}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Available soon👨‍🔧👨‍🔧
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{fontSize:'14px'}}>
              We are currently working on this feature
            </Typography>
            <br></br>
            <div className="modal-actions">
              <Button
                variant="outlined"
                onClick={() => {
                  setAnalyticsopen(false);
                }}
              >
                OK
              </Button>
            </div>
          </Box>
        </form>
      </Modal>
    </div>
  );
}
