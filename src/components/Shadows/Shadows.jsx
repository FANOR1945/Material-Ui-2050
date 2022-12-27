import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useStyles } from "./shadows.styles";
import Printing from "../Printing/Printing";
const Shadows = () => {
  const classes = useStyles();
  return (
    <Grid container display="flex" justifyContent="center">
      <Box className={classes.smallbox}>
        <Printing />
      </Box>
      <Box className={classes.smallbox}>
        <Printing />
      </Box>
      <Box className={classes.smallbox}>
        <Printing />
      </Box>
      <Box className={classes.smallbox}>
        <Printing />
      </Box>
      <Box className={classes.smallbox}>
        <Printing />
      </Box>
      <Box className={classes.smallbox}>
        <Printing />
      </Box>
      <Box className={classes.smallbox}>
        <Printing />
      </Box>
      <Box className={classes.smallbox}>
        <Printing />
      </Box>
      <Box className={classes.smallbox}>
        <Printing />
      </Box>
      <Box className={classes.smallbox}>
        <Printing />
      </Box>
      <Box className={classes.smallbox}>
        <Printing />
      </Box>
      <Box className={classes.smallbox}>
        <Printing />
      </Box>
      <Box className={classes.smallbox}>
        <Printing />
      </Box>
      <Box className={classes.smallbox}>
        <Printing />
      </Box>
      <Box className={classes.smallbox}>
        <Printing />
      </Box>
      <Box className={classes.smallbox}>
        <Printing />
      </Box>
      <Box className={classes.smallbox}>
        <Printing />
      </Box>
      <Box className={classes.smallbox}>
        <Printing />
      </Box>
    </Grid>
  );
};
export default Shadows;
