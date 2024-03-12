import React from 'react'

type instructorProps={
    instructorNameLastName:{
        firstName:string,
        lastName:string,
    }
}

function Instructor(props:instructorProps) {
  return (
    <div>{props.instructorNameLastName.firstName} {props.instructorNameLastName.lastName}</div>
  )
}

export default Instructor