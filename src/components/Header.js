import React from "react";
import logo from "../images/logo.png";
import logoMobile from "../logoMobile.svg";
import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import InputBase from "@material-ui/core/InputBase";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const styles = makeStyles((theme) => ({
  bar: {
    backgroundColor: "#CAE4EA",
    ["@media (max-width:780px)"]: {
      flexDirection: "column",
    },
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    ["@media (max-width:780px)"]: {
      flexDirection: "column",
    },
  },
  logo: {
    width: "5%",
    ["@media (max-width:780px)"]: {
      display: "none",
    },
  },
  logoMobile: {
    width: "100%",
    display: "none",
    ["@media (max-width:780px)"]: {
      display: "inline-block",
    },
  },
  search: {
    justifyContent: "flex-end",
    display: "flex",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: (theme.palette.common.white, 0.25),
    },
    ["@media (max-width:780px)"]: {
      flexDirection: "column",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    width: "100%",
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "90ch",
    },
  },
  label: {
    textTransform: "none",
  },
  menuItem: {
    cursor: "pointer",
    flexGrow: 1,
    "&:hover": {
      color: "#4f25c8",
    },
    ["@media (max-width:780px)"]: {
      paddingBottom: "1rem",
    },
  },
  link:{
    textDecoration:"none",
    color:"black"
  }
}));

function Header() {
  const classes = styles();
  return (
    <Toolbar position="sticky" className={classes.bar}>
      <img src={logo} className={classes.logo} />
      <img src={logoMobile} className={classes.logoMobile} />
      <div className={classes.search}>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
      </div>
      <div className={classes.headerOptions} >
        <Button
          classes={{
            root: classes.root,
            label: classes.label,
          }}
        >
          <Link to="/" className={classes.link} > Beranda</Link>
        </Button>

        <Button
          classes={{
            root: classes.root,
            label: classes.label,
          }}
        >
          <Link to="/login" className={classes.link} > Login</Link>
        </Button>

        <Button
          classes={{
            root: classes.root,
            label: classes.label,
          }}
        >
          <Link to="/register" className={classes.link} > Sign Up</Link>
        </Button>
        <Button>
          <ShoppingCartIcon />
        </Button>
      </div>
    </Toolbar>
  );
}

export default Header;
