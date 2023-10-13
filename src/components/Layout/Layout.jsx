import css from "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <main className={css.layout}>{children}</main>
    </>
  );
};
export default Layout;
