import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './containers/About'
import Projects from './containers/Projects'
import SingleProject from './containers/Projects/SingleProject'
import Blog from './containers/Blog'
import Contact from './containers/Contact'
import NotFound from './containers/NotFound'

export default () => (
  <Switch>
    <Route path="/" exact component={About} />
    <Route path="/about" exact component={About} />
    <Route path="/blog" exact component={Blog} />
    <Route path="/projects/tag/:tag" component={Projects} />
    <Route path="/projects" exact component={Projects} />
    <Route path="/projects/:project" component={SingleProject} />
    <Route path="/contact" exact component={Contact} />
    <Route component={NotFound} />
  </Switch>
)
