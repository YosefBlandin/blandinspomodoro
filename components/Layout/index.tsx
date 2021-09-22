import { FC } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout: FC = ({ children }) => (
  <>
  <Header />
  {children}
  <Footer />
  </>
);