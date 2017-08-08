import React from 'react'
import { num, func } from 'prop-types'

const ScoreCard = ({ score, update }) =>
  <div>
    <span>{score}</span>
    <button onClick={() => update(1)}>Add</button>
    <button onClick={() => update(-1)}>Substract</button>
  </div>

ScoreCard.propTypes = {
  score: num,
  update: func
}

export default ScoreCard
