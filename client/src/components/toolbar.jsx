import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

class ToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null
    };
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon vertical>
        <Menu.Item name='marker' active={activeItem === 'marker'} onClick={this.handleItemClick.bind(this)}>
          <Icon name='marker' />
        </Menu.Item>

        <Menu.Item name='align justify' active={activeItem === 'align justify'} onClick={this.handleItemClick.bind(this)}>
          <Icon name='align justify' />
        </Menu.Item>

        <Menu.Item name='edit' active={activeItem === 'edit'} onClick={this.handleItemClick.bind(this)}>
          <Icon name='edit' />
        </Menu.Item>
      </Menu>
    )
  }
}

export default ToolBar;
