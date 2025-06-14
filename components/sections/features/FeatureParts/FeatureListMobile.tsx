import React from "react";
import { ReactNode } from "react";
import classes from "./FeatureList.module.css";

interface Props {
  children: ReactNode;
}

const FeatureListMobile = ({ children }: Props) => {
  return (
    <div
      className={`${classes.list__mobile} sivible min-[1150px]:hidden mt-[30px] w-[347px] flex flex-col gap-[10px] border-l-[4px] border-cyan`}
    >
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className="py-[12px] px-[10px] bg-[#202020] gradient-border1 border-l-0"
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default FeatureListMobile;
