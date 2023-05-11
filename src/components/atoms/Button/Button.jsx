import { StyledButton } from "./styles";

const Button = ({ action, text }) => {
  return <StyledButton onClick={action}>{text}</StyledButton>;
};

export default Button;
