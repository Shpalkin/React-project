import React from 'react';
import './App.css';
import ContainerFunc from './components/ContainerFunc'; /* Компонент отвечает за задачу №1 и №2 */
import item from './components/item'; /* Входные данные для задачи №1 и №2 */
import Calendar from './components/Calendar'; /* Компонент для задачи №3 */

function App() {
  return (
    <React.StrictMode>

      {/* код для задачи №1 */}
      <ContainerFunc item={item} />

      {/* код для задачи №2*/}
      <ContainerFunc item={item} type='Class'/>

      {/* код для задачи №3*/}
      <Calendar date={new Date()} />

    </React.StrictMode>
  );
}

export default App;
