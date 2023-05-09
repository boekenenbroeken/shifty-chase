import { StyledHeading } from './Heading.style';

type Props = {
  children: string;
};

const Heading = ({ children }: Props) => (
  <StyledHeading>{children}</StyledHeading>
);

export { Heading };
