import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className='flexify'>
      <Header />
      <main className='flexify marge'>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
