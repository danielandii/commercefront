import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
const styles = makeStyles((theme) => ({
  slider: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    margin: theme.spacing(2),
    justifyContent: "flex-end",
    textAlign: "center",
    paddingBottom: theme.spacing(2),
    backgroundColor: "white",
    ["@media (max-width:600px)"]: {
      flexDirection: "column",
    },
  },
  label: {
    textTransform: "none",
  },
  grid: {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "white",
    direction: "row",
    margin: "auto",
    marginBottom: theme.spacing(2),
    ["@media (max-width:600px)"]: {
      flexDirection: "column",
    },
  },
  button: {
    padding: "5%",
    "&:hover": {
      color: "#4f25c8",
    },
  },
}));
function Payment() {
  const classes = styles();
  return (
    <div style={{ marginTop: 20 }}>
      <Grid container md={10} spacing={4} className={classes.grid}>
        <Grid item md={10}>
          <Typography>
            <strong>Batas AKhir Pembayaran 24 Jam</strong>
          </Typography>
          <TableCell>
                  <TableRow align="left" height="32px" margin="3%">
                  <strong>Kode Pembayaran</strong>  
                  </TableRow>
                  <TableRow align="left" height="32px">
                    <strong>Total Pembayaran</strong>
                  </TableRow>
                </TableCell>
                <TableCell>
                  <TableRow align="left" height="32px">
                 p
                  </TableRow>
                  <TableRow align="left" height="32px">
                    
                  </TableRow>
                </TableCell>
        </Grid>
      </Grid>

      <Grid container md={10} spacing={4} className={classes.grid}>
        <Grid item md={10}>
          <Typography>
            <strong>Petunjuk Transfer</strong>
            <p>Pilih transfer {">"} Virtual Account</p>
            <p>Masukkan No Virtual Account (Kode Pembayaran) dan pilih SEND</p>
            <p>Pastikan informasi yang muncul adalah BENAR</p>
            <p>Foto bukti buku transfer dan upload pada  bagian "Upload Bukti Transfer" diatas</p>
          </Typography>

        </Grid>
      </Grid>
    </div>
  );
}
export default Payment;
