import * as JsStore from "jsstore";
import { DATA_TYPE } from "jsstore";

import * as JsStoreWorker from "jsstore/dist/jsstore.worker.commonjs2";
// import { UserService } from '../service/UserService'
window.JsStoreWorker = JsStoreWorker;
export const idbCon = new JsStore.Instance();
export const dbName = "trader_db";
export const initJsStore = async () => {
  try {
    const isDbCreated = await idbCon.isDbExist(dbName);
    if (isDbCreated) {
      idbCon.openDb(dbName);
    } else {
      idbCon.initDb(getDatabase());
      // const userService = new UserService()
      // userService.addUser({ email: 'pshushereba@gmail.com', password: 'test1234', firstname: 'Patrick', lastname: 'Shushereba' })
    }
  } catch (err) {
    console.error(err);
  }
};

const getDatabase = () => {
  const tblUser = {
    name: "users",
    columns: {
      id: {
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        notNull: true,
        dataType: DATA_TYPE.String,
      },
      password: {
        dataType: DATA_TYPE.String,
        notNull: true,
      },
      firstname: {
        notNull: true,
        dataType: DATA_TYPE.String,
      },
      lastname: {
        dataType: DATA_TYPE.String,
        notNull: true,
      },
    },
  };
  const dataBase = {
    name: "Trader",
    tables: [tblUser],
  };
  return dataBase;
};
