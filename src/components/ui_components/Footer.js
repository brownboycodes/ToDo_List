import { makeStyles } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { useLocation } from "react-router";
const useStyles = makeStyles({
  materialLinks: { color: "#6F4B4B", cursor: "pointer" },
});
const Footer = () => {
  const classes = useStyles();
  let location = useLocation();
  let links, linkText;
  if (location.pathname === "/") {
    links = "/about";
    linkText = "About";
  } else {
    links = "/";
    linkText = "Home";
  }
  return (
    <footer>
      <p>
        [{" "}
        <Link href={links} className={classes.materialLinks}>
          {linkText}
        </Link>{" "}
        |{" "}
        <Link
          href="https://github.com/brownboycodes/ToDo_List"
          target="_blank"
          rel="noreferrer"
          className={classes.materialLinks}
        >
          Github
        </Link>{" "}
        ]
      </p>
      <p>
        Created by{" "}
        <a
          href="https://brownboycodes.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          Nabhodipta Garai | brownboycodes
        </a>
      </p>
    </footer>
  );
};

export default Footer;
