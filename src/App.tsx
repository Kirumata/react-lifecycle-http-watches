import { ChangeEvent, FormEvent, useState } from 'react';
import './App.css'
import InputForm from './components/InputForm/InputForm';
import { ClockProperties } from './types';
import ClockPanel from './components/ClockPanel/ClockPanel';



function App() {

  const clocks: ClockProperties[] = [
    {
      id: 1,
      name: "London",
      timezone: -3,
    },

    {
      id: 2,
      name: "Moscow",
      timezone: +3,
    },

    {
      id: 3,
      name: "Sydney",
      timezone: +8,
    },

  ];

  const [formState, setFormState] = useState<ClockProperties>({ id: -1, name: "", timezone: 0 });
  const [clocksList, setClocksList] = useState<ClockProperties[]>(clocks);


  function submit(e: React.FormEvent) {
    let newId: number = clocksList.length > 0 ? clocksList[clocksList.length - 1].id + 1 : 0;
    let newClock: ClockProperties = {
      id: newId,
      name: formState.name,
      timezone: formState.timezone,
    }
    setClocksList([...clocksList, newClock]);
    e.preventDefault();
  }

  function change(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormState(prevForm => ({ ...prevForm, [name]: value }));
  };

  const deleteClock = (id: number) => {
    let array: ClockProperties[] = [...clocksList];
    for (var i = 0; i < array.length; i++) {
      if (array[i].id == id) {
        array.splice(i, 1);
      }
    }
    setClocksList(array);
  }
  return (
    <>
      <InputForm handleSubmit={submit} handleChange={change}></InputForm >
      <ClockPanel clocks={clocksList} handleDelete={deleteClock} />
    </>
  )
}

export default App
