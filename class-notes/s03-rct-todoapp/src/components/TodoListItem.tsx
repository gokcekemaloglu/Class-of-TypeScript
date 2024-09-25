import { IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC } from "react";

// interface ITodoListItem {
//     todo: ITodoType
//     toggleTodo: ToggleFn
//     deleteTodo: DeleteFn
// }

interface ITodoListItem extends ITodoListFn {
  todo: ITodoType;
}

const TodoListItem: FC<ITodoListItem> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <ListItem
      disableGutters
      sx={{ padding: "1rem", cursor: "pointer" }}
      secondaryAction={
        <IconButton
          sx={{ "&:hover": { color: "red" } }}
          aria-label="Delete"
          onClick={() => deleteTodo(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText 
        primary={todo.task}
        sx={{ wordWrap: "break-word" }}
        onClick={() => toggleTodo(todo)}
      />
    </ListItem>
  );
};

export default TodoListItem;
