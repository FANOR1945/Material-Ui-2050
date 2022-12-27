import React from "react";
import { Box, Button } from "@material-ui/core";

import { useStyles, defaultProps } from "./borders.styles";

const Borders = () => {
  const classes = useStyles();
  return (
    <>
      <Box display="flex" justifyContent="left">
        <Box border={2} {...defaultProps}>
          <Box border={2} className={classes.header}>
            <Button className={classes.tittle}>Sombrereria Leo</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Borders;
