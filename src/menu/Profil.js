import React , { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import data_user from "../data/data_user";
import FileUpload from "../menu/FileUpload";
import Form from "../form/Form";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
const useStyles = makeStyles((theme) => ({
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
    backgroundColor: "#CAE4EA",
    marginTop: "5%",
    maxWidth: "50%",
    margin: "auto",
    paddingLeft: "15%",
    paddingRight: "15%",
  },
  roots: {
    backgroundColor: "#CAE4EA",
    marginLeft: "1%",
  },
  alamat: {
    display: "flex",
    flexDirection: "row",
  },
}));

function Profil() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="body">
      <div style={{ marginTop: 20 }}>
        <Grid container md={11} spacing={4} className={classes.grid}>
          <Grid item md={11}>
            {data_user.map((data_user) => (
              <CardContent className={classes.profile}>
                <Grid item md={5}>
                  <CardContent className={classes.foto}>
                    <CardMedia
                      style={{
                        height: "200px",
                        width: "35%",
                        margin: "auto",
                        border: "2px solid",
                      }}
                      component="img"
                      className={classes.media}
                      image={data_user.foto}
                    />
                     <FileUpload />
                    <Button 
                      classes={{
                        root: classes.root,
                        label: classes.label,
                      }}
                    >
                      Pilih Foto
                    </Button>
                  </CardContent>
                </Grid>

                <Grid item md={5}>
                  <typography
                    style={{
                      margin: "3%",
                    }}
                  >
                    <strong>Biodata Diri</strong>
                  </typography>
                  <TableCell>
                    <TableRow align="left" height="32px">
                      Nama
                    </TableRow>
                    <TableRow align="left" height="32px">
                      Email
                    </TableRow>
                    <TableRow align="left" height="32px">
                      No Telepon
                    </TableRow>
                    <TableRow align="left" height="32px">
                      Jenis Kelamin
                    </TableRow>
                    <TableRow align="left" height="32px">
                      Tanggal Lahir
                    </TableRow>
                  </TableCell>
                  <TableCell>
                    <TableRow align="left" height="32px">
                      {data_user.nama}
                    </TableRow>
                    <TableRow align="left" height="32px">
                      {data_user.email}
                    </TableRow>
                    <TableRow align="left" height="32px">
                      {data_user.no}
                    </TableRow>
                    <TableRow align="left" height="32px">
                      {data_user.jk}
                    </TableRow>
                    <TableRow align="left" height="32px">
                      {data_user.ttl}
                    </TableRow>
                  </TableCell>


                  <Button
                   onClick={togglePopup}
                    classes={{
                      root: classes.root,
                      label: classes.label,
                    }}
                  >
                    Ubah Profil
                  </Button>

                  {isOpen && <Form   handleClose={togglePopup}/>}
                </Grid>
              </CardContent>
            ))}
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: 20 }}>
        <Grid container md={11} spacing={4} className={classes.grid}>
          <Grid item md={11}>
            <typography>
              <strong>Alamat</strong>
            </typography>
          </Grid>
          <Button
            classes={{
              root: classes.roots,
              label: classes.label,
            }}
          >
            Tambah Alamat Baru
          </Button>
          <Grid item md={11} className={classes.alamat}>
            {data_user.map((data_user) => (
              <Grid item md={6} p={0}>
                <Typography>{data_user.rumah}</Typography>
                <Typography>{data_user.nama}</Typography>
                <Typography>{data_user.no}</Typography>
                <Typography>{data_user.alamat}</Typography>
              </Grid>
            ))}
            <Grid item md={6} p={0}>
              <Button color="secondary">UBAH</Button>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div style={{ marginTop: 20 }}>
        <Grid container md={11} spacing={4} className={classes.grid}>
          <Grid item md={11}>
            <typography>
              <strong>Daftar Transaksi</strong>
            </typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Profil;
