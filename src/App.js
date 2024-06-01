import './App.css';

import { SplitPanel } from './split-panel/SplitPanel';
import { Book } from './book/Book';

function App() {
  const sections = [
    <Book
      img='https://m.media-amazon.com/images/I/81TCqrwV51L._SL1500_.jpg'
      quotes={[
        'It seemed like a nice neighborhood to have bad habits in.',
        'Dead men are heavier than broken hearts.',
        'He sounded like a man who had slept well and didn\'t own too much money.'
      ]}
    />,
    <Book
      img='https://m.media-amazon.com/images/I/41K0oWHA8mL._SY445_SX342_.jpg'
      quotes={[
        'He looked poor enough to be honest',
        'Pipe smokers were solid men. She was going to be disaapointed in me',
        'I needed a drink, I needed a lot of life insurance, I neeed a vacation, I needed a home in the country. What I had was a coat, a hat and a gun. I put them on and went out of the room.'
      ]}
    />,
    <Book
      img='https://pictures.abebooks.com/isbn/9780241956298-us.jpg'
      quotes={[
        'He had a long nose that would be into things',
        'I spent two of my hours learning today. I am an expert',
        'You are working for me now. All my employees are required to get liquored up from time to time.'
      ]}
    />,
  ];

  return (
    <div className="App">
      <div className='panel-wrapper'>
        <SplitPanel sections={sections} />
      </div>
    </div>
  );
}

export default App;
