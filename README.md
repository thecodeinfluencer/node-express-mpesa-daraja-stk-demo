# node-express-mpesa-daraja-stk-demo

A daraja STK push (M-PESA Express) demo with node and express server

# Prerequisites

1. Create an account on [Safaricom developers portal (Daraja)](https://developer.safaricom.co.ke/)
2. Create a new app under [My Apps](https://developer.safaricom.co.ke/MyApps) section ensuring to check all the fields. You will be able to see consumer key and consumer secret under each app
3. Have `node.js` installed (or reuse the implementation in your favorite programming language or framework)
4. (Optional) Have `ngrok` installed - Use this to simulate https on our localhost server. If you already have `node.js` then you can install it by running `npm install -g ngrok` or run it directly on `npx`. Otherwise, download it from ngrok download page.
5. Have Postman or any other API testing tool installed

# Setup

1. Run `ngrok http 5000` in a terminal in the project root
2. Fill in the `.env` with the necessary information. Replace the `CALLBACK_URL` with the https version of the link provided on the ngrok terminal in step 1
3. Start the project by running `node index.js`
4. In Postman, create a `POST` request with the body containing the `phone` and `amount`
5. Press send and “fingers crossed” you should receive a push on your phone
6. On the `node.js` terminal, you should see a console logging once you either accept or decline the push.
