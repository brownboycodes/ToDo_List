import Button from "@material-ui/core/Button";

import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles, withStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { green } from "@material-ui/core/colors";

const SaveButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    color: "white",
  },
}));
const WhatToDos = () => {
  const classes = useStyles();
  let allTodos = useSelector((state) => state.allTodos.value);

  if (allTodos.length === 0) {
    return null;
  }

  const saveTodos = (event) => {
    event.preventDefault();

    localStorage.setItem("todos", JSON.stringify(allTodos));
  };
  const resetTodos = (event) => {
    event.preventDefault();

    localStorage.removeItem("todos");
    window.location.reload();
  };
  return (
    <div className="button-holder">
      <SaveButton
        variant="contained"
        endIcon={<SaveIcon />}
        className={classes.margin}
        onClick={saveTodos}
      >
        Save
      </SaveButton>

      <Button
        color="secondary"
        variant="contained"
        endIcon={<DeleteIcon />}
        onClick={resetTodos}
      >
        Reset
      </Button>
    </div>
  );
};

export default WhatToDos;
