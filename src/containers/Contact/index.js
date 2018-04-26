import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
  render() {
    return (
      <div className="center">
        <form className="contact-form">
          <label>
            name<input type="text" name="name" />
          </label>
          <label>
            email <input type="text" name="email" />
          </label>
          <br />
          <label id="message-label">
            <textarea
              name="message"
              rows="10"
              placeholder="Your message goes here..."
            />
          </label>
          <div className="center">
            <input
              disabled
              className="contact-send-form"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    )
  }
}
