import './App.css';
import Component from './Component.js';

function App() {
  return (
    <div className='App'>
      <h1>My Profile</h1>
      <div className='profile-box'>
          <Component img='https://media.licdn.com/dms/image/D4E03AQEOGh_9COab6g/profile-displayphoto-shrink_800_800/0/1640755144164?e=2147483647&v=beta&t=V_CEcS5NhukqXctU5e_OBCl4W8ZeX1cj1nDSGsc4WPs' name='Harsh' title='Front End Developer' skills={['Html','Css','Javascript','React Js']} />
      </div>
    </div>
  );
}

export default App;
