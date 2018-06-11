import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import { StyledButton } from "../styled/StyledButton";

// JSS
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    fontSize: "1.8em"
  },
  input: {
    display: "none"
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              ReactJs Rocks!
            </Typography>
          </Toolbar>
        </AppBar>

        <StyledButton>Styled Components</StyledButton>
        <Button className={classes.button} variant="contained" color="primary">
          Hello World
        </Button>
        <Button c color="secondary" variant="contained">
          I Liove JS
        </Button>

        <Button variant="contained" color="primary" size="small">
          Small
        </Button>
        <Button variant="contained" color="primary" size="medium">
          Medium
        </Button>
        <Button variant="contained" color="primary" size="large">
          Large
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(App);
