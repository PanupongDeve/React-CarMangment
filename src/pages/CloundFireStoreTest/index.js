import React, { Component } from "react";
import model from "../../class/FirebaseCloundFireStore";
import FirebaseAuth from '../../class/FirebaseAuth';

export default class CloundFireStoreTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  async componentDidMount() {
    const user = await FirebaseAuth.signUpWithUsername('moota18099', 'ta0506012538')
    //console.log(user);
  }

  onChange = (event) => {
    const { name, value } = event.target;
  
    this.setState({ 
        [name]: value
    });
  }

   onSubmit = async (event) => {
    event.preventDefault();
    const data = {
        username: this.state.username
    }

    //await model.user.create(data);
    //await model.user.updateByDocumentId('vfWGWTxoOMGtP8ayM5Fp', data);
    await model.user.deleteByDocumentId('vfWGWTxoOMGtP8ayM5Fp');
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
          <input teype="text" name="username" value={this.state.username} onChange={this.onChange} />
          <button>send</button>
        </form>
      </div>
    );
  }
}
