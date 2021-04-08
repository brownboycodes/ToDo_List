import Layout from "../ui_components/Layout";
const classes = {
  illustration: {
    maxWidth: "100%",
    height: "500px",
  },
  illustrationContainer: {
    // height: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:'center',
    color: "#6F4B4B",
  },
};
const NotFound = () => {
  return (
    <Layout>
      <div style={classes.illustrationContainer}>
        <img
          src="/images/clumsy.svg"
          alt="clumsy person"
          style={classes.illustration}
        />
        <p>page doesn't exist</p>
      </div>
    </Layout>
  );
};

export default NotFound;
