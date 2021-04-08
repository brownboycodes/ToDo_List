import { useFormik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import Container from "@material-ui/core/Container";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addTodo } from "../../state_manager/allTodosSlice";

const useStyles = makeStyles({
  textField: {
    outline: "none",
    border: "none",
    borderRadius: "5px",
    height: "36px",
    // width: "540px",
    width: '94%',
    padding: "10px 16px",
    margin: "8px 0",
    fontFamily:'Varela Round',
    color:'#495057',
    fontSize:'15px'
  },
  button: {
    maxHeight: "56px",
    minHeight: "56px",
    height: "56px",
  },
  formClass: {
    backgroundColor: "#ffa840",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
    width:()=>window.screen.availWidth>'400'?'550px':'70vw'
  },
});

const AddTodo = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const validationSchema = Yup.object({
    todoItem: Yup.string()
      .max(
        200,
        "your todo task must be described within 200 characters or less"
      )
      .required("task cannot be empty!"),
  });
  const formik = useFormik({
    initialValues: { todoItem: "" },
    validationSchema,
    onSubmit: (values) => {
      const newToDoItem = {
        id: nanoid(),
        todo: values.todoItem,
        completed: false,
      };
      dispatch(addTodo(newToDoItem));

      formik.resetForm();
    },
  });
  return (
    <Container>
      <form onSubmit={formik.handleSubmit} className={classes.formClass}>
        {/* <label htmlFor="todoItem">Add a ToDo task</label> */}

        <input
          id="todoItem"
          type="text"
          {...formik.getFieldProps("todoItem")}
          placeholder="Add a ToDo task"
          autocomplete="off"
          className={classes.textField}
        />
        {/* <Container> */}
          <Button
            type="submit"
            color="primary"
            variant="contained"
            // size="medium"
            fullWidth
          >
            Add Todo
          </Button>
        {/* </Container> */}
        {formik.touched.todoItem && formik.errors.todoItem ? (
          <Typography color="error">{formik.errors.todoItem}</Typography>
        ) : null}
      </form>
    </Container>
  );
};

export default AddTodo;
