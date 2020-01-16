import React from "react";

import LanguageContext from "../context/LanguageContext";

export default class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div className='ui fuekd'>
        <LanguageContext.Consumer>
          {(value) => (value === "english" ? "Name" : "Nama")}
        </LanguageContext.Consumer>
        <input></input>
      </div>
    );
  }
}
