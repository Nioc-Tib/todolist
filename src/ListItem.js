import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
      super(props);
      this.state = { color: 'black' };
    }

    handleClick() {
      this.setState({ color: this.state.color === 'black' ? 'gray' : 'black'})
    }

  render() {
    var item = this.props.item;
    var name = item.name;

    return (
	    <ul>
        <li onClick={this.handleClick.bind(this)} style={{color: this.state.color, textAlign: 'left', listStyle: 'square'}}>
          <strong>{name}</strong>
        </li>
      </ul>
    );

  }

}
export default ListItem;

