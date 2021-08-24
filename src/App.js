import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
// import Validator from './class/Validator';
import Validator from './hook/Validator';
import ValidatorHook from "./react-hook-form/HookForm"



export default class App extends Component {
  render() {

    const getText = (txt) => {
      console.log(txt)
    }

    return (
      <div style={{ marginTop: "50px", marginLeft: "50px" }}>
        <Validator getText = {getText}/>
        {/* <ValidatorHook /> */}
      </div>
    )
  }
}