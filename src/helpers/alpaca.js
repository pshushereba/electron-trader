const Alpaca = require('@alpacahq/alpaca-trade-api')

const alpaca = new Alpaca({
  keyId: process.env.VUE_APP_ALPACA_CLIENT_ID,
  secretKey: process.env.VUE_APP_ALPACA_CLIENT_SECRET,
  paper: true,
  usePolygon: false,
});

export const getAlpacaAccount = () => {
  return alpaca.getAccount()
    .then((account) => {
      console.log("Current Account:", account)
    })
    .catch((err) => console.error(err));
};
