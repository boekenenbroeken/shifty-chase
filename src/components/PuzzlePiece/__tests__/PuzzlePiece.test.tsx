import { render, fireEvent } from '@testing-library/react';
import { PuzzlePiece } from '../PuzzlePiece';

describe('PuzzlePiece', () => {
  it('renders the value passed as prop', () => {
    const { getByText } = render(<PuzzlePiece value={2} onClick={() => {}} />);

    const valueElement = getByText('2');

    expect(valueElement).toBeInTheDocument();
  });

  it('calls the onClick function passed as prop when clicked', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <PuzzlePiece value={2} onClick={handleClick} />
    );

    const piece = getByTestId('puzzle-piece');

    fireEvent.click(piece);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders the correct background color for zero value prop', () => {
    const { getByTestId } = render(
      <PuzzlePiece value={0} onClick={() => {}} />
    );

    const pieceWithZeroValue = getByTestId('puzzle-piece');

    expect(pieceWithZeroValue).toHaveStyle({ backgroundColor: 'white' });
  });

  it('renders the correct background color for non-zero value prop', () => {
    const { getByTestId } = render(
      <PuzzlePiece value={2} onClick={() => {}} />
    );

    const pieceWithNonZeroValue = getByTestId('puzzle-piece');

    expect(pieceWithNonZeroValue).toHaveStyle({ backgroundColor: 'gray' });
  });
});
