import './App.css';
import React, { Component } from 'react'
import Form from './components/form/Form';
import StudentList from './components/student/studentList/StudentList';

export default class App extends Component {
  state = {
    students: [{name: "",
    group: "",
    checkbox: false}],
  };

  addStudent = (newStudents) => {
    this.setState((prev) => ({
      students: [...prev.students, newStudents]
    }))
  };

  render() {
    console.log(this.state.students);
    return (
      <div>
        <Form addStudent={this.addStudent}/>
        <StudentList data={this.state.students}/>
      </div>
    )
  }
};

