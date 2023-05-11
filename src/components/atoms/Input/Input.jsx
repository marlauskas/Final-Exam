import { StyledInputWrapper, StyledIcon, StyledInput } from "./styles";
import { useRef, useEffect } from "react";

const Input = (props) => {
  const { type, value, setValue, icon, placeholder } = props;

  const handleClick = () => {};
  const inputWrapperRef = useRef();
  const inputRef = useRef();
  const iconRef = useRef();

  useEffect(() => {
    const handleOutsideInputClick = (e) => {
      e.stopPropagation();
    };

    document.addEventListener("click", handleOutsideInputClick);

    return () => {
      document.removeEventListener("click", handleOutsideInputClick);
    };
  }, []);

  return (
    <StyledInputWrapper ref={inputWrapperRef} {...props} onClick={handleClick}>
      {icon && <StyledIcon ref={iconRef}>{icon}</StyledIcon>}
      <StyledInput
        type={type || "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
        color='text'
        placeholder={placeholder}
        autoFocus
      />
    </StyledInputWrapper>
  );
};

export default Input;
