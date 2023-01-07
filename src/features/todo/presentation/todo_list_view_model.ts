import { useState } from "react";
import { GetTodos } from "../domain/useCase/todo/get_todos";
import TodoAPIDataSourceImpl from "../data/data_source/api/todo_api_data_source_impl";
import { TodoRepositoryImpl } from "../data/repository/todo_repository_impl";
import { Todo } from "../domain/model/todo";

export default function TodoListViewModel() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const UseCase = new GetTodos(
    new TodoRepositoryImpl(new TodoAPIDataSourceImpl())
  );

  async function getTodos() {
    setTodos(await UseCase.invoke());
  }

  return {
    getTodos,
    todos,
  };
}
