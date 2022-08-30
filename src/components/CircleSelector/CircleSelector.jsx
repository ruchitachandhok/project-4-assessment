import React from 'react';
import './CircleSelector.css';

const CircleSelector = ( { selectedCircle, setSelectedCircle}) => {
    
    return (

        <div className="CircleSelector">

            <button className = {selectedCircle === 1 ? "selected": ""} onClick = { () => setSelectedCircle(1)}> {selectedCircle === 1 ? "CIRCLE 1 SELECTED" : " SELECT CIRCLE 1" } </button>

            <button className = {selectedCircle === 2 ? "selected": ""} onClick = { () => setSelectedCircle(2)}> {selectedCircle === 1 ? "CIRCLE 2 SELECTED" : " SELECT CIRCLE 2" } </button>

            <button className = {selectedCircle === 3 ? "selected": ""} onClick = { () => setSelectedCircle(3)}> {selectedCircle === 1 ? "CIRCLE 3 SELECTED" : " SELECT CIRCLE 3" } </button>

            <button className = {selectedCircle === 4 ? "selected": ""} onClick = { () => setSelectedCircle(4)}> {selectedCircle === 1 ? "CIRCLE 4 SELECTED" : " SELECT CIRCLE 4" } </button>


        </div>
    )
}


export default CircleSelector;

