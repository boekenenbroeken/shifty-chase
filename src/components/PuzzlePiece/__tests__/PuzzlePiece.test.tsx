import { render, fireEvent } from '@testing-library/react';
import { PuzzlePiece } from '../PuzzlePiece';
import img from '../assets/great_wave.jpg';

const props = {
  initialX: 0,
  initialY: 0,
  value: 2,
  onClick: jest.fn()
};

describe('PuzzlePiece', () => {
  it('renders the value passed as prop', () => {
    const { getByText } = render(<PuzzlePiece {...props} />);

    const valueElement = getByText('2');

    expect(valueElement).toBeInTheDocument();
  });

  it('calls the onClick function passed as prop when clicked', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <PuzzlePiece {...props} onClick={handleClick} />
    );

    const piece = getByTestId('puzzle-piece');

    fireEvent.click(piece);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders the correct background for zero value prop', () => {
    const { getByTestId } = render(<PuzzlePiece {...props} value={0} />);

    const pieceWithZeroValue = getByTestId('puzzle-piece');

    expect(pieceWithZeroValue).toHaveStyle({ backgroundImage: undefined });
  });

  it('renders the correct background for non-zero value prop', () => {
    const { getByTestId } = render(<PuzzlePiece {...props} />);

    const pieceWithNonZeroValue = getByTestId('puzzle-piece');

    expect(pieceWithNonZeroValue).toHaveStyle({
      backgroundImage: `url(${img})`
    });
  });
});
