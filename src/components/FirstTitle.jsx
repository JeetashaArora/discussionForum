import React from 'react'

export default function FirstTitle(props) {
  return (
    <div  className='j first'>
    <span >Title : </span><textarea className="j" title="Heading"  cols="100" rows="2" placeholder={props.placeholderText}></textarea>
    </div>
  )
}
