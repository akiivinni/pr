import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export const newcontext = createContext();

const CardComponents = () => {
  const {message, setMessage} = useState("goodday");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const messageChange = () => {
    setMessage("It's not a good day ");
  };

  return (
    <>
   
    <newcontext.Provider 

    value = {{

        message :message,
        greetings:"goodday",
        messageChange:messageChange

    }}
    
    >

    
    <div className="card-container">
      {data.map(item => (
        <Card key={item.id} style={{ width: '18rem' }} className="custom-card">
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            {/* <Card.Text>{item.description}</Card.Text> */}
            <Card.Img variant="top" src={item.image} />
          </Card.Body>
        </Card>
      ))}
    </div>
    </newcontext.Provider>
    </>
  );
};

export default CardComponents;
