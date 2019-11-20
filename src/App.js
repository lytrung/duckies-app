import React, {Component} from 'react'
// import { Router, Link } from '@reach/router'
// import RouteAllTodos from './RouteAllTodos';
// import RouteAddTodo from './RouteAddTodo';

import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Slot from './Slot';
import './App.css'

class  App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      duckies:[
        {
          id:1,
        },
        {
          id:2,
        },
        {
          id:3,
        },
        {
          id:4,
        }
      ]
    }

  }

  render(){
    return (

      <DndProvider backend={HTML5Backend}>
       
      

        <div className="wrap">


          <div class="container">
            <h1>Pick your duckies</h1>
          </div>
          <div class="container main">
            
            <div class="names">

              {

                Array.from({ length: 13 }, (v, i) => i+1).map(n=>(

                  <Slot key={n} slotid={'holder'+n}/>
                ))
              }
              
            </div>
            <div class="duckies">

              {
                this.state.duckies.map(duckie=>(
                  <div key={duckie.id} class="duckie">
                    <div class="card">
                      <div class="front"></div>
                      <div class="back"></div>
                    </div>
                    <Slot slotid={'duckie'+duckie.id}/>
                  </div>

                ))
              }

            </div>

          </div>
          <div class="container">
            <h1>Thank you</h1>
          </div>

        </div>
      </DndProvider>
    );
  }
}

export default App;






