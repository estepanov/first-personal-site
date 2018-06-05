import React from 'react'
import { Route, Switch } from 'react-router-dom'
import withTracker from './withTracker'
import About from './containers/About'
import Projects from './containers/Projects'
import SingleProject from './containers/Projects/SingleProject'
import Blog from './containers/Blog'
import Contact from './containers/Contact'
import NotFound from './containers/NotFound'

export default () => (
  <Switch>
    <Route path="/" exact component={withTracker(About)} />
    <Route path="/about" exact component={withTracker(About)} />
    <Route path="/blog" exact component={withTracker(Blog)} />
    <Route path="/projects/tag/:tag" component={withTracker(Projects)} />
    <Route path="/projects" exact component={withTracker(Projects)} />
    <Route path="/projects/:project" component={withTracker(SingleProject)} />
    <Route path="/contact" exact component={withTracker(Contact)} />
    <Route component={withTracker(NotFound)} />
  </Switch>
)
