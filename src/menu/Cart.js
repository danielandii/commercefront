import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import detail from "../data/detail";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import TextField from "@material-ui/core/TextField";
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
  jml: {
    display: "flex",
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
  alamat: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "1px",
  },
  a: {
    flexDirection: "flex-end",
    border:"2px solid"
  },
}));
function Cart() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const classes = styles();
  return (
    <div style={{ marginTop: 20 }}>
      <Grid container md={10} spacing={4} className={classes.grid}>
        <Grid item md={10}>
          <Typography>
            <strong>Keranjang</strong>
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Pilih semua"
          />
          <div className={classes.jml}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                  color="primary"
                />
              }
            />
            {detail.map((detail) => (
              <CardContent className={classes.alamat}>
                <Grid item md={2}>
                  <CardMedia
                    style={{
                      height: "90px",
                      width: "60px",
                    }}
                    component="img"
                    className={classes.media}
                    image={detail.image}
                  />
                </Grid>
                <Grid item md={9}>
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
                      <Button>
                        <DeleteOutlineIcon />
                      </Button>
                    </div>
                  </CardContent>
                </Grid>

                <Grid item md={5} className={classes.a}>
                  
                    <CardContent >
                      <Typography>
                        <strong>Ringkasan Belanja</strong>
                      </Typography>
                      <Typography>Total Harga</Typography>
                    </CardContent>
                 
                </Grid>
              </CardContent>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default Cart;
