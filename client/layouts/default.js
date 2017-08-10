import React from 'react'
import { node } from 'prop-types'

import withStyle from '../containers/StyleContainer'

const DefaultLayout = ({ children }) =>
  <div>
    {children}
  </div>

DefaultLayout.propTypes = {
  children: node
}

export default withStyle(DefaultLayout)
