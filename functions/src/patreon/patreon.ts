import * as functions from 'firebase-functions'

export const authorisePatreonLogin = functions.https.onRequest((req, res) => {
  res.status(200).send('User Authenticated')
})
