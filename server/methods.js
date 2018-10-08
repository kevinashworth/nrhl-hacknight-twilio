var twilio = require('twilio');

Meteor.methods({
  'bar' ({ someText }) {
    console.log(`${module.id} says ${someText}!`)
    return 'baz'
  },
  sendSms: function ({ recipient }) {
    var client = new twilio(Meteor.settings.TWILIO.SID, Meteor.settings.TWILIO.TOKEN);

    client.messages.create({
        body: 'Hello! Your package has been delivered.',
        to: recipient,
        from: Meteor.settings.TWILIO.SENDER
    })
    .then((message) => console.log(message.sid));
  }
})
