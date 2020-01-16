import React from "react";

import Button from "./Button";
import Field from "./Field";

export default class UserCreate extends React.Component {
  render() {
    return (
      <div className='ui form'>
        <Field />
        <Button />
      </div>
    );
  }
}
