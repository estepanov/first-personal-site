import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: {
        dirty: false,
        value: '',
        error: ''
      },
      email: {
        dirty: false,
        value: '',
        error: ''
      },
      message: {
        dirty: false,
        value: '',
        error: ''
      },
      enableSubmit: false,
      error: '',
      sent: false
    }
  }
  setStateValue = event => {
    const { name, email, message } = this.state
    const { value } = event.target
    const key = event.target.name
    const { state } = this
    console.log(state[key])
    console.log(key, value, value.length)
    const updatedState = {}
    updatedState[key] = { ...state[key] }
    updatedState[key].value = value
    if (state[key].dirty === false) updatedState[key].dirty = true
    if (state[key].error) {
      if (state[key].value.length > 2) updatedState[key].error = ''
    } else {
      if (state[key].value.length < 3)
        updatedState[key].error = 'needs to be longer'
    }
    if (
      !name.error &&
      name.dirty &&
      !email.error &&
      email.dirty &&
      !message.error &&
      message.dirty &&
      !updatedState[key].error &&
      updatedState[key].dirty
    ) {
      updatedState.enableSubmit = true
    } else {
      updatedState.enableSubmit = false
    }
    // console.log(this.state)
    this.setState(updatedState)
    console.log('-->', updatedState)
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ sent: true })
    console.log('final state --> ', this.state)
  }

  render() {
    const { enableSubmit, sent } = this.state
    if (sent)
      return (
        <div className="center">
          <div>
            <h2>Success!</h2>
            <p>
              But this form was not sent yet! Because site is still a work in a
              progress.
            </p>
          </div>
        </div>
      )
    return (
      <div className="center">
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <label id={this.state.name.error && 'contact-form-error'}>
            name<input
              value={this.state.name.value}
              type="text"
              name="name"
              placeholder="Master Chief"
              onChange={this.setStateValue}
            />
            {this.state.name.error}
          </label>
          <label id={this.state.email.error && 'contact-form-error'}>
            email
            <input
              value={this.state.email.value}
              type="text"
              name="email"
              placeholder="MasterChief@UNSC.gov"
              onChange={this.setStateValue}
            />
            {this.state.email.error}
          </label>
          <br />
          <label
            id={
              this.state.message.error ? 'contact-form-error' : 'message-label'
            }
          >
            {this.state.message.error}
            <textarea
              value={this.state.message.value}
              name="message"
              rows="10"
              placeholder="Your message goes here..."
              onChange={this.setStateValue}
            />
          </label>
          <div className="center">
            {enableSubmit && (
              <input className="contact-send-form" type="submit" value="Send" />
            )}
          </div>
        </form>
      </div>
    )
  }
}
