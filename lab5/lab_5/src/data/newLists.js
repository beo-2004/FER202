import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.jpg';

export const newsList = [
    { id: 1, title: 'Woman bakes expletive-laden pies to get a rise out of her grandmother in annual tradition', description: 'What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition, wrote Jess Lydon.', images: img1 },
    { id: 2, title: 'Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans', description: 'Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.', images: img2 },
    { id: 3, title: 'Burger King is testing a new breakfast sandwich', description: 'This is a win for the flatbread fans.', images: img3 },
    { id: 4, title: 'Popeyes permanently adds chicken wings to its menu', description: 'And you can get em in five different flavors.', images: img4 },
    { id: 5, title: 'Top salmon with a sizzling mix of aromatics and spices', description: 'Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.', images: img5 },
    { id: 6, title: '80 Christmas dinner ideas for the ultimate holiday feast', description: 'Build the perfect Christmas menu with these delicious recipes.', images: img6 },
    { id: 7, title: 'How to make the easiest prime rib roast for the holidays', description: 'Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.', images: img7 },
    { id: 8, title: 'Turn leftover turkey into a flavorful Waldorf salad', description: 'This light, bright turkey salad is the best post-Thanksgiving lunch.', images: img8 },
  ];
  
  export const questions = [
    {
      id: 1,
      question: 'What is React?',
      options: ['Library', 'Framework', 'Language', 'Tool'],
      answer: 'Library',
      explanation: 'React is a JavaScript library for building user interfaces, particularly single-page applications.'
    },
    {
      id: 2,
      question: 'Which hook is used to manage state?',
      options: ['useRef', 'useState', 'useEffect', 'useMemo'],
      answer: 'useState',
      explanation: 'useState is the React hook used to add state to functional components.'
    },
    {
      id: 3,
      question: 'What does JSX stand for?',
      options: ['JavaScript XML', 'JavaScript Extension', 'JavaScript Syntax', 'JavaScript XHTML'],
      answer: 'JavaScript XML',
      explanation: 'JSX stands for JavaScript XML and allows you to write HTML-like code in JavaScript.'
    },
    {
      id: 4,
      question: 'Which method is used to render React components?',
      options: ['ReactDOM.render()', 'React.render()', 'Component.render()', 'App.render()'],
      answer: 'ReactDOM.render()',
      explanation: 'ReactDOM.render() is the method used to render React elements into the DOM.'
    },
    {
      id: 5,
      question: 'What is the purpose of useEffect hook?',
      options: ['State management', 'Side effects', 'Performance optimization', 'Event handling'],
      answer: 'Side effects',
      explanation: 'useEffect is used to perform side effects in functional components, such as data fetching or subscriptions.'
    },
    {
      id: 6,
      question: 'Which of these is NOT a valid React component type?',
      options: ['Functional Component', 'Class Component', 'Pure Component', 'Object Component'],
      answer: 'Object Component',
      explanation: 'React components can be functional, class-based, or pure components, but not object components.'
    },
    {
      id: 7,
      question: 'What is the correct way to pass data from parent to child component?',
      options: ['Props', 'State', 'Context', 'Redux'],
      answer: 'Props',
      explanation: 'Props (properties) are the correct way to pass data from parent to child components in React.'
    },
    {
      id: 8,
      question: 'Which lifecycle method is called after a component is mounted?',
      options: ['componentWillMount', 'componentDidMount', 'componentWillUpdate', 'componentDidUpdate'],
      answer: 'componentDidMount',
      explanation: 'componentDidMount is called after a component has been mounted to the DOM.'
    }
  ];
