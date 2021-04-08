import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import TodoItems from "./TodoItems";

const useStyles = makeStyles({
  typography: {
    color: "#6F4B4B",
    fontWeight: "bold",
    fontFamily:'Lobster'
  },
});

const CompletedTasks = () => {
  let allTodos = useSelector((state) => state.allTodos.value);
  allTodos = allTodos.filter((todos) => todos.completed === true);
  const classes = useStyles();

  if (allTodos.length === 0) {
    return null;
  }
  return (
    <div className="completed-tasks">
      <Typography variant="h5" className={classes.typography}>
        Completed Tasks:
      </Typography>
      {allTodos &&
        allTodos.map((todos) => <TodoItems key={todos.id} todos={todos} />)}
    </div>
  );
};

export default CompletedTasks;
