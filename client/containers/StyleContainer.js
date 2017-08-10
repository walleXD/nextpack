import React, { Component } from 'react'
import { JssProvider } from 'react-jss'
import { withStyles, createStyleSheet, MuiThemeProvider } from 'material-ui/styles'
import { getContext } from '../lib/initStyleContext'

// Apply some reset
const styleSheet = createStyleSheet(theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale' // Antialiasing.
    },
    body: {
      margin: 0
    }
  }
}))

let AppWrapper = props => props.children

AppWrapper = withStyles(styleSheet)(AppWrapper)

function StyleContainer (BaseComponent) {
  class StyleContainer extends Component {
    static getInitialProps (ctx) {
      if (BaseComponent.getInitialProps) {
        return BaseComponent.getInitialProps(ctx)
      }

      return {}
    }

    componentDidMount () {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render () {
      const context = getContext()

      return (
        <JssProvider registry={context.sheetsRegistry} jss={context.jss}>
          <MuiThemeProvider theme={context.theme} sheetsManager={context.sheetsManager}>
            <AppWrapper>
              <BaseComponent {...this.props} />
            </AppWrapper>
          </MuiThemeProvider>
        </JssProvider>
      )
    }
  }

  StyleContainer.displayName = `StyleContainer(${BaseComponent.displayName})`

  return StyleContainer
}

export default StyleContainer
