import { useState } from 'react';
import Box from './comoponents/Box';
import './styles/index.css';

interface ILetter {
  id: number;
  value: string;
}

function App() {
  const [letters, setLetters] = useState<ILetter[]>([
    {
      id: Math.random(),
      value: 'A',
    },
    {
      id: Math.random(),
      value: 'B',
    },
    {
      id: Math.random(),
      value: 'C',
    },
  ]);
  const [word, setWord] = useState('');

  const handlePrint = () => {
    const allLetters = letters.reduce((prev, cur) => prev + cur.value, '');

    setWord(allLetters);
  };

  const addBox = (index: number) => {
    setLetters((prev) => {
      const newLetters = [...prev];
      newLetters.splice(index, 0, { id: Math.random(), value: '' });

      return newLetters;
    });
  };

  return (
    <main>
      <div className='container'>
        <div className='letters'>
          {letters.map((l, index) => (
            <Box
              key={l.id}
              index={index}
              value={l.value}
              addBox={addBox}
              onChange={(val) => {
                setLetters((prev) => {
                  const newLetters = [...prev];
                  const index = newLetters.findIndex((e) => e.id == l.id);
                  if (index != -1) {
                    newLetters[index].value = val;
                  }
                  return newLetters;
                });
              }}
            />
          ))}
        </div>
        <button className='print-btn' onClick={handlePrint}>
          Print
        </button>

        <p>{word}</p>
      </div>
    </main>
  );
}

export default App;
