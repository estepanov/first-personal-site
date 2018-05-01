import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
  render() {
    return (
      <div className="About content-fixed">
        <img className="about-image" src="/me.png" alt="me :)" />

        <h3>Hello!</h3>
        <p>
          I am Evans and I write software that runs in browsers and on servers.
          This website's purpose is to showcase some of the projects I am
          currently working on and ones I have contributed to in the past.
        </p>
        <p>
          I spend most of my time coding, reading code, or reading about
          software. Winter is my favorite season and skiing on fresh powder is
          the highlight of every winter. Occasionally, I can be found
          binge-playing Halo on Xbox or Battlefield One on the PC.
        </p>

        <h2>About Me</h2>
        <p>
          The world wide web, and computers in general, captivated me at young
          age. I first learned HTML and CSS while in middle school. Then picked
          up PHP from various books and tutorials online. In high school I
          started a video game tournament website. Although the tournament
          website was not financially succesful, it was an especially insightful
          experience developmenting and managing a product.
        </p>

        <p>
          I recieved a Bachelor of Science in Accounting and Business Economics
          from the University of Arizona, International Diploma in Brewing
          Technology from Siebel Institute of Technology, and completed Full
          Stack Academy's Software Engineering Immersive program.
        </p>

        <p>...</p>
      </div>
    )
  }
}
