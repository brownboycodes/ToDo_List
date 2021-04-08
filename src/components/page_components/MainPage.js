import Layout from "../ui_components/Layout";
import AddTodo from "../utility_components/AddTodo";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import InCompleteTasks from "../utility_components/InCompleteTasks";
import CompletedTasks from "../utility_components/CompletedTasks";
import WhatToDos from "../utility_components/WhatToDos";
import { setTodos } from "../../state_manager/allTodosSlice";
import { useDispatch } from "react-redux";
const useStyles = makeStyles({
  spacing: {
    margin: "16px",
  },
  
});

const MainPage = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const savedTodos = localStorage.getItem("todos");
  console.log(savedTodos);
  if (savedTodos !== null) {
    dispatch(setTodos(JSON.parse(savedTodos)));
  }
  return (
    <Layout>
      
        <Container className={classes.spacing}>
          <AddTodo />
        </Container>

        <Container maxWidth="sm" className={classes.spacing}>
          <InCompleteTasks />
        </Container>
        <Container maxWidth="sm" className={classes.spacing}>
          <CompletedTasks />
        </Container>
        <Container>
          <WhatToDos />
        </Container>
      
    </Layout>
  );
};

export default MainPage;
