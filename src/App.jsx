import './App.css';
import { useState } from 'react';

const colors = ["#D9043D", "#A6036D", "#0597F2", "#03A65A", "#F23005"]

function getRandomColor() {
  return colors [Math.floor(Math.random()*colors.length)];
}

function getRandomEmoji() {
  const emojis = ['😃', '😂', '🥳', '😎', '🤩', '🤪', '🎉', '🕺', '💃'];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

function App() {
  const [activity, setActivity] = useState("");
  const [bgColor, setBgColor] = useState('#ffffff');
  const [emoji, setEmoji] = useState('😃');

    const boredAct = async() => {
      const response = await fetch(`https://bored.api.lewagon.com/api/activity/`);
      const data = await response.json();
      setActivity(data.activity);

      setBgColor(getRandomColor());
      setEmoji(getRandomEmoji());
    } 



  return (
    <div className='container' style={{ backgroundColor: bgColor, transition: 'background 0.5s ease'}}>
      <h1>Bored? Click me! {emoji}</h1>
      <h3>Click to find out what activity the universe has come up with for you</h3>
      <div className='text'>
        <p key={activity + Date.now()}>{activity}</p>
      </div>
      <button className='btn' onClick={boredAct}>Click here</button>
    </div>
  )
}

export default App;