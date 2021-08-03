import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo from "../images/logo.png";
import TextField from "@material-ui/core/TextField";
import style from "../style.css";
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

function SignUp() {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <div className={classes.head}>
          <img src={logo} className={classes.logo} />
          <Typography>
            <strong>Sign Up</strong>
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
        >
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
          />
        </form>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          classes={{
            root: classes.roots,
            label: classes.label,
          }}
        >
          Create Account
        </Button>
      </CardActions>
    </Card>
  );
}
export default SignUp;
