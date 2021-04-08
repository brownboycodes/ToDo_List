import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStatus, deleteTodo } from "../../state_manager/allTodosSlice";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: "50px",
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    color:'#343A40',
    fontFamily:'Varela Round',
    
  },
  card: {
    margin: "10px",
  },
  typographyClass:{
    color:'#495057',
    fontFamily:'Varela Round',
    width:'100%'
    // fontSize:'3px'
  }
}));

const TodoItems = ({ todos }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [checkboxState, setCheckboxState] = useState({
    checked: todos.completed,
  });
  const handleChange = (event) => {
    
    dispatch(
      updateStatus({
        id: todos.id,
        todo: todos.todo,
        completed: !todos.completed,
      })
    );
    // setCheckboxState({
    //   ...checkboxState,
    //   [event.target.name]: event.target.checked,
    // });
    // console.log(todos.id);
  };
  const deleteItem = () => {
    dispatch(deleteTodo(todos.id));
  };
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={checkboxState.checked}
              onChange={handleChange}
              name="checked"
            />
          }
        />
        <Typography className={classes.typographyClass}>{todos.todo}</Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          size="small"
          onClick={deleteItem}
        >
          <DeleteIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default TodoItems;
