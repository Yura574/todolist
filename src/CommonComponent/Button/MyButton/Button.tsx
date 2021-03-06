import React from "react";
import classes from "./Button.module.css";
import {FilterValueType} from "../../../APP/store/todolist-reducer";



type ButtonType ={
    filter?: FilterValueType
    nameButton: string
    callback: ()=> void
    classes: string
    img?:string
    deactivate?:()=> void
}

export const Button = React.memo ((props: ButtonType) =>{
    console.log('render Button')
    const setFilter = () =>{
        if(props.deactivate){
            props.callback()
            // props.deactivate()
        }   else {
            props.callback()
        }
    }
    // const filterClass = props.filter === props.nameButton ? `${classes.isDone} ${props.classes}` : ''
    return(
        <button
            className={props.filter === props.nameButton ? `${props.classes} ${classes.isDone} ` : props.classes}
            onClick={setFilter}>{props.img ? <img src={props.img}  alt={''}/> : props.nameButton}
        </button>
    )
})