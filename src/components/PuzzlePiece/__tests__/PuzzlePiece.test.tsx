import { render, screen, fireEvent } from '@testing-library/react';
import { PuzzlePiece } from '../PuzzlePiece';

describe('PuzzlePiece', () => {
  it('renders the value passed as prop', () => {
    render(<PuzzlePiece value={2} onClick={() => {}} />);

    const valueElement = screen.getByText('2');

    expect(valueElement).toBeInTheDocument();
  });

  it('calls the onClick function passed as prop when clicked', () => {
    const handleClick = jest.fn();

    render(<PuzzlePiece value={2} onClick={handleClick} />);

    const piece = screen.getByTestId('puzzle-piece');

    fireEvent.click(piece);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders the correct background color for zero value prop', () => {
    render(<PuzzlePiece value={0} onClick={() => {}} />);

    const pieceWithZeroValue = screen.getByTestId('puzzle-piece');

    expect(pieceWithZeroValue).toHaveStyle({ backgroundColor: 'white' });
  });

  it('renders the correct background color for non-zero value prop', () => {
    render(<PuzzlePiece value={2} onClick={() => {}} />);

    const pieceWithNonZeroValue = screen.getByTestId('puzzle-piece');

    expect(pieceWithNonZeroValue).toHaveStyle({ backgroundColor: 'gray' });
  });
});
