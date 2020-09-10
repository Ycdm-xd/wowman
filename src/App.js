import React, {Component, } from 'react';
import logo from './logo.svg';
import './App.css';


export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name? props.name: '**NULL_NAME**',
      bestPrice: props.bestPrice? props.bestPrice: 'None',
      currentPrice: 99999,

      editable: false,
    }
  }

  toggleEdit() {
    this.setState({
      editable: !this.state.editable,
    });

    // if (!this.state.editable);
  }

  render() {
    return (
      <div className="shell">
        <div className="nameCell">
          <textarea
            className='nameField'
            defaultValue={this.state.name}
            disabled={!this.state.editable}
            maxLength={33}
            onChange={(event) => alert(event.target.value)}
          />
        </div>

        <div className="priceCell">
          <textarea
            className='priceField'
            defaultValue={this.state.bestPrice}
            disabled={!this.state.editable}
          />
        </div>

        <div className="priceCell">
          <textarea
            className='priceField'
            defaultValue={this.state.currentPrice}
            disabled={!this.state.editable}
          />
        </div>

        <button
          title={this.state.editable? 'Save': 'Edit'}
          onClick={() => this.toggleEdit()}
        >
          {this.state.editable? 'Save': 'Edit'}
        </button>

        <button onClick={() => alert()}/>
      </div>
    );
  }
}
