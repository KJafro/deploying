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
  endpoint:"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABkUYxl8yWYcwTgGo8DLHX8d1W6jGoLOuKBMlfuv3R7a2-FuDXCUdMc7CYDAQYf_4UCDR6TaDCPuxQO08Tr8rl6rsBksmIHwi4IkwUtbHsS1aoP82dQjnz-Fd44RH8iZN4Ndcwjb0RjBFZLp_f64cq9WsQcPBAEQTlNNuIXPTNMsBbVBAM",
  expirationTime: null,
  keys:{
    auth:"3-CtRiOwDQ8evk0w9q1cEQ",
    p256dh:"BHevjgLbv_RA72eK06aK1dNzk7iM5Lou-5Th_V439q0AfSAAsj4pwMzP4bLmnBF9jyG_QnNEZpsTAVQwNlxy9Oc"
  }
}

let sub3 = {
  endpoint:"https://fcm.googleapis.com/fcm/send/d8KOrof21JA:APA91bGjASvyMdC43RLkafGYFT4B_93h5L-npXlUyLTCZiXR0LhcsFyyPATy2XfCYKwOT-4V1NNm8al6JgeyKmPS0hWfumlpjjnl4bvTyRoC2o1XAvC7raP90m5kj8nPS8DYvB7P-vw0",
  expirationTime: null,
  keys:{
    p256dh:"BLMKZ5pk2gZY_PyVEYXMN6yT7qcNWTFfDHAH9M_yAbIeXyAKKwP_fq9ywCRv-IQ9u8NPcw9Lb5JUo1Fg23yZZ2I",
    auth:"hyZpZCkCTWvu0BgqlhK5XA"
  }
}

let sub4 = {
  endpoint:"https://web.push.apple.com/QIcYYuLASgz8kPJ50Isrpt7I3gjpElRTC9XyfT5SywVK9JElMCfA-bNMRsAjWz8vFByLgOIg074jysJusrOVjsR8_sPnl_sFoeMHAHvVLmtATwE5DdrKlXL5lda2fxg4aMX2Bu0KCdN5PtnNAMYAn9ecUa2hQLjSR6hXbO3ypYE",
  keys:{
    p256dh:"BGu5qAJen06nxdwd5ngLunKsmYmM4_MkOvgH4H_1qSIczqXynVUgN4gb_9vzMRZNeP_Iu8w4KMMSl07RyzQBPpo",
    auth:"iy3KcVNP2f72XtXsWCXO2Q"
  }
}

  // push.sendNotification(sub, '{}')
  push.sendNotification(sub2, '{}')
  push.sendNotification(sub3, '{}')
  push.sendNotification(sub4, '{}')