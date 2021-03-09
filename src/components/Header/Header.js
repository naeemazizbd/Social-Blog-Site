import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            <Link to="/">Social Blog Site</Link>
          </Typography>
          <Button color="inherit">
            <Link to="/">News Now</Link>
          </Button>
          <Button color="inherit">
            <Link to="/friends">Writers</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
