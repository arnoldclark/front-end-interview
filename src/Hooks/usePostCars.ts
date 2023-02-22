import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";
import { postCar } from "../API/fetchCars";

interface PostCars {
  register: UseFormRegister<CarDto>;
  handleSubmit: UseFormHandleSubmit<CarDto>;
  onSubmit: SubmitHandler<CarDto>;
  errors: FieldErrors<CarDto>;
}

function usePostCars(): PostCars {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CarDto>();

  // CarDto: { make: string; model: string; reg: string; price: number; }
  // CarDto === Car object without an ID.

  // onSubmit === function, which is passed a CarDto object as a parameter
  const onSubmit: SubmitHandler<CarDto> = (formData) => {
    postCar(formData);
  };

  return { register, handleSubmit, onSubmit, errors };
}
export default usePostCars;
