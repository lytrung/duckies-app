import React, {Component} from 'react'
// import { Router, Link } from '@reach/router'
// import RouteAllTodos from './RouteAllTodos';
// import RouteAddTodo from './RouteAddTodo';

import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Name from './Name'
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
        },
        {
          id:5,
        },
        {
          id:6,
        },
        {
          id:7,
        },
        {
          id:8,
        },
        {
          id:9,
        },
        {
          id:10,
        },
        {
          id:11,
        },
        {
          id:12,
        }
      ],
      names:[
        {
          id:1,
          name:'Peter',
          location:''
        },
        {
          id:2,
          name:'Paul',
          location:''
        } 
        ,
        {
          id:3,
          name:'Mary',
          location:''
        } ,

        {
          id:4,
          name:'Joseph',
          location:''
        } 
      ],
      isOpen: false,
    }

  }

  updateName = ({id,location}) => {

    var names = [...this.state.names]

    for(var i=0;i<names.length;i++){
      var name = names[i]

      console.log(name.name)
      console.log(name.location=='')
      if((name.id == id) && (name.location=='')){ 
        name.location = location
      }

    }

  
    this.setState({names})

  }
  handleBarsClick = () => {
    this.setState({isOpen: !this.state.isOpen})
  }


  render(){
    return (

      <DndProvider backend={HTML5Backend}>
       
      

        <div className="wrap">


          <div class="container">
            <h1>Pick your duckies</h1>
          </div>
          <div class="container main">
            <i class={ this.state.isOpen ? 'fas fa-times': 'fas fa-bars'} onClick={this.handleBarsClick}></i>
            <div class={ this.state.isOpen ? 'names show': 'names'}>

              {
                this.state.names.map(name=>{

                  return (name.location == '')? <Name updateName={this.updateName} {...name} /> : null
                })
              }
            
              
            </div>
            <div class="duckies">

              {
                this.state.duckies.map(duckie=>(
                  <div key={duckie.id} class="duckie">
                    <div class="card">
                      <div class="front" style={{backgroundImage:'url(/duckies/duckie'+(duckie.id < 10 ? '0' : '') + duckie.id+'a.jpg)'}}></div>
                      <div class="back" style={{backgroundImage:'url(/duckies/duckie'+(duckie.id < 10 ? '0' : '') + duckie.id+'b.jpg)'}}></div>
                    </div>
                    <Slot list={this.state.names} slotid={'duckie'+duckie.id}/>
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






