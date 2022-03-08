import React, { useRef } from "react";

type PropType = {
  action: (s: string) => void;
};

export const NewTodo: React.FC<PropType> = (props) => {
  const text = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const todo = text.current!.value;
    props.action(todo);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="todo">New Todo</label>
        <input type={"text"} id="todo" ref={text} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};
