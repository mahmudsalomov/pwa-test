import * as React from 'react';
import Button from '@mui/material/Button';
import {message} from "antd";

export default function ButtonUsage() {
    return <div>
        <Button variant="contained" onClick={()=>{message.error("error")}}>Hello world</Button>
        <Button color={"inherit"} variant="contained">Hello world</Button>
        <Button color={"primary"} variant="contained">Hello world</Button>
        <Button color={"secondary"} variant="contained">Hello world</Button>
        <Button color={"success"} variant="contained">Hello world</Button>
        <Button color={"error"} variant="contained">Hello world</Button>
        <Button color={"info"} variant="contained">Hello world</Button>
        <Button color={"warning"} variant="contained">Hello world</Button>
    </div>;
}