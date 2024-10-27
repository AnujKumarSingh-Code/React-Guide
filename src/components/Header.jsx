import reactImage from '../assets/react-core-concepts.png';




const reactDescription = ['Fundamantal' , 'Crucial' , 'Core'];

function getRandom(max){
  return Math.floor(Math.random() * (max + 1));
}



export default function Header() {
    const description = reactDescription[getRandom(2)];
    return(
      <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
}