const router = require("express").Router();

router.post("/subscribe", (req, res) => {
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({ title: "Yesss" });
    webpush
      .sendNotification(subscription, payload)
      .catch(err => console.error(err));
  });