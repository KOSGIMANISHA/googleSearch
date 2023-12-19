/* eslint-disable no-unused-vars */
// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchResult, updateInput} = props
  const {suggestion} = searchResult

  const updateSearchInput = () => {
    updateInput(suggestion)
  }

  return (
    <li className="list-card">
      <p className="text-card">{suggestion}</p>
      <button className="btn" type="button" onClick={updateSearchInput}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-card"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
