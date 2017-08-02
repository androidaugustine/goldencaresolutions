import React, {Component} from 'react';

export default class Input extends Component {

  render(){
    return (



      <form method="get">
        First Name: <Input type="text" name="fname"></Input>
        Last Name:  <Input type="text" name="lname"></Input>

      </form>


    );
  }
}
