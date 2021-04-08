import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Layout from "../ui_components/Layout";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  paperClass: {
    width: () => {
      return window.screen.availWidth > "400" ? "500px" : "75%";
    },
    padding: "20px",
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Paper className={classes.paperClass}>
        <Container>
          <Typography>
            This is a{" "}
            <span style={{ color: "#F72585", fontWeight: "bold" }}>
              ToDo list
            </span>
            , with capabilities of storing the entered values locally when the
            save button is clicked and all values will be erased when reset
            button is pressed and if user goes to another page of the app
            without saving, only the last saved data will be available{" "}
            <span role="img" aria-label="star-struck fire rocket">
              🤩🔥🚀
            </span>
          </Typography>
          <Typography>
            <a href="https://reactjs.org/">
              <span style={{ color: "#4361EE", fontWeight: "bold" }}>
                React
              </span>
            </a>{" "}
            and{" "}
            <a href="https://material-ui.com/">
              <span style={{ color: "#4CC9F0", fontWeight: "bold" }}>
                Material UI
              </span>
            </a>{" "}
            has been used to create this application's user interface
            <span role="img" aria-label="laptop fire">
              💻🔥
            </span>
          </Typography>
          <Typography>
            <a href="https://redux.js.org/">
              <span style={{ color: "#7209B7", fontWeight: "bold" }}>
                Redux
              </span>
            </a>{" "}
            has been used used to manage the state of the application at various
            stages of its use
            <span role="img" aria-label="laptop fire">
              💻🔥
            </span>
          </Typography>
          <Typography>
            <a href="https://formik.org/">
              <span style={{ color: "#3A0CA3", fontWeight: "bold" }}>
                Formik
              </span>
            </a>{" "}
            and{" "}
            <a href="https://github.com/jquense/yup">
              {" "}
              <span style={{ color: "#06D6A0", fontWeight: "bold" }}>Yup</span>
            </a>{" "}
            has been used to manage with user input and validation of the input
            and{" "}
            <a href="https://www.npmjs.com/package/nanoid">
              <span style={{ color: "#FFAFCC", fontWeight: "bold" }}>
                Nano ID
              </span>
            </a>{" "}
            is being used to provide an unique id to every user input
            <span role="img" aria-label="laptop fire">
              💻🔥
            </span>
          </Typography>
          <Typography>
            <a href="https://fonts.google.com/specimen/Roboto#standard-styles">
              <span
                style={{
                  color: "#db8a74",
                  fontWeight: "normal",
                  fontFamily: "Roboto",
                }}
              >
                Roboto
              </span>
            </a>
            ,
            <a href="https://fonts.google.com/specimen/Varela+Round">
              <span
                style={{
                  color: "#829cbc",
                  fontWeight: "normal",
                  fontFamily: "Varela Round",
                }}
              >
                {" "}
                Varela Round
              </span>
            </a>{" "}
            and{" "}
            <a href="https://fonts.google.com/specimen/Lobster">
              <span
                style={{
                  color: "#ff8800",
                  fontWeight: "normal",
                  fontFamily: "Lobster",
                }}
              >
                Lobster
              </span>
            </a>{" "}
            fonts have been used from{" "}
            <a href="https://fonts.google.com/">
              <span style={{ color: "#e36414", fontWeight: "bold" }}>
                Google Fonts
              </span>
            </a>
            <span role="img" aria-label="scroll speech-balloon star-struck">
              📜💬🤩{" "}
            </span>
          </Typography>
          <Typography>
            an illustration called{" "}
            <a href="https://opendoodles.s3-us-west-1.amazonaws.com/clumsy.svg">
              <span>'clumsy'</span>
            </a>{" "}
            that is being shown on 404 error has been provided by{" "}
            <a href="https://www.opendoodles.com/">
              <span style={{ color: "#ffd500", fontWeight: "bold" }}>
                Open Doodles
              </span>
            </a>
            <span role="img" aria-label="painting">
            🖼️{" "}
            </span>
          </Typography>
          <Typography>
            favicon has been made by{" "}
            <a href="https://www.freepik.com">
              <span
                style={{
                  color: "#2a9134",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Freepik
              </span>
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/">
              <span
                style={{
                  color: "#137547",
                  fontWeight: "bold",
                }}
              >
                flaticon
              </span>
              <span role="img" aria-label="icon">
            💟{" "}
            </span>
            </a>
          </Typography>
          <Typography>
            <a href="https://coolors.co/"><span style={{
                  color: "#7678ed",
                  fontWeight: "bold",
                }}>Coolors</span></a> has been used as a reference for the app's color theme
                <span role="img" aria-label="color-palatte painter">
                🎨👨‍🎨️{" "}
            </span>
          </Typography>
        </Container>
      </Paper>
    </Layout>
  );
};

export default About;
