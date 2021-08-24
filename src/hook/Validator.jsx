import React, { Component, useEffect, useState } from 'react'
import { TextField, Button } from "@material-ui/core"

export default function Validator(props) {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         password: "",
    //         email: "",
    //         number: ""
    //     }
    // }

    const [passWord, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")

    useEffect(() => {
        console.log("useEffect Called")
    }, [passWord])

    const handlePass = (txt) => {
        // this.setState({ password: txt })
        setPassword(txt)
    }

    const handleEmail = (txt) => {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(txt)) {
            // this.setState({
            //     email: txt
            // })
            setEmail(txt)
        }
        else {
            // this.setState({
            //     email: ""
            // })
            setEmail("")
        }
    }

    const handlePhoneNumber = (txt) => {
        if (/^0(9)\d{9}$/.test(txt)) {
            // this.setState({
            //     number: txt
            // })
            setNumber(txt)
        }
        else {
            // this.setState({
            //     number: ""
            // })
            setNumber("")
        }
    }

    const handleApi = () => {
        console.log("api called")
        var text = {
            passWord,
            email,
            number
        }
        props.getText(text)
    }

    const handleDisable = () => {
        // console.log("disable called")
        if (email.length > 1 && passWord.length > 7 && number.length === 11) {
            return false
        }
        else {
            return true
        }
    }
    return (
        <div>
            <form autoComplete="off">
                <TextField error={passWord.length < 8 ? true : false} id="outlined-basic"
                    onChange={(event) => {
                        handlePass(event.target.value)
                    }} label="password" variant="outlined" />
                {(passWord.length > 7) ? (null) : (
                    <p>!!حداقل طول رمز عبور 8 کاراکتر است</p>
                )}
                <p>{passWord}</p>
                <TextField error={email.length < 1 ? true : false} id="outlined-basic"
                    onChange={(event) => {
                        handleEmail(event.target.value)
                    }} label="email" variant="outlined" />
                {!(email.length < 1) ? (null) : (
                    <p>!!لطفا فرمت درست ایمیل را وارد کنید</p>
                )}
                <p>{email}</p>
                <TextField error={number.length < 11 ? true : false} id="outlined-basic"
                    onChange={(event) => {
                        handlePhoneNumber(event.target.value)
                    }} label="phonenumber" variant="outlined" />
                {!(number.length < 11) ? (null) : (
                    <p>!!لطفا شماره موبایل  خود را وارد کنید</p>
                )}
                <p>{number}</p>
            </form>
            <Button variant="contained" color="primary" disabled={handleDisable()} onClick={() => { handleApi() }}>
                Submit
            </Button>
        </div >
    )
}
