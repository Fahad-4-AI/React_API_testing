import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './ApiTask.css'

function ApiTask(props) {
  console.log('props')
    
  return (
    <div className='container'>
    
    <h4>Name: {props.title}</h4>
    <h4>Price : {props.price}</h4>
    <img className='image_css' src={props.image} alt="" />
    
    
    </div>
  )
}

export default ApiTask

