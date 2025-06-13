import React from "react";
import { ReactNode } from "react";
import classes from "../FeatureList.module.css";

interface Props {
  children: ReactNode[];
}

const FeatureRightList = ({ children }: Props) => {
  return (
    <div
      className={`${classes.feature__list_right} absolute left-[-440px] bottom-[50px] z-5 border-r-[3px] border-[#38caea]`}
    >
      <ul>
        {React.Children.map(children, (child, index) => (
          <li key={index}>{child}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureRightList;
