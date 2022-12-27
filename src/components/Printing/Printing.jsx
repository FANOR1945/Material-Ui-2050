import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";
import { useStyles } from "./printing.styles";
const Printing = () => {
  const classes = useStyles();
  return (
    <Typography component="div">
      <Box textAlign="center">"SOMBRERERIA LEO"</Box>
      <Grid container display="flex">
        <Box className={classes.subtittle}>León Choque Cuiza</Box>
        <Box className={classes.subtittlethree}>Tel/Cel/WhatsApp: 72442112</Box>
      </Grid>
      <Grid container display="flex">
        <Box className={classes.subtittletwo}>Mercado Uyuni</Box>
        <Box className={classes.subtittlefour}>Sector Varios</Box>
      </Grid>
      <Box className={classes.subtittletwo}>
        Señor(a).........................................................................
      </Box>
      <Box className={classes.subtittletwo}>
        Modelo...........................................................................
      </Box>
      <Box className={classes.subtittletwo}>
        Color..............................................................................
      </Box>
      <Grid container display="flex">
        <Box className={classes.subtittletwo}>
          Bs....................................
        </Box>
        <Box className={classes.subtittletwo}>
          N°...........................................
        </Box>
      </Grid>
      <Box className={classes.messaje}>
        Pasados los 90 diás no recogido el sombrero, es su responsabilidad
      </Box>
    </Typography>
  );
};
export default Printing;
