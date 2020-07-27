import React, { Component } from 'react'
import InputComponent from './components/input-component/InputComponent'
import TodoContainer from './components/TodoContainer'


let dummyTodos = []


class App extends Component {
  constructor(props) {
    super(props)

    this.handleChange= this.handleChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)

    this.state = {
      inputValue:"",
      todos:[],
      todoLabel :`type here to procastinate :)`,
      empty:false,
    }
    
  }

  handleChange(e){
    this.setState({
      inputValue:e.target.value,
      todoLabel:`type here to procastinate :)`,
    })
  }
 
  
  addTodo(){
    
    if(this.state.inputValue === ""){
     this.setState((state)=>({
       todoLabel:`empty field cannot be submitted`,
       isEmpty:true
     }))
    }
    else{
      
      dummyTodos.push({id:Math.floor(Math.random() * 2000),content:this.state.inputValue})
      this.setState({
        labelStyle:{color:'white'},
        todos:dummyTodos,
        inputValue:""
      })
    }
  }
  

  deleteTodo(event){
    const todoId = event.target.parentNode.parentNode.parentNode.id;
    dummyTodos = this.state.todos.filter(todo=> todo.id !== Number(todoId))
    this.setState({
      todos:dummyTodos
    }, ()=>console.log(this.state.todos))
  }

  componentDidMount(){
    window.addEventListener('keypress', (e)=>{
      if(e.keyCode === 13){
        this.addTodo()
      }
    })
  }


  render() {
    return (
      <div className="container" style={{marginTop:"20vh"}}>
        <InputComponent handleChange={this.handleChange} stateContent={this.state.inputValue} handleAddClick={this.addTodo} todoLabel={this.state.todoLabel}/>
        <TodoContainer isEmpty={this.state.empty} todos={this.state.todos} handleDeleteClick={this.deleteTodo}/>
        </div>
    )
  }
}

export default App
