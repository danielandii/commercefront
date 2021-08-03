import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "react-animated-slider";
import horizontalCss from "react-animated-slider/build/horizontal.css";
import content from "./data/content";
import data from "./data/data";
import menu from "./data/menu";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import style from "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { yellow } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
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

function Home(props) {
  const classes = styles();
  return (
    <div className="body">
     
      <div className={classes.slider}>
        <Slider classNames={horizontalCss} autoplay={1000}>
          {content.map((item, index) => (
            <div
              key={index}
              style={{
                background: `url('${item.image}') no-repeat center center`,
              }}
            >
              <div className="inner" align="center">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Button>{item.button}</Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div style={{ marginTop: 20 }}>
        <Grid container md={11} spacing={4} className={classes.grid}>
          <Grid item md={11}>
            <typography>Kategori</typography>
          </Grid>
          {menu.map((menu) => (
            <Grid item key={menu.title} md={3}>
              <Card className={classes.paper}>
                <CardActionArea>
                  <CardMedia
                    style={{
                      height: "200px",
                      margin: "auto",
                      width: "50%",
                      paddingTop: "5%",
                    }}
                    component="img"
                    className={classes.media}
                    image={menu.image}
                  />
                  <CardContent>
                    <Typography>{menu.title}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <div style={{ marginTop: 20 }}>
        <Grid container md={11} spacing={4} className={classes.grid}>
          <Grid item md={11}>
            <typography>Rekomendasi</typography>
          </Grid>
          {data.map((data) => (
            <Grid item key={data.title} md={2}>
              <Card className={classes.paper}>
                <CardActionArea>
                  <CardMedia
                    style={{
                      height: "150px",
                      margin: "auto",
                      width: "60%",
                      paddingTop: "5%",
                    }}
                    component="img"
                    image={data.image}
                  />
                  <CardContent align="left">
                    <Typography>{data.title}</Typography>
                    <Typography>
                      <strong>{data.prize}</strong>
                    </Typography>
                    <Typography>
                      <StarIcon style={{ color: yellow[500], fontSize: 20 }} />
                      {data.star} | {data.sell} terjual
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid p={4} item md={11} align="center">
          <Button
            borderColor="blue"
            style={{
              margin: "auto",
              marginBottom: "3%",
              border: "2px solid",
            }}
            classes={{
              root: classes.root,
              label: classes.label,
            }}
          >
            Muat lebih banyak
          </Button>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
