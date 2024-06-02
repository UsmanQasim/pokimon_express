import ResponseT from "../interfaces/MessageResponse";

export const customResponse = <T>({
  data,
  success,
  error,
  message,
  status,
}: ResponseT<T>) => {
  return {
    success,
    error,
    message,
    status,
    data,
  };
};

export default customResponse;
