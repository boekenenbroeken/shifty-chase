type Props = {
  value: number;
  onClick: () => void;
};

const PuzzlePiece = ({ value, onClick }: Props) => {
  return (
    <div
      data-testid="puzzle-piece"
      onClick={onClick}
      style={{
        width: '80px',
        height: '80px',
        backgroundColor: value ? 'gray' : 'white',
        color: 'white',
        fontSize: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {value}
    </div>
  );
};

export { PuzzlePiece };
