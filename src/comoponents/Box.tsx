interface BoxProps {
  value: string;
  onChange: (val: string) => void;
  index: number;
  addBox: (index: number) => void;
}

const Box: React.FC<BoxProps> = ({ value, onChange, index, addBox }) => {
  return (
    <div className='letter'>
      <button className='add-btn left' onClick={() => addBox(index)}>
        +
      </button>
      <input
        type='text'
        value={value}
        onChange={(e) => {
          onChange(e.target.value?.[1] ?? e.target.value);
        }}
      />

      <button className='add-btn right' onClick={() => addBox(index + 1)}>
        +
      </button>
    </div>
  );
};

export default Box;
