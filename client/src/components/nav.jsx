import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null
    };
    this.handleItemClick.bind(this);
  }
  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }
  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item>
          <Icon name='world' />
        </Menu.Item>

        <Menu.Item
          name='things'
          active={activeItem === 'things'}
          onClick={this.handleItemClick.bind(this)}
        >
            Things
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            name='settings'
            active={activeItem === 'settings'}
            onClick={this.handleItemClick}
          >
            Settings
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar;
