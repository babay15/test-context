import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";

export default class App extends React.Component {
  state = {
    language: "english"
  };

  static contextType = LanguageContext;

  onLanguageChange = (language) => {
    console.log("Switch language to", language);
    this.setState({ language: language });
  };

  render() {
    return (
      <div className='ui container'>
        Select A Language
        <i
          className='flag us'
          onClick={() => this.onLanguageChange("english")}
        />
        <i
          className='flag id'
          onClick={() => this.onLanguageChange("bahasa")}
        />
        {this.state.language}
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}
