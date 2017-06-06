const assert = require('assert')
const MessageSignature = require('../lib/Clients/MessageSignature')

describe('HMAC Message Signing', function() {

  it('should return correct signature', function() {
    const expectedSignature = 'ShVaDlvB8PvK2DFlUIdg17VB3hUK8mDijqhHREvIT8miVcf2b22NCy/1G8tjs7Fy/Qlo12RwFpe9Jnxa4ml5Ow=='
    const testRawSecret = 'AAABBBCCCCDDDDBBDDFFFJJ'
    const testRawPath = 'https://api.kraken.com/0/private/OpenOrders'
    const testMessage = {
      trades: true,
      nonce: 123456778900
    }

    let messageSignature = new MessageSignature
    messageSignature.setSecret(testRawSecret)
    const signature = messageSignature.getSignature(testRawPath, testMessage, testMessage.nonce)
    assert.equal(signature, expectedSignature)
  })
  
  it('should throw error when no or empty secret is provided', function () {
    const testRawSecret = 'AAABBBCCCCDDDDBBDDFFFJJ'
    const testRawPath = 'https://api.kraken.com/0/private/OpenOrders'
    const testMessage = {
      trades: true,
      nonce: 123456778900
    }

    let messageSignature = new MessageSignature
    assert.throws(() => {
      messageSignature.getSignature(testRawPath, testMessage, testMessage.nonce)
    })

    assert.throws(() => {
      messageSignature.setSecret('')
      messageSignature.getSignature(testRawPath, testMessage, testMessage.nonce)
    })
  })

})