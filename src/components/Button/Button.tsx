import { StyledButton } from './Button.style';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  theme?: string;
};

const Button = ({ children, ...props }: Props) => (
  <StyledButton type="button" {...props}>
    {children}
  </StyledButton>
);

export { Button };
