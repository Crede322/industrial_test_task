import { ReactNode } from "react";
import classes from "../FeatureList.module.css";

interface Props {
  children: ReactNode;
}

const FeatureRightList = ({ children }: Props) => {
  return (
    <div
      className={`${classes.feature__list_right} absolute left-[-440px] bottom-[50px] z-5 border-r-[3px] border-[#38caea]`}
    >
      {children}
    </div>
  );
};

export default FeatureRightList;
