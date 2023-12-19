/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onInputFind = event => {
    this.setState({searchInput: event.target.value})
  }

  updateInput = props => {
    this.setState({
      searchInput: props,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const findValue = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            className="img"
            alt="google logo"
          />
          <div className="search-card-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-button"
                alt="search icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="search-input"
                onChange={this.onInputFind}
                value={searchInput}
              />
              <ul className="suggest-card">
                {findValue.map(eachItem => (
                  <SuggestionItem
                    searchResult={eachItem}
                    key={eachItem.id}
                    updateInput={this.updateInput}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
