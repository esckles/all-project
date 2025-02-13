import axios from "axios";

const url: string = "http://localhost:2222";
export const CreateGoal = async (data: {}) => {
  return await axios.post(`${url}/create-goal`).then((res) => {
    return res.data;
  });
};
export const ReadGoal = async () => {
  return await axios.get(`${url}/read-goal`).then((res) => {
    return res.data;
  });
};
