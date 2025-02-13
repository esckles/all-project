import { connect } from "mongoose";

const URL: string = "mongodb://127.0.0.1:27017/dribbbleDB";

export const dbConfig = async () => {
  try {
    await connect(URL).then(() => {
      console.clear();
      console.log("DB connection ❤️❤️🚀🚀");
    });
  } catch (error) {
    return error;
  }
};
