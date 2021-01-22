import React, { useState } from 'react';
import './counter.css';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from '../store/reducer';

const Counter=({count, onIncrement, onDecrement, onAsyncIncrement,}: any)=>{
    return(
        <>
        <div className="displayValue">Cakes Available: {count}</div>
        <div className="container">
            <button className="btn-vertical" onClick={onIncrement}>BAKE CAKE</button>
            <button className="btn-vertical" onClick={onDecrement}>BUY CAKE</button>
            <button className="btn-vertical" onClick={onAsyncIncrement}>ASYNC ACTION</button>
        </div>
        </>
    );
};
const action=(type: any)=>()=>({ type });

export const Counters=connect((state)=>({count: state}),{
    onIncrement: action(INCREMENT),
    onDecrement: action(DECREMENT),
    onAsyncIncrement: action(ASYNC_INCREMENT),
})(Counter);