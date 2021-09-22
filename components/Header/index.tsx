import { FC } from "react";
import { header, header__title } from "./styles.module.scss";

export const Header: FC = () => (
  <header className={header}>
    <h2 className={header__title}>Blandin's Pomodoro</h2>
  </header>
)