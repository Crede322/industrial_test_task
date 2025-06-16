import React from "react";
import { ReactNode } from "react";
import classes from "../FeatureList.module.css";

interface Props {
  children: ReactNode[];
}

const FeatureLeftList = ({ children }: Props) => {
  return (
    <div
      className={`${classes.feature__list_left} hidden min-[1150px]:block absolute right-[-438px] top-[57px] border-l-[3px] border-[#38caea] z-[-1]`}
    >
      <ul>
        {React.Children.map(children, (child, index) => (
          <li key={index}>{child}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureLeftList;
