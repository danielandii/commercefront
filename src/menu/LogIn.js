import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo from "../images/logo.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextField from "@material-ui/core/TextField";
import style from "../style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxWidth: 450,
    margin: "auto",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(1),
  },
  roots: {
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "#CAE4EA",
  },
  label: {
    textTransform: "none",
  },
  logo: {
    width: "20%",
    ["@media (max-width:780px)"]: {
      display: "none",
    },
  },
  head: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    paddingTop: "5%",
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
}));

function LogIn() {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <div className={classes.head}>
          <img src={logo} className={classes.logo} />
          <Typography>
            <strong>Log In</strong>
          </Typography>
        </div>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          align="center"
        >
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </form>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          align="center"
        >
          <TextField id="outlined-basic" label="Password" variant="outlined" />
        </form>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          align="center"
        ></form>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          classes={{
            root: classes.roots,
            label: classes.label,
          }}
        >
          Log In
        </Button>
      </CardActions>

      <CardActions>
        <Button
          classes={{
            label: classes.label,
          }}
        >
          Forget Password
        </Button>
      </CardActions>
      <CardActions>
        <Button
          classes={{
            label: classes.label,
          }}
        >
          Create Account
        </Button>
      </CardActions>
    </Card>
  );
}
export default LogIn;
