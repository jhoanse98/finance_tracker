import { cx } from "@emotion/css";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { styles } from "./ExpensesFormStyles";
import type { Expense, ExpenseUser } from "../../interfaces/expenses";
import { useAuth } from "../../auth/useAuth";

interface IFormInput {
  title: string;
  amount: number;
  date: string;
  category: string;
  type: string;
}

interface Props {
  selectedExpense: Expense | null;
  onClose: () => void;
  createExpense: (newExpense: ExpenseUser) => Promise<void>;
  updateExpenseById: (
    expenseId: string,
    updatedExpense: Expense
  ) => Promise<void>;
}

const ExpensesForm = ({
  onClose,
  selectedExpense,
  createExpense,
  updateExpenseById,
}: Props) => {
  const { user } = useAuth();
  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      title: selectedExpense?.title || "",
      amount: selectedExpense?.amount || 0,
      date: selectedExpense?.date || "",
      category: selectedExpense?.category || "",
      type: selectedExpense?.type || "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (selectedExpense) {
      await updateExpenseById(selectedExpense.id, {
        ...selectedExpense,
        ...data,
      });
      onClose();
    } else {
      if (user) {
        await createExpense({ ...data, userId: user.id });
        onClose();
      }
    }
    console.log(data);
  };
  return (
    <form
      className={cx(styles.formContainer)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="title"
        control={control}
        rules={{
          required: "Título es requerido",
        }}
        render={({ field, fieldState }) => (
          <TextField
            label="Título"
            fullWidth
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            slotProps={{
              formHelperText: {
                sx: {
                  margin: 0,
                },
              },
            }}
            {...field}
          />
        )}
      />
      <Controller
        name="amount"
        control={control}
        rules={{
          required: "El monto es requerido",
          min: {
            value: 1,
            message: "El monto debe ser mayor que 0",
          },
        }}
        render={({ field, fieldState }) => (
          <TextField
            label="Monto"
            type="number"
            fullWidth
            slotProps={{
              formHelperText: {
                sx: {
                  margin: 0,
                },
              },
            }}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="date"
        control={control}
        rules={{
          required: "La fecha es requerida",
        }}
        render={({ field, fieldState }) => (
          <TextField
            type="date"
            fullWidth
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            slotProps={{
              formHelperText: {
                sx: {
                  margin: 0,
                },
              },
            }}
            {...field}
          />
        )}
      />
      <Controller
        name="category"
        control={control}
        rules={{
          required: "La categoría es requerida",
        }}
        render={({ field, fieldState }) => (
          <FormControl
            fullWidth
            error={!!fieldState.error}
            variant="standard"
            className={cx(styles.select)}
          >
            <InputLabel id="category">Categoría</InputLabel>
            <Select fullWidth labelId="category" {...field}>
              <MenuItem value="" disabled>
                Selecciona categoría
              </MenuItem>
              <MenuItem value="food">Comida</MenuItem>
              <MenuItem value="transportation">Transporte</MenuItem>
              <MenuItem value="entertainment">Entretenimiento</MenuItem>
              <MenuItem value="utilities">útiles</MenuItem>
              <MenuItem value="others">Otros</MenuItem>
            </Select>
            <FormHelperText>{fieldState.error?.message}</FormHelperText>
          </FormControl>
        )}
      />
      <Controller
        name="type"
        control={control}
        rules={{
          required: "El tipo es requerido",
        }}
        render={({ field, fieldState }) => (
          <FormControl
            fullWidth
            error={!!fieldState.error}
            variant="standard"
            className={cx(styles.select)}
          >
            <InputLabel id="type">Tipo</InputLabel>
            <Select fullWidth labelId="type" {...field}>
              <MenuItem value="" disabled>
                Select type
              </MenuItem>
              <MenuItem value="fixed">Fixed</MenuItem>
              <MenuItem value="ocassional">Occasional</MenuItem>
              <MenuItem value="Personal">Personal</MenuItem>
            </Select>
            <FormHelperText>{fieldState.error?.message}</FormHelperText>
          </FormControl>
        )}
      />
      <div className={cx(styles.footerModal)}>
        <Button
          variant="contained"
          type="button"
          onClick={() => {
            onClose();
          }}
        >
          Cancelar
        </Button>
        <Button variant="contained" color="primary" type="submit">
          {selectedExpense ? "Editar" : "Crear"}
        </Button>
      </div>
    </form>
  );
};

export default ExpensesForm;
