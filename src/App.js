import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';

// root component, container where todos are to be stored
class App extends Component {
  state = {
    todos: [
      //todo examples
      {id: 1, content: 'drink a coffee'},
      {id: 2, content: 'wash dishes'}
    ]
  }
  //delete task
 deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id // removes only clicked task
    })
    this.setState({
      todos: todos //if the same names it is shorter to write just todos
    })
  }

  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
