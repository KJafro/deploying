var push = require('web-push')


let vapidKeys = {
    publicKey: 'BM0wVQoiwffifZXJTa1aLRyW2Y1roTvqIJatTeo8beWOPF_IAdLbtQp5bzfmAAVBofQm6avPuwBjQ31_ANkLVJE',
    privateKey: '0n5v0_EeOrYk1mT-XJmLAZbw7Zvgo4Ttk9jx1I_cIOo'
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


    let sub1 = {
        endpoint:"https://wns2-ln2p.notify.windows.com/w/?token=BQYAAABKG5Gejph4clMEBOX0dcAjgOx6kAGMwkn0vrcSuLC%2bIYlehj1vEm4kL0xhfvyZYq1tgq0t2xQ55sDkZMBQAiczM85DWxOxM%2fc0sjRWOXf7UVLkXUQXTqAT7PGR2ZSe61GTJXIHr1NJAM6ZKdiLy1PIDg0ocrpBz5cjOIoNaJNL2EK5hk14HDwqK%2bMF1a9leNdUg4yI%2fBveNtAP7f%2bIfbcoQBGlaKtxMRy8EjAUEuvMMNT1yWTmV%2bK0SuntTP4X5ON4rw38WlEXrlEbH63o%2fPlBNkxTDQp6MxWk1zYE8aVZ%2bNhC%2fXyRtCR64eMuyBHyutI%3d",
        expirationTime: null,
        keys:{
            p256dh:"BK7Q7xO45ig2VJZx4YapVk6MtMU6cRplR1ptZBjDIhvsBFIHyniyjkDkpE61-I8kVcc1MqjO0ZuswieQ2_lKF1k",
            auth:"6_mk0cUefOadh0bYprI2VA"
        }
    }

    let sub2 = {
        endpoint:"https://fcm.googleapis.com/fcm/send/fd3CaRFh3BQ:APA91bGhPVTLWnpFEF5TbRWYFoPU_TVOixuNT3lVbJ15YxTkqwQfTFR6fLIQKjyf_gUZQIhIZhveNmEYGPLuEbIs-4JAJVJ5zSXsMGhrbEDb_HSzoa3POKivo_pzGHd0PHEWoVNcpw-y",
        expirationTime: null,
        keys:{
            p256dh:"BGfwlKtQra2iRzjBXVy7wK3S5w7-kZA-Ls2jyA-7Svs6Vi9GhDxRkMLd6phpCQ8rJ_9xxOH00GAGz7HuzwBYYGU",
            auth:"pfnu4ArGh8n5Xr8tKU_N7g"
        }
    }

  push.sendNotification(sub1, "{}")
  push.sendNotification(sub2, "{}")

