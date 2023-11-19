import React from 'react'
import StudentItem from '../studentItem/StudentItem'

const StudentList = ({data}) => {
    console.log(data);

  return (
    <ul>
        {data.map((item, id) => {
            console.log(item);
        return (
          <StudentItem
            key={id}
            student={item}
          />
        );
      })}
    </ul>
  )
}

export default StudentList