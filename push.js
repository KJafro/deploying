var push = require('web-push')


let vapidKeys = {
    publicKey: 'BJGjGQ-Cs8cIN7s-I87gIRt8K_oA-90iz4uQT7g0XoIWSq0gOhiCN0l8WwMi-rwWU8JtrpZXZ591ujl1G0nORss',
    privateKey: '6qYb9YO4hOJF-wk6nL7cfwGjcNHyM62JV1lVUCE3c0g'
  }


  push.setVapidDetails("mailto:Kurtjeffries@yahoo.com", vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {
    endpoint:"https://fcm.googleapis.com/fcm/send/fA6YIL2VIuI:APA91bF5bS0A6gfHMlRvPoCYCp1jVjobPGRIp1rXvYVpidUM3Ng43qXrztIlXYBMTb-pYzlb0KWSl0kpBMH8Mk8mTXJ7DdtDNAx-GKHgT1Vw1dnImSdMLB5-mV88qSOsEhoybVKZqhet",
    expirationTime: null,
    keys:{
        p256dh:"BB4d9QtivHu3Np08lcGF3JQaiXR9Oa4WTXSBWZn7gi-eL4703t15tp6Uc5EZprTMawqjAZGvC2Evq4AqHMNLaps",
        auth:"NoVCGC2NxWkzOh_vCIZpVw"
    }
}


  push.sendNotification(sub, 'testing message')