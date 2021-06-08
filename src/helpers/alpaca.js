const Alpaca = require("@alpacahq/alpaca-trade-api");

const alpaca = new Alpaca({
  keyId: process.env.VUE_APP_ALPACA_CLIENT_ID,
  secretKey: process.env.VUE_APP_ALPACA_CLIENT_SECRET,
  paper: true,
  usePolygon: false,
});

export const getAlpacaAccount = () => {
  return alpaca
    .getAccount()
    .then((account) => {
      console.log("Current Account:", account);
    })
    .catch((err) => console.error(err));
};

export const getAlpacaOrders = () => {
  return alpaca
    .getOrders()
    .then((orders) => {
      console.log("Orders", orders);
    })
    .catch((err) => console.error(err));
};

export const getAlpacaOrderById = (orderId) => {
  return alpaca
    .getOrder(orderId)
    .then((order) => {
      console.log(order);
    })
    .catch((err) => console.error(err));
}

export const getAlpacaPositions = () => {
  return alpaca
    .getPositions()
    .then((positions) => {
      console.log(positions)
    })
    .catch((err) => console.error(err));
}

// export const foo = () => {
//   return alpaca
//     .bar()
//     .then((resp) => {
//       console.log(resp)
//     })
//     .catch((err) => console.error(err));
// }

// export const foo = () => {
//   return alpaca
//     .bar()
//     .then((resp) => {
//       console.log(resp)
//     })
//     .catch((err) => console.error(err));
// }

// export const foo = () => {
//   return alpaca
//     .bar()
//     .then((resp) => {
//       console.log(resp)
//     })
//     .catch((err) => console.error(err));
// }