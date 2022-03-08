import React from "react";

interface TodoListProps {
  item: { id: number; text: string }[];
  action: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props?.item.map((elem) => (
        <li key={elem.id}>
          <span>{elem.text}</span>
          <button onClick={() => props.action(elem.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
