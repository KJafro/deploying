var push = require('web-push')


let vapidKeys = {
    publicKey: 'BPtiXL0JW6zPJKrydB_6lJIL2kMT4YI-vqTc7UeyPhd7pG41ziXIBI5rLqT5duCQa46rNtbVkk4QUwh0U-usgNA',
    privateKey: 'XcyKCexSEuAUsx46Kt28RlErzB59ACu-4-7k_Bhmi1I'
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


  push.sendNotification(sub, '{}')

