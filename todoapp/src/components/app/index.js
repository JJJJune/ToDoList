import React, { Component } from 'react'
import Header from '../app-header'
import TodoItem from '../app-todoitem'
import Footer from '../app-footer'
var id=0;

export default class todoapp extends Component {
    state = {
        completed: false,
        leftitems: 0,
        todolist:[]
    }
    handleAddTodo = (newtodo) => {
        this.setState ({
            todolist: [...this.state.todolist, {id:id++,title:newtodo, completed: false}]
        })
        this.handleLeftitems()
        console.log("增加一件事后的数组：", this.state.todolist)
    }
    handleDelete = (id) => {
        this.handleLeftitems()
        this.setState({
            todolist: this.state.todolist.filter((n) =>  n.id !== id)
        });
    }
    hanleCompleted = (id) => {
       const todolist = this.state.todolist
       const newtodolist = todolist.map( (n) => {
           if(n.id === id){
                n.completed = !n.completed
               return n
           }else 
            return n
       })
       this.setState({
           todolist: newtodolist
       })
       //console.log(newtodolist)
    }
    handleLeftitems = () => {
        const todolist = this.state.todolist
        let n=0;
        for(let todo of todolist){
            if(!todo.completed){
                n++;
            }
        }
        this.setState({
            leftitems: n
        })
    }
    render() {
        const {leftitems, todolist} = this.state
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
                <Footer leftitems={leftitems}/>
            </div>
        );
    }
}