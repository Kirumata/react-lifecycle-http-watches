import { useState } from 'react';
import './App.css'
import ClockHandler from './components/ClockHandler/ClockHandler';
import InputForm from './components/InputForm/InputForm';
import { ClockProperties } from './types';
import ClockPanel from './components/ClockPanel/ClockPanel';



function App() {

  const clocks: ClockProperties[] = [
    {
      id: "1",
      name: "London",
      timezone: -3,
    },

    {
      id: "2",
      name: "Moscow",
      timezone: +3,
    },

    {
      id: "3",
      name: "Sydney",
      timezone: +8,
    },

  ];

  const [formState, setFormState] = useState<ClockProperties>({ id: "", name: "", timezone: 0 });
  const [clocksList, setClocksList] = useState<ClockProperties[]>(clocks);


  function submit(e) {
    setClocksList([...clocksList, formState]);
    e.preventDefault();
  }

  const change = ({ target }) => {
    const { name, value } = target;
    setFormState(prevForm => ({ ...prevForm, [name]: value }));
  }

  function deleteClock(e: string) {
    let array: ClockProperties[] = [...clocksList];
    for (var i = 0; i < array.length; i++) {
      if (array[i].id == e) {
        array.splice(i, 1);
      }
    }
    setClocksList(array);
  }
  return (
    <>
      <InputForm {...{
        handleSubmit: (e) => submit(e),
        handleChange: (e) => change(e)
      }}></InputForm>

      <ClockPanel clocks={clocksList} handleDelete={(e) => deleteClock(e)} />
    </>
  )
}

export default App
