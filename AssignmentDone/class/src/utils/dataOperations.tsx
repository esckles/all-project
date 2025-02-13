import { v4 as uuid } from "uuid";
import { iCard, iData } from "./interfaces";

export const addTask = (data: iData, title: string): iData => {
  const newTask: iCard = { id: uuid(), title };
  return {
    ...data,
    task: {
      ...data.task,
      data: [...data.task.data, newTask],
    },
  };
};

export const moveCard = (
  data: iData,
  card: iCard,
  from: keyof iData,
  to: keyof iData
): iData => {
  return {
    ...data,
    [from]: {
      ...data[from],
      data: data[from].data.filter((item) => item.id !== card.id),
    },
    [to]: {
      ...data[to],
      data: [...data[to].data, card],
    },
  };
};

export const removeCard = (
  data: iData,
  card: iCard,
  from: keyof iData
): iData => {
  return {
    ...data,
    [from]: {
      ...data[from],
      data: data[from].data.filter((item) => item.id !== card.id),
    },
  };
};
