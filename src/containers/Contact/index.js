import React, { Component } from 'react'
import axios from 'axios'
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
      error: '',
      sent: false,
      sending: false
    }
  }
  setStateValue = event => {
    const { value } = event.target
    const key = event.target.name
    const { state } = this
    const updatedState = {}
    updatedState[key] = { ...state[key] }
    updatedState[key].value = value
    this.setState(updatedState)
  }
  sendMessage = postingObj => {
    this.setState({ ...this.state, sending: true })
    axios
      .post(
        'https://en7mzqeu1j.execute-api.us-east-1.amazonaws.com/deploy/sendmessage',
        postingObj
      )
      .then(res => {
        return res.data
      })
      .then(res => {
        this.setState({ ...this.state, sent: true })
      })
      .catch(err => this.setState({ ...this.state, error: err }))
  }

  validateInput = (fieldObject, fieldName) => {
    // eslint-disable-next-line
    const EMAIL_REGEX = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

    switch (fieldName) {
      case 'name': {
        if (fieldObject.value.length < 3)
          return {
            ...fieldObject,
            error: 'Your name must to be at least 3 letters long.'
          }
        return clearErrorFromObj(fieldObject)
      }
      case 'email': {
        const emailTest = EMAIL_REGEX.test(fieldObject.value)
        if (!emailTest)
          return {
            ...fieldObject,
            error: 'This is not a valid email.'
          }
        return clearErrorFromObj(fieldObject)
      }
      case 'message': {
        if (fieldObject.value.length < 20)
          return {
            ...fieldObject,
            error: 'This needs to be at least 20 letters long.'
          }
        return clearErrorFromObj(fieldObject)
      }
      default:
        return false
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    console.log('final state --> ', this.state)
    const newState = {
      ...this.state,
      name: this.validateInput(this.state.name, 'name'),
      email: this.validateInput(this.state.email, 'email'),
      message: this.validateInput(this.state.message, 'message')
    }
    if (
      !newState.name.error &&
      !newState.email.error &&
      !newState.message.error
    ) {
      // all good
      this.setState(newState)
      this.sendMessage({
        name: newState.name.value,
        email: newState.email.value,
        message: newState.message.value
      })
    } else {
      this.setState(newState)
    }
  }

  render() {
    const { sent, sending, error } = this.state
    if (error) {
      console.log('error')
      console.log(error)
      return (
        <div className="center fade-in">
          <div className="content-fixed">
            <h2>Whoops!</h2>
            <p>
              Sorry, we couldn't mail your message. This is not because of
              anything you did. Please try again in 24 hours.
            </p>
          </div>
        </div>
      )
    }
    if (sent)
      return (
        <div className="center fade-in">
          <div className="content-fixed">
            <h2>Success!</h2>
            <p>
              Thank you <b>{this.state.name.value}</b>. You have successfully
              emailed me.
            </p>
            <p>
              Unless I am binge playing video games, coding, jamming to music,
              or skiing I will respond to your email{' '}
              <b>({this.state.email.value})</b> within 24 hours.
            </p>
          </div>
        </div>
      )
    if (sending)
      return (
        <div className="center fade-in">
          <div className="content-fixed">
            <h2>Sending</h2>
            <p>The cloud is email your message to me...</p>
          </div>
        </div>
      )
    return (
      <div className="center">
        <form className="contact-form fade-in" onSubmit={this.handleSubmit}>
          <label id={this.state.name.error && 'contact-form-error'}>
            name<input
              value={this.state.name.value}
              type="text"
              name="name"
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
              placeholder="Hello Evans,"
              onChange={this.setStateValue}
            />
          </label>
          <div className="center">
            <input className="contact-send-form" type="submit" value="Send" />
          </div>
        </form>
      </div>
    )
  }
}

const clearErrorFromObj = fieldObject => {
  const newFieldObj = { ...fieldObject }
  newFieldObj.error = ''
  return newFieldObj
}
