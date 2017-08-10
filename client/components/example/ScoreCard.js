import React from 'react'
import Button from 'material-ui/Button'
import { number, func } from 'prop-types'

const ScoreCard = ({ score, update }) =>
  <div>
    <span>{score}</span>
    <Button onClick={() => update(1)}>Add</Button>
    <Button onClick={() => update(-1)}>Substract</Button>
  </div>

ScoreCard.propTypes = {
  score: number,
  update: func
}

export default ScoreCard
