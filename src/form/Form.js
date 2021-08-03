import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import style from "../style.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

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
    paddingTop: "3%",
    "& > *": {
      margin: theme.spacing(1),
      width: "47ch",
    },
  },
  b: {
   margin:"2%",

  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  
}));

const Form = props =>  {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="popup-box">
    <div className="box">
     
    <Card className={classes.root} variant="outlined">
    
      <CardContent>
        <div className={classes.head}><span className="close-icon" onClick={props.handleClose}>x</span>
          <Typography>
            <strong>Edit Data</strong>
          </Typography>
        </div>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Nama" variant="outlined" />
        </form>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </form>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="No Telepon"
            variant="outlined"
          />
        </form>
        <div className={classes.b}>
        <Typography>Jenis Kelamin</Typography>

        <FormControl component="fieldset" className={classes.b}>
          <RadioGroup
            row
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Perempuan"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Laki Laki"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Lainnya"
            />
          </RadioGroup>
        </FormControl>
        <Typography>Tanggal Lahir</Typography>
        <form className={classes.container} noValidate>
      <TextField
        id="date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form></div>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          classes={{
            root: classes.roots,
            label: classes.label,
          }}
        >
          Simpan
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
  );
}
export default Form;
