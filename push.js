var push = require('web-push')


let vapidKeys = {
    publicKey: 'BGcIvr4sKScLIw84bPGFVC2YdZWFq2QvQlHcqc7aPOhxRGo0bO92zvt5y6V4u85c85o4lTukMT3iDNAIudKwwS8',
    privateKey: 'N-2_ldIA_UjeoYX3KhcsIfAGSsQCHmTdQLL9NC_JE74'
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

let sub2 = {
  endpoint:"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABkUYmTno2vlKv2NguXejslD9-aAcQHVQ1g59PY8XwIHuJwr-a41wAE1T-Q2LBwLFNJ1eztUZaNPeb47A06Q5TyAvDdTVgXbLoH4JzLduTRc8bRxE2y_KHfJ2KcMC27wsv-734I_COQwGlySY09gi0ewHLkEqs0OG53laCWJaMUHoRrB-4",
  expirationTime: null,
  keys:{
    auth:"j4OVe7z7mmX6gkx1bl16TQ",
    p256dh:"BAnzS_nDvXY9NJUMqrwrklqTctoJUtTx4ARg-Q_cseV2vSr8xPBgQCIPDZ7M3oEyd4MCKgT_DlrmTdDHRQrw95A"
  }
}



  // push.sendNotification(sub, '{}')
  push.sendNotification(sub2, '{}')