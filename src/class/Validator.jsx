import React, { Component } from 'react'
import { TextField , Button } from "@material-ui/core"

export default class Validator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: "",
            email: "",
            number: ""
        }
    }

    handlePass = (txt) => {
        this.setState({ password: txt })
    }

    handleEmail = (txt) => {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(txt)) {
            this.setState({
                email: txt
            })
        }
        else {
            this.setState({
                email: ""
            })
        }
    }

    handlePhoneNumber = (txt) => {
        if (/^0(9)\d{9}$/.test(txt)) {
            this.setState({
                number: txt
            })
        }
        else {
            this.setState({
                number: ""
            })
        }
    }

    handleApi = () => {
        console.log("api called")
    }
    
    handleDisable = () => {
        console.log("disable called")
        if(this.state.email.length > 1 && this.state.password.length > 7 && this.state.number.length === 11){
            return false
        }
        else{
            return true
        }
    }

    render() {
        return (
            <div>
                <form autoComplete="off">
                    <TextField error={this.state.password.length < 8 ? true : false} id="outlined-basic"
                        onChange={(event) => {
                            this.handlePass(event.target.value)
                        }} label="password" variant="outlined" />
                    {(this.state.password.length  > 7) ? (null) : (
                        <p>!!حداقل طول رمز عبور 8 کاراکتر است</p>
                    )}
                    <p>{this.state.password}</p>
                    <TextField error={this.state.email.length < 1 ? true : false} id="outlined-basic"
                        onChange={(event) => {
                            this.handleEmail(event.target.value)
                        }} label="email" variant="outlined" />
                    {!(this.state.email.length < 1) ? (null) : (
                        <p>!!لطفا فرمت درست ایمیل را وارد کنید</p>
                    )}
                    <p>{this.state.email}</p>
                    <TextField error={this.state.number.length < 11 ? true : false} id="outlined-basic"
                        onChange={(event) => {
                            this.handlePhoneNumber(event.target.value)
                        }} label="phonenumber" variant="outlined" />
                    {!(this.state.number.length < 11) ? (null) : (
                        <p>!!لطفا شماره موبایل  خود را وارد کنید</p>
                    )}
                    <p>{this.state.number}</p>
                </form>
                <Button variant="contained" color="primary" disabled={this.handleDisable()} onClick={()=>{this.handleApi()}}>
                    Submit
                </Button>
            </div>
        )
    }
}
