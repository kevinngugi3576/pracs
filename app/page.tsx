"use client";

import React, { ChangeEvent, useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
let nextId = 0;

const createTodos = (text: string, completed = false): Todo => {
  return {
    id: nextId++,
    text,
    completed,
  };
};
const initalTodos = [
  createTodos("learn react"),
  createTodos("learn typescript"),
  createTodos("learn nextjs"),
];

const page = () => {
  const [showexisting, setShowexisting] = useState(false);
  const [todo, setTodo] = useState<Todo[]>(initalTodos);

  const HandleTodo = (text: string) => {
    const newTodo = createTodos(text);
    setTodo([...todo, newTodo]);
  };

  const visibleTodos = showexisting ? todo : todo.filter((t) => t.completed);

  const numberTodos = visibleTodos.map((todo, index) => ({
    ...todo,
    order: index + 1,
  }));

  const HandleDelete = (todo: Todo) => {
    const deleted = numberTodos.filter((item) => item.id !== todo.id);
    setTodo(deleted);
  };

  return (
    <div className="h-screen dark:bg-black  ">
      <div className="flex items-center flex-col justify-center ">
        <div className="mr-28 mt-48 ">
          <label>
            <input
              type="checkbox"
              checked={showexisting}
              onChange={(e) => setShowexisting(e.target.checked)}
              className="border-4 bg-white size-5 rounded-full "
            />
            <span className="text text-white font-bold text-3xl">
              show curent todos
            </span>
          </label>
          <NewTodo onAdd={HandleTodo} />
          <div className="  border-2 border-white  mt-10 p-[10px] transition-all gradient-to-r from-purple-500 to bg-indigo-800">
            {/* {showexisting && ( */}
            <ul>
              {numberTodos.map((todo) => (
                <li key={todo.id} className="text text-white font-bold">
                  {todo.order}. {todo.text}
                  <div>
                    <button
                      onClick={() => HandleDelete(todo)}
                      className="rounded-lg bg-white"
                    >
                      <span className="text text-black p-[4px]">delete?</span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            {/* )} */}
          </div>
          <span className="text-white">
            {`n.o of new todos  are ${numberTodos.length}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;

const NewTodo = ({ onAdd }: { onAdd: (text: string) => void }) => {
  const [text, setText] = useState<string>("");

  const HandleClick = () => {
    onAdd(text);
    setText("");
  };

  return (
    <div>
      <label>
        <span className="text-3xl text-white font-bold ">
          type here to add todos:
        </span>
        <input
          type="text"
          value={text}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
          className="border-4 border-black p-[16px] rounded-full"
        />
      </label>{" "}
      <button
        className="bg-white rounded-lg shadow-md p-[5px] shadow-white "
        onClick={HandleClick}
      >
        add todos
      </button>
    </div>
  );
};
