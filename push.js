var push = require('web-push')


let vapidKeys = {
    publicKey: 'BJGjGQ-Cs8cIN7s-I87gIRt8K_oA-90iz4uQT7g0XoIWSq0gOhiCN0l8WwMi-rwWU8JtrpZXZ591ujl1G0nORss',
    privateKey: '6qYb9YO4hOJF-wk6nL7cfwGjcNHyM62JV1lVUCE3c0g'
  }


  push.setVapidDetails("mailto: Kurtjeffries@yahoo.com", vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {
    endpoint:"https://fcm.googleapis.com/fcm/send/fA6YIL2VIuI:APA91bF5bS0A6gfHMlRvPoCYCp1jVjobPGRIp1rXvYVpidUM3Ng43qXrztIlXYBMTb-pYzlb0KWSl0kpBMH8Mk8mTXJ7DdtDNAx-GKHgT1Vw1dnImSdMLB5-mV88qSOsEhoybVKZqhet",
    expirationTime: null,
    keys:{
        p256dh:"BB4d9QtivHu3Np08lcGF3JQaiXR9Oa4WTXSBWZn7gi-eL4703t15tp6Uc5EZprTMawqjAZGvC2Evq4AqHMNLaps",
        auth:"NoVCGC2NxWkzOh_vCIZpVw"
    }
}

let sub1 = {
    endpoint:"https://fcm.googleapis.com/fcm/send/dm97u10h6ys:APA91bF5AaAbp3Hn812_RAjJumTx4uBPniZ8bQxdQITpC0RbZ41JzLIVX17Rhq5sBdJ809ALH9GpAWgtR2TRTdgk7HxbtYrbPBbTMCjcx5ZZXSdzreQqzvIyuchOhxYhRVh0hgNcZiIu",
    expirationTime: null,
    keys:{
        p256dh:"BGIH4j2B34lYKlHCiMa9BtA8AzZ0YsuNtiSAAOPe1IhmolKV72tbu_9imz4TZhofHuqoY4Ap9vMiKMay931rMJo",
        auth:"os8of5dlPYo0iYSTPTISLA"
    }
}

// sub = {
//     endpoint:"https://web.push.apple.com/QJHSN_yI8MzZBoG2qL9x--r_IZ1eQ2IScIlNQtAeJVjn1kKVbUe5usdSlU8zdgj1HqqzaaceYn_I4MVt9iGfKvIUkkkTeAnX9EqOqw5iu7hqX2gz4zCbg9weW4INsYRwkTUFwym1P2osV_zKFIrLTwCBP_jF7Ig0FkieWHYVaD4",
//     keys:{
//         p256dh:"BKVN07AVTIVYDdJYeMrCWB3CLWjL8cfxQsWSsM0V44o-vju0pmU49fFOc0dW6ci4JhyvOvohsB0f46HyKt03GR0",
//         auth:"L44FI8HM4n2tmjTWw8PFtg"
//     }
// }

let sub2 = {
    endpoint:"https://wns2-ln2p.notify.windows.com/w/?token=BQYAAAAPwa4MaOUc7It%2fcRTSRDO48qR%2bYxh6dA5%2fDjCfRADieAVqg7Q8fNkzZU0Op4MO1LrwjzXe%2fmHQoR45FLOBPaC8Abbvandri9vlNEOjT66zA3F0gJnAScInm5%2f06wOb%2bXwBb7BO4gCPn7BDIZTGB%2f4qfLpXs%2fL%2bHU7IHqL0TRIXvQDWbnxHRuZv8KfUkBo60IjEV4iA6%2b4QsdL5sw5KrkeKDbDrN2zGewJ5qNd5T3SWPjVguUaO44tEAhUx%2bQ9rvqEpzJgJ0%2bRl3iu2%2bElRdxgNBa7QvrRAobs502%2bHNehHAey4scJMSE5hFuWQdFpRgZI92eHiUJgFi1TrucqhY%2bXVOFTYpJ3x%2b%2b%2fxWs6OCn7Dew%3d%3d",
    expirationTime: null,
    keys:{
        p256dh:"BArl4fsIQ1LPT0XyLrcRVxAWP2mbS6280bhipz5Jfom73SHrgH7YXVVfgQVe8-UqhiM_D4e2DOK9eGkp2p2z34M",
        auth:"MLf10Iq5YsLhoYxsePskaA"
    }
}

let sub3 = {
    endpoint:"https://fcm.googleapis.com/fcm/send/dm97u10h6ys:APA91bF5AaAbp3Hn812_RAjJumTx4uBPniZ8bQxdQITpC0RbZ41JzLIVX17Rhq5sBdJ809ALH9GpAWgtR2TRTdgk7HxbtYrbPBbTMCjcx5ZZXSdzreQqzvIyuchOhxYhRVh0hgNcZiIu",
    expirationTime: null,
    keys:{
        p256dh:"BGIH4j2B34lYKlHCiMa9BtA8AzZ0YsuNtiSAAOPe1IhmolKV72tbu_9imz4TZhofHuqoY4Ap9vMiKMay931rMJo",
        auth:"os8of5dlPYo0iYSTPTISLA"
    }
}



let sub4 = {
    endpoint:"https://wns2-ln2p.notify.windows.com/w/?token=BQYAAAC%2f8GAZYuwE4jk8NE1o%2bfKMXoxbQ5wEWFbe%2fb2dHk5UhoeEfKkdbvEQO5RQTsNKE1JN40%2ffu%2bCxMBoS%2bKaU%2fAfK7AWdK675mHC%2fBnx9k8HGHevUuO3DKxbG83mml3ru7UZjemYAAmDQX1iswNXALRVNR8DlZm8ynnqQyasdMK2iCmq3PkjWZ3g2Ox8QqQSsyjviehe9%2fwyfiA1nLoj2L%2fAJOySWKlo61gDSBMnSm50315ASY8MxeWV%2fvw3le3tCLY8A4SHLOFRxmfnUhKnSyv12Ng9%2bhw42xdaaOQNTOhh1zyyg5YsgycfEghrmiSUHUdZs6XzGTT9%2fjQAoLXQb45ob",
    expirationTime: null,
    keys:{
        p256dh:"BFFyIjcvA3lv_OX_7cc5mvDmIDzIxyRQ1-wSeW_Lo4P4WiKWob1zjod_gUUZZtm7ErlX7hSTRwpTJefYwhdDda0",
        auth:"R1Fa6z0Lu7LufgYdm9vLcw"
    }
}

let sub5 = {
    endpoint:"https://fcm.googleapis.com/fcm/send/fS-W11grhK8:APA91bEbAyDjYdGQH1Mhh6mXxIuMg0rLXyEwW5gRh05m2eRZF0QVtj0YbuTH436drZ6G5qMFW_OKdagL4hX8pbVsztOG7Oitp5TjF3oB9rOkEJoZjFgtCjfRHNNnjHPighboFbBzzN9G",
    expirationTime: null,
    keys:{
        p256dh:"BAs_wd_V0YIxiXH3yAicKvSKBF4-JVcIpvsSQ3oa63vDE7PmFzkYr-jFO23sANYAocITzTz7fuSl-KY5WRHKqY4",
        auth:"0g2Dt0I8y6qbQtURG7L3vA"
    }
}

let sub6 = {
    endpoint:"https://fcm.googleapis.com/fcm/send/fHndDj0v5io:APA91bGGg_WmNUdAW_Uvhkd-jARZmBaDpdaUUN0nYnW2EUBlYmZxWtd4LTMNNqRGEaBY1cobDumBDFSAe4bFtCKKOxeq5mHnloCu7sWCmVqkWHwa_PlclbRZaFGOOMAolg5kkEqiO1pn",
    expirationTime: null,
    keys:{
        p256dh:"BJ6Jsi8-iC_POdlrcFRUZ5emDDBcIn4DqUXsguHw4Ma1IO-eFNiSEaDHakieMxx_xhzU-Md1k71Un8NNsN4JOWA",
        auth:"75f9sExqkexqWRqeE95B-A"
    }
}

let sub7 = {
    endpoint:"https://wns2-ln2p.notify.windows.com/w/?token=BQYAAAAMOjX5P602X7sLjcLFv%2biB2Sdf7n8ahV5rEbc5jRwaPV5ch8uWvh2pPofhsOGclI5kKUZFra2b5GINXya5QpZ0r8Yoi9NKcAno7sxfrv9%2bBRTfp7r22rQK%2fgCR3%2f17g3vB9vSaViqOesiTIHCcqN%2blbw2b3fm2sUsezmyc0rS0cLwQZih6yn5h%2fYNRYh%2f1I7oADAlW30Z2JZEYmu5J0OdQRsAGsG5WZ2h23qPGyReQdtJ4P8sYRqZeXEjcz3s9T11a6jXWWlu6bnb74hlscWPBsdQxPjZNgojrMCUTq%2bj2YT%2f2hrgvJNMFJ%2fObirMp0VAqyJQMQjgiAnQrwdPEOsPI",
    expirationTime :null,
    keys:{
        p256dh:"BIEiJSVqoCJHQzaoMfaSUUrEx-GbAALhg8kGloG8DB_x5D3u-noAcoM00l9o4T7qnNcHwvMSFVX2p4vnDsbLQUw",
        auth:"OKp3hdIPkiwSiD-5QIM1fQ"
    }
}

let sub8 = {
    endpoint:"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABkRapMOgh_OrZ2WT-EwPycyIl3Bm2FwfHH8ysEJYEvq8RF54X5ikqgCnoITKJIMZUfPOiAp8d__mDi98dcm7YndpqRRuNHMaOBFlbI-IcwS10wIrdu29cV9dTerw2zAgu7Mu660WGkepX9TBOKoF-q7jPrbUnGLd1HV9G6dNbxIeEZEjE",
    expirationTime: null,
    keys:{
        auth:"57A_Em6K3T1BfS85gTF2Qg",
        p256dh:"BDK1RDZ86awp1W1se7xDec5RwUZYD1Fp1QX07EnhjJkuz2IwsX_3YZ2oQEKr9PPsa96HBqsZo7h9sxIBn_Ht1Yg"
    }
}

let sub9 = {
    endpoint:"https://fcm.googleapis.com/fcm/send/dm97u10h6ys:APA91bF5AaAbp3Hn812_RAjJumTx4uBPniZ8bQxdQITpC0RbZ41JzLIVX17Rhq5sBdJ809ALH9GpAWgtR2TRTdgk7HxbtYrbPBbTMCjcx5ZZXSdzreQqzvIyuchOhxYhRVh0hgNcZiIu",
    expirationTime: null,
    keys:{
        p256dh:"BGIH4j2B34lYKlHCiMa9BtA8AzZ0YsuNtiSAAOPe1IhmolKV72tbu_9imz4TZhofHuqoY4Ap9vMiKMay931rMJo",
        auth:"os8of5dlPYo0iYSTPTISLA"
    }
}

let sub10 = {
    endpoint:"https://wns2-ln2p.notify.windows.com/w/?token=BQYAAAA4g0YvKpObBqa%2binSUK3XojcK16vJOBachb8uHRFIUnvNkZ5BwA7ZCISIJKAE5D%2fbZy1pozbZTt3fIKggmjNcwZH5FrIimzEy8JpD86AuDEzmjQaINlzQ1WlNoKgSqFf0aEzd4Tb0k7HqQo%2fJuHUbjvHebNuKog5hXDUbsQb5EYWhB2xJG6J60sVCgqKUieY3bimKjWmpLKPULM%2f9gI9DDiOGGWfXIo7MfRQypFLWZ7HB%2fHwUHb1B7T1Tw2PniWKmlzfley7OKZg87azB68oldlCCjjuSVMa0mCjY2JMXvshufpMzxIr0kt0iS5F0THI8%3d",
    expirationTime: null,
    keys:{
        p256dh:"BDv9VCIqFbj6c-ZJhKbKE7prQkAzYVRhUYAEq1rtFZYuhWrIqIuiMdV7-WLIB97EECoKA3nhfPlHzwKZeeOkJs8",
        auth:"iRu8i1wAHMcsnW9IRPMO2Q"
    }
}

let sub11 = {
    endpoint:"https://fcm.googleapis.com/fcm/send/cXSAVqzW1J0:APA91bHiZctLWNivQobSV0throXb2fnrcKfuf1_0IQHNUft57JBknBNIj4K00gnx_y7vnWy809U-Cx80RRmYgIlYaV7LYNlNsVFIyetR1CL_uW-v7j_RxnG3GfAhYwyusAMOiCTDrVF3",
    expirationTime: null,
    keys:{
        p256dh:"BJtzATPa71z5ndkX1hJtH58ca7u0LaltkiZYXwvpnQQpWH1X8KzBVx4GRpA9Hk3TjFBM7JIKnHHmN4u8UGwKd0k",
        auth:"aFL14Get3yzjfBA1C0ULDQ"
    }
}





//   push.sendNotification(sub, 'testing message')
//   push.sendNotification(sub1, 'testing message')
//   push.sendNotification(sub2, 'testing message')
//   push.sendNotification(sub3, 'testing message')
//   push.sendNotification(sub4, 'testing message')
//   push.sendNotification(sub5, 'testing message')
//   push.sendNotification(sub6, 'testing message')
//   push.sendNotification(sub7, 'testing message')
//   push.sendNotification(sub8, 'testing message')
//   push.sendNotification(sub9, 'testing message')
//   push.sendNotification(sub10, 'testing message')
  push.sendNotification(sub11, 'test')