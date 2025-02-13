import React, { useState } from "react";
import db from "./data.json";
import Card from "./components/Card";
import { iData, iCard } from "./utils/interfaces";
import { MdAdd, MdClose } from "react-icons/md";
import { addTask, moveCard, removeCard } from "./utils/dataOperations";

const App: React.FC = () => {
  const [data, setData] = useState<iData>(db as iData);
  const [text, setText] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  const handleAddTask = () => {
    setData(addTask(data, text));
    setText("");
    setToggle(false);
  };

  const handleMoveCard = (card: iCard, from: keyof iData, to: keyof iData) => {
    setData(moveCard(data, card, from, to));
  };

  const handleRemoveCard = (card: iCard, from: keyof iData) => {
    setData(removeCard(data, card, from));
  };

  return (
    <div>
      <div className="uppercase font-semibold text-center text-[23px] my-16">
        Simple Project MNGM
      </div>

      <div className="flex justify-center">
        <main className="border rounded-md w-[1000px] min-h[400px] bg-slate-50 shadow-inner relative">
          {toggle && (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center rounded-md backdrop-blur-sm">
              <div className="w-[600px] h-[300px] border rounded-md p-4 bg-white flex flex-col">
                <div className="flex justify-end">
                  <div
                    className="w-10 h-10 rounded-full hover:bg-red-100 flex items-center justify-center text-[25px] transition-all duration-300 cursor-pointer"
                    onClick={() => setToggle(false)}
                  >
                    <MdClose />
                  </div>
                </div>
                <input
                  className="w-[90%] border rounded-md outline-none h-[45px] pl-2 my-10"
                  placeholder="Enter today's task"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <div className="flex">
                  <button
                    className="text-white px-8 py-3 rounded-md bg-blue-950"
                    onClick={handleAddTask}
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </div>
          )}

          <section className="p-4 flex items-center justify-between bg-slate-100 gap-2">
            {Object.keys(data).map((columnName, i) => (
              <h1
                className="border-r flex-1 flex items-center justify-between uppercase font-semibold pr-6"
                key={i}
              >
                {columnName}
                {columnName === "task" && (
                  <div
                    className="w-10 h-10 rounded-full hover:bg-slate-200 flex items-center justify-center text-[25px] transition-all duration-300 cursor-pointer"
                    onClick={() => setToggle(true)}
                  >
                    <MdAdd />
                  </div>
                )}
              </h1>
            ))}
          </section>
          <section className="p-4 flex justify-between">
            {Object.entries(data).map(([columnName, column]) => (
              <div key={columnName}>
                {column.data.map((card: iCard) => (
                  <Card
                    key={card.id}
                    card={card}
                    columnName={columnName as keyof iData}
                    onMove={handleMoveCard}
                    onRemove={handleRemoveCard}
                  />
                ))}
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
