import React, {useState} from 'react'
import { Menu } from 'semantic-ui-react'

const MainMenu = (props) => {
  const [activeItem, setActiveItem] = useState('home')

  const handleItemClick = (e, { name }) =>{
    setActiveItem(name)
    props.history.replace(name)
  }

  return(
    <Menu secondary>
        <Menu.Item
          content='Home'
          name=''
          active={activeItem === ''}
          onClick={handleItemClick}
        />
        <Menu.Item
          content='Page 1'
          name='page1'
          active={activeItem === 'page1'}
          onClick={handleItemClick}
        />
        <Menu.Item
          content='Page 2'
          name='page2'
          active={activeItem === 'page2'}
          onClick={handleItemClick}
        />
      </Menu>
  )
}

export default MainMenu
