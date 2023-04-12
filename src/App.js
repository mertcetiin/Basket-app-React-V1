import { useState } from 'react';
import './App.css';
import Index from './components/Index';
import { SimpleGrid, Input, Indicator, Button } from '@mantine/core';

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

  const [Items, setITems] = useState([]);

  let addToBasket = ({ id, name }) => {
    let basketIndex = Items.findIndex(item => item.id === id)
    if (basketIndex >= 0) {
      let _basketITems = [...Items];
      _basketITems[basketIndex].count += 1;
      setITems(_basketITems)
    } else {
      setITems([...Items, { id, name, count: 1 }]);
    }
  }

  const [searchValue, setSearchValue] = useState('');
  const filtered = basketItems.filter((item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0)

  return (
    <div className="App">
      <Input.Wrapper label="Search" className='search-bar'>
        <Input onChange={(e) => setSearchValue(e.target.value)} />
      </Input.Wrapper>

      <Indicator inline processing size={22} label={Items.length} color='red' className='Basket'>
        <Button>
          <i class="fa-solid fa-basket-shopping"></i>
        </Button>
      </Indicator>

      <SimpleGrid
        cols={3}
        spacing="lg">
        {filtered.map(({ name, id, src }) => (
          <div key={id} ><Index name={name} src={src} onAdd={() => addToBasket({ id, name })} /></div>
        ))}
      </SimpleGrid>


    </div>
  );
}

export default App;
