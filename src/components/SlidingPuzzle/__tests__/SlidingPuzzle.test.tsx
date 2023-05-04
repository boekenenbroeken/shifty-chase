import { render } from '@testing-library/react';
import { SlidingPuzzle } from '../SlidingPuzzle';

test('renders the Sliding Puzzle component', () => {
  const { getByText, getAllByTestId } = render(<SlidingPuzzle />);

  const heading = getByText(/Sliding Puzzle/i);
  expect(heading).toBeInTheDocument();

  const puzzlePieces = getAllByTestId('puzzle-piece');
  expect(puzzlePieces).toHaveLength(9);
});
