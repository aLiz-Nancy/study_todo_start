import styled from "@emotion/styled";
import { useState } from "react";

import { TaskEdit } from "@/models/task";
import { Edit } from "../Item/Edit/Edit";

type Props = {
  onClickAdd: (task: TaskEdit) => void;
};

const Wrap = styled.li`
  display: flex;
`;

const TaskEdit = styled(Edit)`
  flex: 1;
`;

export const Add: React.FC<Props> = ({ onClickAdd }) => {
  const editTask = {
    title: "",
    priority: "",
    dueDate: "",
    description: "",
  };

  const onChangeTask = (updateTask: TaskEdit) => {
    onClickClear();
  };

  const onClickClear = () => {};

  return (
    <Wrap>
      <TaskEdit task={editTask} onChange={onChangeTask} />
      <div>
        <button onClick={onClickAdd.bind(this, editTask)}>👍</button>
        <button onClick={onClickClear}>🗑️</button>
      </div>
    </Wrap>
  );
};
