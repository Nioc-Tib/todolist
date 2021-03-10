import React, { Component } from 'react';

class AddList extends Component {
  constructor() {
    super()
    this.state = {
      newId : ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
    
    this.props.addList(this.state.newId)
  }

  handleChange(value) {
    this.setState({newId : value})  
  }

  render() {
    return (
      <div id="addListDiv">
        <form onSubmit={this.handleSubmit}>
          <div id='addList'>
            <label>What will be on your next list?&nbsp;
            <input type='text' ref='id' id='newID' value={this.state.newId} onChange={e => this.handleChange(e.target.value)}></input>
            </label>
          </div><br />
            <input type='submit' value='Create List' />
        </form>
      </div>
    );
  }
}

export default AddList;
