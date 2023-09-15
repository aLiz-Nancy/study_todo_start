"use client";

import { useState } from "react";

import { TaskEdit, TaskWrap, TaskWrapStatus, TaskStatus } from "@/models/task";
import { demoTasks } from "@/demo-data/task";
import { ListTask } from "@/components/parts/List/Todo/ListTodo";

export default function Home() {
  const tasks = demoTasks;

  const onChangeTaskStatusToggle = (id: string) => {};

  const onClickTaskEdit = (id: string) => {};

  const onClickTaskUpdate = (id: string, task: TaskEdit) => {};

  const onClickTaskDelete = (id: string) => {};

  const onClickTaskAdd = (task: TaskEdit) => {};

  return (
    <main>
      <div>
        <select>
          <option value="createdAt">作成日</option>
          <option value="updatedAt">更新日</option>
          <option value="title">タスク名</option>
          <option value="priority">優先度</option>
          <option value="dueDate">期日</option>
        </select>
      </div>
      <div>
        <ListTask
          tasks={tasks}
          onChangeStatusToggle={onChangeTaskStatusToggle}
          onClickEdit={onClickTaskEdit}
          onClickUpdate={onClickTaskUpdate}
          onClickDelete={onClickTaskDelete}
          onClickAdd={onClickTaskAdd}
        />
      </div>
    </main>
  );
}
