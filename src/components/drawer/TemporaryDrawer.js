import React, { useState, useEffect } from "react";
import Drawer from "@material-ui/core/Drawer";
import Tablist from "../List/Tablist.js";

const TemporaryDrawer = (param) => {
  const [state, setState] = useState(false);
  let flag = param.flag;
  //console.log('全局拿到的参数是:'+ flag)
  console.log("上游传递状态是:" + param, param);

  //const {open:b} = param;
  //const [state, setState] = useState(false);

  useEffect(() => {
    console.log("抽屉组件加载或者更新执行");
    return () => {
      console.log("抽屉组件卸载执行");
    };
  }, []);

  const stops = (open) => (event) => {
    console.log("抽屉组件按钮调用" + open);

    setState(open);
    flag = false;
  };

  return (
    <div>
      <Drawer anchor={"left"} open={flag} onClose={stops(false)}>
        <Tablist actions={stops(false)} />
      </Drawer>
    </div>
  );
};
export default TemporaryDrawer;
