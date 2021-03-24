import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TemporaryDrawer from "../drawer/TemporaryDrawer.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = () => {
  // const [state, setState] = useState(false);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const click = () => {
    //console.log(ctref);
    setOpen(true);
  };

  {
    /*```
    (1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
    (2). React中的副作用操作:
            发ajax请求数据获取
            设置订阅 / 启动定时器
            手动更改真实DOM
    (3). 语法和说明: 
            useEffect(() => { 
              // 在此可以执行任何带副作用操作
              return () => { // 在组件卸载前执行
                // 在此做一些收尾工作, 比如清除定时器/取消订阅等
              }
            }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
        
    (4). 可以把 useEffect Hook 看做如下三个函数的组合
            componentDidMount()
            componentDidUpdate()
          componentWillUnmount() 
    ```*/
  }

   useEffect(() => {
    console.log("导航组件加载或者更新执行");
    return () => {
      console.log("导航组件卸载执行");
    };
  }, []);
  
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={click}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <TemporaryDrawer flag={open} />
    </div>
  );
};
export default ButtonAppBar;
