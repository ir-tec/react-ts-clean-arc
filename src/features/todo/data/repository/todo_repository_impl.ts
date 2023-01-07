import { Todo } from "../../domain/model/todo";
import { TodoRepository } from "../../domain/repository/todo_repository";
import TodoDataSource from "../data_source/todo_data_sourse";

export class TodoRepositoryImpl implements TodoRepository {
  dataSource: TodoDataSource;

  constructor(_datasource: TodoDataSource) {
    this.dataSource = _datasource;
  }

  async getTodos(): Promise<Todo[]> {
    return this.dataSource.getTodos();
  }
}
