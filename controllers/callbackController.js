export const depositCallback = async (req, res, next) => {
  console.log('-- Mpesa Callback --');
  console.log('Req Body: ', req.body);
  console.log('Req stkCallback: ', req.body?.Body?.stkCallback);
  console.log(
    'Req Metadata: ',
    req.body?.Body?.stkCallback?.CallbackMetadata?.Item
  );

  res.send({ success: true });
};
