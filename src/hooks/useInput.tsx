import { ChangeEvent, useCallback } from "react";
import { useState } from "react";

type ReturnTypes = [
  string,
  (e: ChangeEvent) => void,
  React.Dispatch<React.SetStateAction<string>>,
];

const useInput = (initialData: string): ReturnTypes => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  }, []);

  return [value, handler, setValue];
};

export default useInput;
