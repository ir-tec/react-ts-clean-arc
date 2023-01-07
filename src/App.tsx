import { useEffect } from "react";
import TodoListViewModel from "./features/todo/presentation/todo_list_view_model";
import {
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@mui/material";
function App() {
  const { getTodos, todos } = TodoListViewModel();

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <List>
      {todos.map((todo, i) => {
        return (
          <ListItem key={i}>
            <ListItemIcon>
              <Checkbox checked={todo.isComplete} />
            </ListItemIcon>
            <ListItemText primary={todo.title} />
          </ListItem>
        );
      })}
    </List>
  );
}

export default App;
