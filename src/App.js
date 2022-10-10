import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer'

const customers = [{
  "id":1,
  "image":"https://placeimg.com/64/64/1",
  'name': "Jiwoo",
  "birthday": "324234",
  "gender": "female",
  "job":"student"
}, 
{
  "id":2,
  "image":"https://placeimg.com/64/64/2",
  'name': "Jypour",
  "birthday": "23423",
  "gender": "male",
  "job":"teacher"
},
{
  "id":3,
  "image":"https://placeimg.com/64/64/2",
  'name': "Idontknow",
  "birthday": "999",
  "gender": "male",
  "job":"programmer"
}
]

class App extends Component {
  render() {
    return (
      <div>
          { customers.map(c => { return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.name} gender={c.gender} job={c.job} />); })}
      </div>

    );
  }
}

export default App;
