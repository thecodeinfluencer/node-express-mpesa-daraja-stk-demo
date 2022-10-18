import axios from 'axios';
import envVars from '../utilities/envVars.js';
import getMpesaCredentials from '../utilities/getMpesaCredentials.js';
import getMpesaPassword from '../utilities/getMpesaPassword.js';

export const deposit = async (req, res, next) => {
  const { phone } = req.body;
  const { access_token } = await getMpesaCredentials();

  const data = {
    BusinessShortCode: '174379',
    Password: getMpesaPassword().password,
    Timestamp: getMpesaPassword().timestamp,
    TransactionType: 'CustomerPayBillOnline',
    Amount: '1',
    PartyA: phone,
    PartyB: '174379',
    PhoneNumber: phone,
    CallBackURL: `${envVars.API_URL}/api/client/mpesa-callback/deposit`,
    AccountReference: 'MONARCH LTD',
    TransactionDesc: 'MONARCH LTD',
  };

  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  axios
    .post(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      data,
      config
    )
    .then(res => {
      res.send({ res });
      console.log(res);
    })
    .catch(error => {
      res.send(error);
    });
};
