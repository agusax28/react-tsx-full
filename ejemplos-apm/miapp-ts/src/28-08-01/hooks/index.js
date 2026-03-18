import { useState, useEffect } from "react";

export const useInputForm = (initValue, regexps) => {
  const [value, setValue] = useState(initValue);
  const [isValid, setValid] = useState(false);

  useEffect(() => {
    const valid = regexps.every((r) => {
      const rexp = new RegExp(r);
      return rexp.test(value);
    });
    setValid(valid);
  }, [value]);

  return {
    value,

    onChange: (e) => setValue(e.target.value),
    isValid,
  };
};
