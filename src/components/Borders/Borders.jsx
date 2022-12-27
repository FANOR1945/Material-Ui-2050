import React from "react";
import { Box, Button } from "@material-ui/core";
import { useStyles, defaultProps } from "./borders.styles";
import Shadows from "../Shadows/Shadows";
const Borders = () => {
  const classes = useStyles();
  return (
    <>
      <Box display="flex" justifyContent="left">
        <Box {...defaultProps}>
          <Box border={2} className={classes.header}>
            <Button className={classes.tittle}>Sombrereria Leo</Button>
          </Box>
          <Shadows />
        </Box>
      </Box>
    </>
  );
};
export default Borders;
