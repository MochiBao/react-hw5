import React from 'react'

const StudentItem = ({student}) => {
  return (
    <li>
        <p>Name: {student.name}</p>
        <p>Group: {student.group}</p>
        <input type='checkbox' checked={student.checkbox}/>
    </li>
  )
}

export default StudentItem