import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
  render() {
    return (
      <div className="About content-fixed">
        <div className="lander">
          <h3>Welcome!</h3>
          <p>
            I am Evans and I write software that runs in browsers and on
            servers. This website's purpose is to showcase some of the projects
            I am currently working on and ones I have contributed to in the
            past.
          </p>
          <p>
            While I do often find myself coding or reading about software during
            my free time. Occasionally I can be found binge-playing Halo on Xbox
            or Battlefield One on the PC.
          </p>

          <h3>Background</h3>
          <p>
            The world wide web, and computers in general, captivated me at young
            age. I learned some HTML and CSS while in middle school. Then picked
            up some PHP from various books and tutorials online. In high school
            I started a video game tournament website.
          </p>
          <p>
            Like many others, what I studied in college is not directly related
            to what I do today. I studied Accounting and Business Economics at
            the University of Arizona.
          </p>
          <p>
            Like many others, what I studied in college is not directly related
            to what I do today.
          </p>
        </div>
      </div>
    )
  }
}
