import { ReactNode } from "react";
import classes from "../FeatureList.module.css";

interface Props {
  children: ReactNode;
}

const FeatureLeftList = ({ children }: Props) => {
  return (
    <div
      className={`${classes.feature__list_left} absolute right-[-440px] z-5 border-l-[3px] border-[#38caea]`}
    >
      {children}
    </div>
  );
};

export default FeatureLeftList;
