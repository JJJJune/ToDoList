import React, { Component } from 'react'
import Header from '../app-header'
import TodoItem from '../app-todoitem'
import Footer from '../app-footer'
var id=0
var TodoList = []
var n=0
export default class todoapp extends Component {
    state = {
        completed: false,
        todolist:[]
    }
    handleAddTodo = (newtodo) => {
        TodoList = [...this.state.todolist, {id:id++,title:newtodo, completed: false}]
        n++
        this.setState ({
            todolist: TodoList
        })
    }
    handleDelete = (id) => {
        TodoList = this.state.todolist.filter( todo => {
            if(todo.id !== id) {
                return todo
            }
            if(todo.id === id && todo.completed === false)
            {
                n--
            }
        })
        this.setState({
            todolist: TodoList
        });
    }
    hanleCompleted = (id) => {
       TodoList = this.state.todolist.map( todo => {
           if(todo.id === id){
                todo.completed = !todo.completed
                if(todo.completed === true){
                    n--
                }
                else n++
               return todo
           }else 
            return todo
       })
       this.setState({
           todolist: TodoList
       })
    }
    handleShowAll = () => {
        this.setState({
            todolist: TodoList
        })
    }
    handleShowActive = () => {
        this.setState({
            todolist: TodoList.filter( todo => !todo.completed)
        })
    }
    handleShowCompleted = () => {
        this.setState({
            todolist: TodoList.filter( todo => todo.completed)
        })
    }
    handleClearCompleted = () => {
        TodoList = TodoList.filter(todo =>  {
            if(todo.completed === false){
                return todo
            }
        })
        this.setState({
            todolist: TodoList
        });
    }
    render() {
        const {todolist} = this.state
        const todos = todolist.map(({id,title,completed}) => 
                (<TodoItem 
                    key={id}
                    id={id}
                    value={title}
                    completed={completed} 
                    Delete={this.handleDelete}
                    Completed={this.hanleCompleted}/>))
        return(
            <div>
                <h1>todos</h1>
                <Header onEnter={this.handleAddTodo}/>
                {todos}
                <Footer 
                    leftitems={n} 
                    ShowAll={this.handleShowAll}
                    ShowActive={this.handleShowActive}
                    ShowCompleted={this.handleShowCompleted}
                    ClearCompleted={this.handleClearCompleted}/>
            </div>
        );
    }
}