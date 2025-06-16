import React from "react";
import { ReactNode } from "react";
import classes from "../FeatureList.module.css";

interface Props {
  children: ReactNode[];
}

const FeatureRightList = ({ children }: Props) => {
  return (
    <div
      className={`${classes.feature__list_right} hidden min-[1150px]:block min-[1150px]:absolute left-[-433px] bottom-[54px] border-r-[3px] border-[#38caea] z-[-1]`}
    >
      <div className="relative">
        <ul>
          {React.Children.map(children, (child, index) => (
            <li key={index}>{child}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeatureRightList;
