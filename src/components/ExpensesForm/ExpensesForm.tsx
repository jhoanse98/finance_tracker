import { cx } from "@emotion/css";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { styles } from "./ExpensesFormStyles";

interface IFormInput {
  expenseName: string;
  amount: string | number;
  date: string;
  category: string;
  type: string;
}

interface Props {
  onClose: () => void;
}

const ExpensesForm = ({ onClose }: Props) => {
  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      expenseName: "",
      amount: 0,
      date: "",
      category: "",
      type: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <form
      className={cx(styles.formContainer)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="expenseName"
        control={control}
        render={({ field }) => (
          <TextField
            label="Expense Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        name="amount"
        control={control}
        render={({ field }) => (
          <TextField
            label="Amount"
            type="number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        name="date"
        control={control}
        render={({ field }) => (
          <TextField type="date" fullWidth margin="normal" {...field} />
        )}
      />
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <FormControl
            fullWidth
            variant="standard"
            className={cx(styles.select)}
          >
            <InputLabel id="category">Category</InputLabel>
            <Select fullWidth labelId="category" {...field}>
              <MenuItem value="" disabled>
                Select Category
              </MenuItem>
              <MenuItem value="food">Food</MenuItem>
              <MenuItem value="transportation">Transportation</MenuItem>
              <MenuItem value="entertainment">Entertainment</MenuItem>
              <MenuItem value="utilities">Utilities</MenuItem>
              <MenuItem value="others">Others</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="type"
        control={control}
        render={({ field }) => (
          <FormControl
            fullWidth
            variant="standard"
            className={cx(styles.select)}
          >
            <InputLabel id="type">Type</InputLabel>
            <Select fullWidth labelId="type" {...field}>
              <MenuItem value="" disabled>
                Select type
              </MenuItem>
              <MenuItem value="fixed">Fixed</MenuItem>
              <MenuItem value="ocassional">Occasional</MenuItem>
              <MenuItem value="Personal">Personal</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <div className={cx(styles.footerModal)}>
        <Button variant="contained" type="button" onClick={() => onClose()}>
          Close
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
};

export default ExpensesForm;
