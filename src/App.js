import AddReminder from './components/AddReminder'
import ComingUp from './components/ComingUp'
import ReminderForm from './components/ReminderForm'
import {useState} from 'react'


function App() {
  const [showForm, setShowForm] = useState(false)
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

  const onClick = () => setShowForm(()=> !showForm)
  return (
    <div className="container">
      <AddReminder onClick={onClick} showForm={showForm}/>
      {showForm? <ReminderForm /> : ''}
      <ComingUp birthdayList={birthdayList}/>
    </div>
  );
}

export default App;
