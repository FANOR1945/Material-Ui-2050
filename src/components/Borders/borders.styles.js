import { makeStyles } from "@material-ui/core/styles";

export const defaultProps = {
    bgcolor: "background.paper",
    m: 0.5,
    style: { width: "100%", height: "100vh" },
    borderColor: "text.primary",
  };
export const useStyles = makeStyles({
    header: {
      margin: 4,
      textAlign: "center",
    },
    tittle: {
      fontFamily: "Muli",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 19,
      lineHeight: "24px",
      letterSpacing: "0.4px",
      color: "#252733",
    },
  });
  