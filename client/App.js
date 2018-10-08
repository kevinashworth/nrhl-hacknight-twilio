import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react'
import { Button, Card, CardBody, CardText, CardSubtitle, CardTitle, Input } from 'reactstrap'

function validatePhone(phone) {
  var re = /^\+[0-9]{11}$/
  return re.test(phone)
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: '+1',
      buttoncolor: 'secondary'
    };
  }

  changeInput = (event) => {
    this.setState({recipient: event.target.value});
    if (validatePhone(event.target.value)) {
      this.setState({buttoncolor: 'primary'})
    } else {
      this.setState({buttoncolor: 'secondary'})
    }
  }

  sendSms = () => {
    if (this.state.buttoncolor === 'primary') {
      Meteor.call('sendSms', {recipient: this.state.recipient},
      (error, result) => {
        if (error) {
          console.error(error)
        } else {
          console.info(result)
        }
      })
    }
  }

  render () {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>NRHL Hack Night</CardTitle>
            <CardSubtitle>"Use the Twilio API to send a text to your phone that your package has been delivered."</CardSubtitle>
            <Input label="Enter phone number to send SMS to:" type="text"
              onChange={this.changeInput} value={this.state.recipient}/>
            <CardText><small className="text-muted">Enter a US phone number in the format +15553334444.</small></CardText>
            <Button color={this.state.buttoncolor} onClick={this.sendSms}>Send the text!</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default App
