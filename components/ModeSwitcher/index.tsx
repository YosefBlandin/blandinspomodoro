import { FC } from "react";
import { modeSwitcher, modeSwitcher__ul, modeSwitcher__li, modeSwitcher__liActive } from "./styles.module.scss";

export const ModeSwitcher: FC<{mode: string}> = ({ mode = "pomodoro" }) => {
  return (
    <div className={modeSwitcher}>
      <ul className={modeSwitcher__ul}>
        <li className={`${modeSwitcher__li} ${modeSwitcher__liActive}`}>pomodoro</li>
        <li className={modeSwitcher__li}>short break</li>
        <li className={modeSwitcher__li}>long break</li>
      </ul>
    </div>
  )
}