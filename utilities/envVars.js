import dotenv from 'dotenv';

dotenv.config();

const {
  MPESA_SHORTCODE,
  MPESA_PASSKEY,
  MPESA_CONSUMER_KEY,
  MPESA_CONSUMER_SECRET,
  API_URL,
} = process.env;

const envVars = {
  MPESA_SHORTCODE,
  MPESA_PASSKEY,
  MPESA_CONSUMER_KEY,
  MPESA_CONSUMER_SECRET,
  API_URL,
};

export default envVars;
