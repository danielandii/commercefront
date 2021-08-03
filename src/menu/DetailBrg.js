import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Swal from  "sweetalert2"
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/Star";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import detail from "../data/detail";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "white",
    direction: "row",
    border: "1px solid blue",
    margin: "auto",
    marginBottom: theme.spacing(2),
    ["@media (max-width:600px)"]: {
      flexDirection: "column",
    },
  },
  logo: {
    margin: "auto",
    width: "50%",
    ["@media (max-width:780px)"]: {
      display: "none",
    },
  },
  profile: {
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
  },
  foto: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    textTransform: "none",
  },
  root: {
    backgroundColor: "#f4feff",
    marginTop: "5%",
    maxWidth: "50%",
    margin: "auto",
    paddingLeft: "15%",
    paddingRight: "15%",
  },
  roots: {
    backgroundColor: "#f4feff",
    marginLeft: "1%",
  },
  alamat: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    paddingTop: "0px",
    paddingBottom: "0px",
  },
  form: {
    "& > *": {
      marginBottom: theme.spacing(1),
      width: "40ch",
    },
  },
  jml:{
    display:"flex",
  }
}));

function Profil() {
  const classes = useStyles();
 
  return (
    <div style={{ marginTop: 20 }}>
      <Grid container md={10} spacing={4} className={classes.grid}>
        <Grid item md={10}>
          {detail.map((detail) => (
            <CardContent className={classes.profile}>
              <Grid item md={4}>
                <CardMedia
                  style={{
                    height: "300px",
                    width: "70%",
                  }}
                  component="img"
                  className={classes.media}
                  image={detail.image}
                />
              </Grid>
              <Grid item md={5}>
                <CardContent>
                  <Typography variant="h5" style={{ marginBottom: "3%" }}>
                    <strong>{detail.title}</strong>
                  </Typography>
                  <Typography style={{ marginBottom: "3%" }}>
                    <StarIcon style={{ color: yellow[500], fontSize: 20 }} />
                    {detail.star} | {detail.sell} terjual
                  </Typography>
                  <Typography variant="h5" style={{ marginBottom: "3%" }}>
                    <strong>{detail.prize}</strong>
                  </Typography>
                  <Typography style={{ marginBottom: "1%" }}>
                    <strong>Ukuran</strong>
                  </Typography>
                  <Button
                    style={{
                      border: "1px solid",
                      borderColor: "#CAE4EA",
                      marginRight: "3%",
                      marginBottom: "3%",
                    }}
                  >
                    <strong>{detail.size1}</strong>
                  </Button>
                  <Button
                    style={{
                      border: "1px solid",
                      borderColor: " #CAE4EA",
                      marginRight: "3%",
                      marginBottom: "3%",
                    }}
                  >
                    <strong>{detail.size2}</strong>
                  </Button>
                  <Button
                    style={{
                      border: "1px solid",
                      borderColor: "#CAE4EA",
                      marginBottom: "3%",
                    }}
                  >
                    <strong>{detail.size3}</strong>
                  </Button>
                  <Typography style={{ marginBottom: "1%" }}>
                    <strong>Jumlah</strong>
                  </Typography>
                  <div className={classes.jml}>
                  <Button size="small">-</Button>
                  <Typography>{detail.jml}</Typography>
                  <Button size="small">+</Button></div>
                  <Typography style={{ marginBottom: "1%" }}>
                    <strong>Catatan</strong>
                  </Typography>
                  <form className={classes.form} noValidate autoComplete="off">
                    <TextField id="outlined-basic" variant="outlined" />
                  </form>
                  <Button 
                    style={{
                      border: "1px solid",
                      borderColor: "#CAE4EA",
                      marginRight: "3%",
                      marginBottom: "3%",
                      backgroundColor: "#CAE4EA",
                      textTransform: "none",
                    }}
                  >
                    <strong>Masukkan Keranjang</strong>
                  </Button>
                  <Button
                    style={{
                      border: "1px solid",
                      borderColor: " #CAE4EA",
                      marginRight: "3%",
                      backgroundColor: "#CAE4EA",
                      marginBottom: "3%",
                      textTransform: "none",
                    }}
                  >
                    <strong>Beli Sekarang</strong>
                  </Button>
                </CardContent>
              </Grid>
            </CardContent>
          ))}
        </Grid>
      </Grid>
      <div style={{ marginTop: 20 }}>
        <Grid container md={10} spacing={4} className={classes.grid}>
          <Grid item md={10}>
            {detail.map((detail) => (
              <div>
                <typography>
                  <strong>Deskripsi Produk</strong>
                </typography>
                <TableCell>
                  <TableRow align="left" height="32px">
                    Kategori
                  </TableRow>
                  <TableRow align="left" height="32px">
                    Bahan
                  </TableRow>
                  <TableRow align="left" height="32px">
                    Kondisi
                  </TableRow>
                  <TableRow align="left" height="32px">
                    Berat
                  </TableRow>
                </TableCell>
                <TableCell>
                  <TableRow align="left" height="32px">
                    {detail.kategori}
                  </TableRow>
                  <TableRow align="left" height="32px">
                    {detail.bahan}
                  </TableRow>
                  <TableRow align="left" height="32px">
                    {detail.kondisi}
                  </TableRow>
                  <TableRow align="left" height="32px">
                    {detail.berat} gram
                  </TableRow>
                </TableCell>
              </div>
            ))}
            <Typography>
              <strong>HARAP BACA SEBELUM MEMESAN</strong>
              <p>Barang Ready, Sold Out=Hapus</p>
              <p>Semua foto diedit dan di foto langsung oleh owner</p>
              <p>Bahan halus dan tidak kasar</p>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Profil;
