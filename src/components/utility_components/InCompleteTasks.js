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

const InCompleteTasks = () => {
  let allTodos = useSelector((state) => state.allTodos.value);
  // console.log(allTodos);
  allTodos = allTodos.filter((todos) => todos.completed === false);
  const classes = useStyles();
  if (allTodos.length === 0) {
    return null;
  }
  return (
    <div className="incomplete-tasks">
      <Typography variant="h5" className={classes.typography}>
        Incomplete Tasks:
      </Typography>
      {allTodos &&
        allTodos.map((todos) => <TodoItems key={todos.id} todos={todos} />)}
    </div>
  );
};

export default InCompleteTasks;
