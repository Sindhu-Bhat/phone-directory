import React,  { Component }  from 'react';
import Header from "./Header";
import './App.css';
 
class App extends Component {

  render() {
    let subscribers=[
      {
        'id':1,
        'name':'Sindhu Bhat',
        'phone':'8888888888'
      },
      {
        'id':2,
        'name':'Shilpa Bhat',
        'phone':'9999999999'
      }
    ]

    return (
      <div className='component-container'>
      <Header />
      <div className='component-body-container'>
        <button className='button'>ADD</button>

        <div className='grid-container heading-container'>
          <span className='grid-item item-heading'>Name</span>
          <span className='grid-item item-heading'> Phone</span>     
        </div>

        {
          subscribers.map(sub=>{
            return <div className='grid-container' key={sub.id}>
            <span className='grid-item'>{sub.name}</span>
            <span className='grid-item'> {sub.phone}</span>     
          </div>
          })
        }
        
     </div>
    </div>
    )
  }
}

export default App;
