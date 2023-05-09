import { StyledMoveCount } from './MoveCount.style';

type Props = {
  count: number;
};

const MoveCount = ({ count }: Props) => (
  <StyledMoveCount>Move count: {count}</StyledMoveCount>
);

export { MoveCount };
