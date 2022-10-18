import datetime from 'node-datetime';
import envVars from './envVars.js';

const dt = datetime.create();
const formatedDT = dt.format('YmdHMS');

const getMpesaPassword = () => {
  const password = Buffer.from(
    envVars.MPESA_SHORTCODE + envVars.MPESA_PASSKEY + formatedDT
  ).toString('base64');

  return { password, timestamp: formatedDT };
};

export default getMpesaPassword;
