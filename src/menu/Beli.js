import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/Star";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import detail from "../data/detail";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import data_user from "../data/data_user";
import Button from "@material-ui/core/Button";
import { ClassSharp } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import PaymentIcon from "@material-ui/icons/Payment";
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
    marginBottom: "1px",
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
  jml: {
    display: "flex",
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
    align: "center",
    marginLeft: "2.5%",
  },
  margin: {
    marginLeft: "2.5%",
  },
}));
function Beli() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div style={{ marginTop: 20 }}>
      <Grid container md={10} spacing={4} className={classes.grid}>
        <Grid item md={10}>
          <Typography>
            <strong>Barang yang di Beli</strong>
          </Typography>
          {detail.map((detail) => (
            <CardContent className={classes.alamat}>
              <Grid item md={2}>
                <CardMedia
                  style={{
                    height: "100px",
                    width: "70px",
                  }}
                  component="img"
                  className={classes.media}
                  image={detail.image}
                />
              </Grid>
              <Grid item md={7}>
                <CardContent>
                  <Typography>
                    <strong>{detail.title}</strong>
                  </Typography>
                  <Typography>
                    <strong>{detail.prize}</strong>
                  </Typography>
                  <div className={classes.jml}>
                    <form noValidate autoComplete="off">
                      <TextField
                        label="Catatan"
                        id="outlined-size-small"
                        variant="outlined"
                        size="small"
                      />
                    </form>
                    <Button size="small">-</Button>
                    <Typography>{detail.jml}</Typography>
                    <Button size="small">+</Button>
                  </div>
                </CardContent>
              </Grid>
            </CardContent>
          ))}
        </Grid>
      </Grid>

      <Grid container md={10} spacing={4} className={classes.grid}>
        <Grid item md={10}>
          <Typography>
            <strong>Pengiriman dan Pembayaran</strong>
          </Typography>
          <div className={classes.alamat}>
            <LocationOnIcon />
            <Typography>Alamat Pengiriman</Typography>
          </div>
          {data_user.map((data_user) => (
            <div className={classes.info}>
              <Typography>{data_user.nama}</Typography>
              <Typography>{data_user.no}</Typography>
              <Typography>{data_user.alamat}</Typography>
              <Button color="secondary">UBAH</Button>
            </div>
          ))}
          <div className={classes.alamat}>
            <LocalShippingIcon />
            <Typography>Opsi Pengiriman</Typography>
          </div>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-select-native"></InputLabel>
            <NativeSelect
              id="demo-customized-select-native"
              value={age}
              onChange={handleChange}
            >
              <option value={10}>Regular</option>
              <option value={20}>Premium</option>
              <option value={30}>Hemat</option>
            </NativeSelect>
          </FormControl>
          <div className={classes.alamat}>
            <PaymentIcon />
            <Typography>Pembayaran</Typography>
          </div>
          <div className={classes.margin}>
            <Typography>Transfer Bank/ATM</Typography>
          </div>
        </Grid>
      </Grid>

      <Grid container md={10} spacing={4} className={classes.grid}>
        <Grid item md={10}>
          <Typography>
            <strong>Ringkasan Belanja</strong>
          </Typography>
          <TableCell>
            <TableRow align="left" height="32px">
              Total Harga
            </TableRow>
            <TableRow align="left" height="32px">
              Total Ongkos Kirim
            </TableRow>
            <TableRow align="left" height="32px">
              <strong>Total Tagihan</strong>
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
          </TableCell>
          <Button
            style={{
              border: "1px solid",
              borderColor: "#CAE4EA",
              marginLeft: "2%",
              paddingLeft: "3%",
              paddingRight: "3%",
              marginBottom: "2%",
              backgroundColor: "#CAE4EA",
              textTransform: "none",
            }}
          >
            <strong>Buat Pesanan</strong>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
export default Beli;
