import React from "react";
import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Grid from "@material-ui/core/Grid";
import { blue } from "@material-ui/core/colors";
const styles = makeStyles((theme) => ({
  bar: {
    display: "flex",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#CAE4EA",
    ["@media (max-width:780px)"]: {
      flexDirection: "column",
    },
  },
  headerOptions: {
    flexGrow: 1,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
    ["@media (max-width:780px)"]: {
      flexDirection: "column",
    },
  },

  label: {
    textTransform: "none",
  },
  root: {
    display: "block",
  },
  menuItem: {
    justifyContent: "flex-end",
    cursor: "pointer",
    flexGrow: 1,
    "&:hover": {
      color: "#4f25c8",
    },
    ["@media (max-width:780px)"]: {
      paddingBottom: "1rem",
    },
  },
}));
const theme = {
  spacing: 8,
};

function Footer() {
  const classes = styles();
  return (
    <Toolbar position="sticky" className={classes.bar} m={2}>
      <Grid md={4}>
        <div className={classes.headerOptions}>
          <div className={classes.beranda}>
            <Button
              classes={{
                root: classes.root,
                label: classes.label,
              }}
            >
              Tentang Kami
            </Button>
          </div>
          <div className={classes.login}>
            <Button
              classes={{
                root: classes.root,
                label: classes.label,
              }}
            >
              Kebijakan Privasi
            </Button>
          </div>
        </div>
      </Grid>
      <Grid md={4}>
        <div className={classes.headerOptions}>
          <div className={classes.IkutiKami} align="center">
            <Typography>Ikuti Kami</Typography>
          </div>
          <div ClassName={classes.SosMed} align="center">
            <Button>
              <InstagramIcon />
            </Button>
            <Button>
              <FacebookIcon color="primary" />
            </Button>
            <Button>
              <TwitterIcon style={{ color: blue[500] }} />
            </Button>
          </div>
        </div>
      </Grid>
      <Grid md={4}>
        <div className={classes.headerOptions}>
          <Typography align="right">
            <p>Jalan Margoyoso No 15 A</p>
            <p>Tembalang, Semarang</p>
            <p> Kode Pos 14022</p>
          </Typography>
        </div>
      </Grid>
    </Toolbar>
  );
}

export default Footer;
