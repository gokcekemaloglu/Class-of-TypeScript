import { Box, Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

//! 1. Kullanım yolu props type

// const AddTodoComp = ({
//   addTodo,
// }: {
//   addTodo: (text: string) => Promise<void>;
// }) => {
//   // const [text, setText] = useState<string>("")
//   const [text, setText] = useState(""); // initial değerden dolayı string olarak alıyor. pirimitive'lerde type tanımlamasını kendisi yapıyor (string, number, boolean gibi.. Yani 0, false, "" gibi...)
//   // TypeScript, string, boolean ve number gibi ilkel (primitive) değerlerin türlerini otomatik olarak algılar. Ancak, dizi (array) ve obje (object) gibi ilkel olmayan (non-primitive) yapılar, boş olduklarında her türlü değeri kabul edebilirler. Bu nedenle, bu tür veri yapıları için tür belirtmek önemlidir.
//! her zaman type belirtmemize gerek yok. Typescript type inference özelliği sayesinde inital değerine göre otomatik type ataması yapıyor.

//   const handleClick = () => {
//     addTodo(text);
//     setText("");
//   };

//   return (
//     <Box>
//       <TextField
//         id="outlined-disabled"
//         label="New Todo"
//         variant="outlined"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <Button
//         variant="contained"
//         color="success"
//         disabled={!text.trim()}
//         endIcon={<SaveIcon />}
//         onClick={handleClick}
//       >
//         Save Todo
//       </Button>
//     </Box>
//   );
// };

//! 2. Kullanım yolu props type (daha çok tercih edilir. Birden fazla props gönderileceği için ayrıca yazmak daha uygun)

interface IAddTodoComp {
    // addTodo: (text: string) => Promise<void>;
    addTodo: AddFn;
// başka propslarda buraya eklenebilir
}

const AddTodoComp = ({addTodo}: IAddTodoComp) => {
    // const [text, setText] = useState<string>("")
    const [text, setText] = useState(""); // initial değerden dolayı string olarak alıyor. pirimitive'lerde type tanımlamasını kendisi yapıyor (string, number, boolean gibi.. Yani 0, false, "" gibi...)
    // TypeScript, string, boolean ve number gibi ilkel (primitive) değerlerin türlerini otomatik olarak algılar. Ancak, dizi (array) ve obje (object) gibi ilkel olmayan (non-primitive) yapılar, boş olduklarında her türlü değeri kabul edebilirler. Bu nedenle, bu tür veri yapıları için tür belirtmek önemlidir.
  
    const handleClick = () => {
      addTodo(text);
      setText("");
    };
  
    return (
      <Box sx={{
        display: { xs: "block", sm: "flex" },
        justifyContent: { xs: "flex-start", sm: "center" },
        m: { xs: 1, sm: "auto" },
        height: { xs: "120px", sm: "80px" },
      }}>
        <TextField
          id="outlined-disabled"
          label="New Todo"
          variant="outlined"
          value={text}
          sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          variant="contained"
          color="success"
          disabled={!text.trim()}
          endIcon={<SaveIcon />}
          onClick={handleClick}
        >
          Save Todo
        </Button>
      </Box>
    );
  };

export default AddTodoComp;
