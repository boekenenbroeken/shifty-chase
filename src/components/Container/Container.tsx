import { StyledContainer } from './Container.style';

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => (
  <StyledContainer>{children}</StyledContainer>
);

export { Container };
