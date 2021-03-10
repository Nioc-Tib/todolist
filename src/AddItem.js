import React, { Component } from 'react';

class AddItem extends Component {

  constructor() {
    super();
    this.state = {
      newItem:{}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
    this.setState({name: this.props.idName}, function() {
      this.props.addItem(this.state)    
    })
  }

  handleChange(value) {
    this.setState({newItem : {"name": value}})
  }
    

  render() {
    var divName = 'add' + this.props.idName;

    return (
      <div className='addItemDiv'>
        <h4>Add {this.props.idName}</h4>
        <form ref='form' onSubmit={this.handleSubmit}>
          <div id={divName} ref={divName}>
            <label>Name</label><br />
            <input type='text' ref='id' value={this.state.newItem.name} onChange={e => this.handleChange(e.target.value)} />
          </div>
          <br />
          <input type='submit' value='Submit' />
          <br />
        </form>
      </div>
    );
  }

}

export default AddItem;
