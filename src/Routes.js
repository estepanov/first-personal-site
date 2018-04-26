import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './containers/About'
import Work from './containers/Work'
import Blog from './containers/Blog'
import Contact from './containers/Contact'
import NotFound from './containers/NotFound'

export default () => (
  <Switch>
    <Route path="/" exact component={About} />
    <Route path="/about" exact component={About} />
    <Route path="/blog" exact component={Blog} />
    <Route path="/work" exact component={Work} />
    <Route path="/contact" exact component={Contact} />
    <Route component={NotFound} />
  </Switch>
)
