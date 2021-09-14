import AddReminder from './components/AddReminder'
import ComingUp from './components/ComingUp'
import ReminderForm from './components/ReminderForm'
import {useState} from 'react'


function App() {
  const [birthdayList, updateBirthdayList] = useState([
    {
      id: 1,
      name: 'Raghav Kapur',
      dob: '26th March 1993',
    },
    {
      id: 2,
      name: 'Michael Jackson',
      dob: '10th April 1980',
    }
  ])
  return (
    <div className="container">
      <AddReminder />
      <ReminderForm />
      <ComingUp birthdayList={birthdayList}/>
    </div>
  );
}

export default App;
