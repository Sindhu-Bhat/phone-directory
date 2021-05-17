import React,  { Component }  from 'react';
import Header from "./Header";
import './ShowSubscribers.css';

class ShowSubscribers extends Component {

  render() {
    // let subscribers=[
    //   {
    //     'id':1,
    //     'name':'Sindhu Bhat',
    //     'phone':'8888888888'
    //   },
    //   {
    //     'id':2,
    //     'name':'Shilpa Bhat',
    //     'phone':'9999999999'
    //   }
    // ]

    return (
      <div className='component-container'>
      
      <Header heading='Phone Directory' />
      <div className='component-body-container'>
        <button className='button add-button'>ADD</button>

        <div className='grid-container heading-container'>
          <span className='grid-item item-heading'>Name</span>
          <span className='grid-item item-heading'> Phone</span>     
        </div>

        {
          this.props.subscribersList.map(sub=>{
            return <div className='grid-container' key={sub.id}>
            <span className='grid-item'>{sub.name}</span>
            <span className='grid-item'> {sub.phone}</span>  
            <button className='button delete-button'>DELETE</button>   
          </div>
          })
        }
     </div>
     
       
    </div>
    )
  }
}

export default ShowSubscribers;