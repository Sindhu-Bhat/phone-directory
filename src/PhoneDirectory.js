import React, { Component } from 'react'
import AddSubscriber from './AddSubscriber'
import ShowSubscribers from './ShowSubscribers'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class PhoneDirectory extends Component {

    constructor(){
        super()
        this.state={
            subscriberList:[
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
        }
    }

    addSubscriberHandler=(newSubscriber)=>{
        const subscriberList=this.state.subscriberList
        if(subscriberList.length>0)
        {
            newSubscriber.id=subscriberList[subscriberList.length-1].id+1
        }
        else{
            newSubscriber.id=1
        }
        subscriberList.push(newSubscriber)
        this.setState(subscriberList)
    }
    render() {
        return (
        <div className='main-container'>
            <Router>
                <Route exact path='/' render={(props)=><ShowSubscribers {...props} subscribersList={this.state.subscriberList} />} />

                <Route exact path='/add' 
                    render={({history},props)=>
                        <AddSubscriber {...props} 
                            history={history}
                            addSubscriberHandler={this.addSubscriberHandler} 
                        />} />
            </Router>
            {/* 
                <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/> 
                <ShowSubscribers subscribersList={this.state.subscriberList} />
           */}
        </div>
        )
    }
}

export default PhoneDirectory;