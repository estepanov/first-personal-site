import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'web-animations-js'

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
