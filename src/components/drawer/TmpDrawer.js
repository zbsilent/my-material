import React, { Component } from "react";

import Drawer from "@material-ui/core/Drawer";
 
import Tablist from '../List/Tablist.js'
 

export default class TmpDrawer extends Component {

 constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }



  handlerTog =() => this.setState({open:!this.state.open?true:false})

  handlerTogs(v) {
    console.log(v);
    this.setState({
      open:v
    })
  }

  
  render() {
    return (
      <div>
        <Drawer anchor={"left"} open={this.state.open} >
          {/*<TmpList param = {this.handlerTogs.bind(this)}/>*/}
          <Tablist param = {this.handlerTogs.bind(this)}/>
        </Drawer>
      </div>
    );
  }
};