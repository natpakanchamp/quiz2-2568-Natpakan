import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
  Group,
  InputLabel,
} from "@mantine/core";
import HeaderComponent from "./Header";

type AddExpenseModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string, 
    amount: number | string, 
    category: string
  ) => void;
};

export default function AddExpenseModal({}: AddExpenseModalProps) {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string | number>(0);
  const [category, setCategory] = useState<string | null>(null);
  const [nameError, setNameError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [categoryEror, setCategoryError] = useState(false);

  const handleSubmit = () => {
    let nameOk = true;
    let amountOk = true;
    let categoryOk = true;
    if (name === ""){
      nameOk = false;
      setNameError(true);
    }
    if (!amount){
      amountOk = false;
      setAmountError(true);
    }
    if (!category){
      categoryOk = false;
      setCategoryError(true);
    }
  };

  const inputExpenseNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameError(false);
    setName(event.target.value);
  };

  const amountOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAmountError(false);
    setAmount(event.target.value);
  };

  const categoryOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryError(false);
  }

  const computeTotalPayment = () => {
    let total: number = Number(amount);
    console.log(total + Number(amount));
  }

  // หากต้องการแปลง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (
    <Modal opened={false} onClose={() => {}}>
      <Stack>
        <TextInput 
          label="Input label"
          description="Input description"
          placeholder="Input placeholder"
        />
      </Stack>
    </Modal>
  );
}
