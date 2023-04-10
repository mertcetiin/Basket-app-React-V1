import { useState } from 'react';
import './App.css';
import Index from './components/Index';
import { SimpleGrid, Input } from '@mantine/core';


const basketItems = [
  {
    id: 1,
    name: 'Headset',
    src: 'headset',
  },
  {
    id: 2,
    name: 'Keyboard',
    src: 'keyboard',
  },
  {
    id: 3,
    name: 'Laptop',
    src: 'laptop',
  },
  {
    id: 4,
    name: 'Mouse',
    src: 'mouse',
  },
  {
    id: 5,
    name: 'Phone',
    src: 'phone',
  },
  {
    id: 6,
    name: 'Watch',
    src: 'watch',
  },
];

function App() {

  const [searchValue, setSearchValue] = useState('');
  const filtered = basketItems.filter((item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0)

  return (
    <div className="App">
      <Input.Wrapper label="Search" className='search-bar'>
        <Input onChange={(e) => setSearchValue(e.target.value)} />
      </Input.Wrapper>

      <SimpleGrid
        cols={3}
        spacing="lg">
        {filtered.map(({ name, id, src }) => (
          <div key={id} ><Index name={name} src={src} /></div>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default App;
