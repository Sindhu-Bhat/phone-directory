import React,  { Component }  from 'react';
import Header from "./Header";
import './ShowSubscribers.css';
import {Link} from 'react-router-dom';

class ShowSubscribers extends Component {

  onDeleteClick(id){
    this.props.deleteSubscriberHandler(id)
  }

  render() {
    return (
      <div className='component-container'>
        <Header heading='Phone Directory' />
        <div className='component-body-container'>
          <Link to='/add'><button className='button add-button'>ADD</button></Link>
          <div className='grid-container heading-container'>
            <span className='grid-item item-heading'>Name</span>
            <span className='grid-item item-heading'> Phone</span>     
          </div>
          {
            this.props.subscribersList.map(sub=>{
              return <div className='grid-container' key={sub.id}>
              <span className='grid-item'>{sub.name}</span>
              <span className='grid-item'> {sub.phone}</span>  
              <button className='button delete-button' onClick={this.onDeleteClick.bind(this,sub.id)}>DELETE</button>   
            </div>
            })
          }
        </div>   
      </div>
    )
  }
}

export default ShowSubscribers;
