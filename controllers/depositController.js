import axios from 'axios';
import variables from '../utilities/variables.js';
import getMpesaCredentials from '../utilities/getMpesaCredentials.js';
import getMpesaPassword from '../utilities/getMpesaPassword.js';

export const deposit = async (req, res, next) => {
  const { phone, amount } = req.body;
  const { access_token } = await getMpesaCredentials();

  if (!phone || !amount)
    return res.status(400).send({ error: 'Missing required values' });

  const data = {
    BusinessShortCode: variables.MPESA_SHORTCODE,
    Password: getMpesaPassword().password,
    Timestamp: getMpesaPassword().timestamp,
    TransactionType: 'CustomerPayBillOnline',
    Amount: amount,
    PartyA: phone,
    PartyB: variables.MPESA_SHORTCODE,
    PhoneNumber: phone,
    CallBackURL: `${variables.CALLBACK_URL}/api/client/mpesa-callback/deposit`,
    AccountReference: 'EXAMPLE',
    TransactionDesc: 'EXAMPLE',
  };

  const config = {
    headers: { Authorization: `Bearer ${access_token}` },
  };

  axios
    .post(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      data,
      config
    )
    .then((res) => console.log(res))
    .catch((error) => res.send(error));
};
