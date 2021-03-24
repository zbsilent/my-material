import React, { useState, useEffect } from "react";
import Drawer from "@material-ui/core/Drawer";
import Tablist from "../List/Tablist.js";

const TemporaryDrawer = (param) => {

 

  const stops = (open) => (event) => {
    console.log("抽屉组件按钮调用" + open);

    setState(open);
    flag = false;
  };

  return (
    <div>
      <Drawer anchor={"left"} open={param.flag} onClose={stops(false)}>
        <Tablist actions={stops(false)} />
      </Drawer>
    </div>
  );
};
export default TemporaryDrawer;
