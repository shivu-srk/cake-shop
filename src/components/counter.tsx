import React from 'react';
import { connect } from 'react-redux';

import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from '../store/reducer';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Cake from "../cake.png";

import * as Styles from "./styles";

const Counter=({count, onIncrement, onDecrement, onAsyncIncrement,}: any)=>{
    return(
        <Styles.Wrapper>
            <Styles.Row>
                <Styles.Image src={Cake} alt={"Cake"} />
                <Styles.Title>CUP YOUR HAPPINESS</Styles.Title>
            </Styles.Row>
            <Styles.SubTitle>Cakes Available: {count}</Styles.SubTitle>
            <ButtonGroup variant="contained" color="primary" style={{marginTop: "10px"}}>
                <Button onClick={onIncrement}>Bake Cake</Button>
                <Button onClick={onDecrement}>Buy Cake</Button>
            </ButtonGroup>
            <Button variant="contained" color="primary" onClick={onAsyncIncrement} style={{marginTop: "5px"}}>Confused?</Button>
        </Styles.Wrapper>
    );
};
const action=(type: any)=>()=>({ type });

export const Counters=connect((state)=>({count: state}),{
    onIncrement: action(INCREMENT),
    onDecrement: action(DECREMENT),
    onAsyncIncrement: action(ASYNC_INCREMENT),
})(Counter);