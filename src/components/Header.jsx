import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
import "./Header.css"
const HeaderExamplePlugIcon = (props) => (
  <Header as='h5' className='bg_header'>
    <div >{props.text}</div>
  </Header>
)
export default HeaderExamplePlugIcon