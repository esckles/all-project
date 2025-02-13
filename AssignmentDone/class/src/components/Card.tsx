import React from "react";
import { iCardProps } from "../utils/interfaces";

const Card: React.FC<iCardProps> = ({ card, columnName, onMove, onRemove }) => {
  return (
    <div className="w-[300px] h-[140px] border rounded-md bg-white p-2 shadow-inner my-4 flex flex-col ">
      <div>{card.title}</div>
      <div className="flex-1" />
      {columnName === "task" && (
        <button
          className="text-white bg-blue-950 px-5 mr-1 py-2 rounded-md text-[12px] w-[100px] justify-end flex items-center"
          onClick={() => onMove(card, "task", "progress")}
        >
          Add to Progress
        </button>
      )}
      {columnName === "progress" && (
        <button
          className="text-white bg-green-500 px-5 mr-1 py-2 rounded-md text-[12px]"
          onClick={() => onMove(card, "progress", "done")}
        >
          Add to Done
        </button>
      )}
      {columnName === "done" && (
        <button
          className="text-white bg-red-500 px-5 mr-1 py-2 rounded-md text-[12px]"
          onClick={() => onRemove(card, "done")}
        >
          Remove from Queue
        </button>
      )}
    </div>
  );
};

export default Card;
