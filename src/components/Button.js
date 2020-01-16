import React from "react";

import LanguageContext from "../context/LanguageContext";

export default class Button extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div className='ui gray button'>
        <LanguageContext.Consumer>
          {(value) => (value === "english" ? "Submit" : "Pilih")}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
