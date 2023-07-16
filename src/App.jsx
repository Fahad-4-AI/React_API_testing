import { useEffect, useState } from 'react'
import axios from 'axios';
//import Home from './Pages/Home/Home'
import './App.css'
import ApiTask from './Componenet/ApiTask/ApiTask'
import CardItem from './Componenet/CardItem/CardItem';

function App() {
  const [items, setItems] = useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((response)=> {
            setItems(response.data)
            console.log("response ", response.data);

        })

    }, []);

  return (
    <>
    {items.map((itemsEntery)=> {
      return(
       <ApiTask
      key={itemsEntery.id}
      title={itemsEntery.title}
      image={itemsEntery.image}
      price={itemsEntery.price}
      rating={itemsEntery.rating}
      />)
    })}
     </>
  )
}

export default App
