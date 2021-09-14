import AddReminder from './components/AddReminder'
import ComingUp from './components/ComingUp'
import ReminderForm from './components/ReminderForm'
import {useEffect, useState} from 'react'



function App() {
  const [showForm, setShowForm] = useState(false)
  const [birthdayList, updateBirthdayList] = useState([])

  useEffect(()=> {
    const retrieveData = async () => {
      const res = await getData()
      updateBirthdayList(res) 
    }
    retrieveData()
  }, [])

  const getData = async () => {
    const response = await fetch('http://localhost:5000/birthdays')
    const data = await response.json()
    return data
  }

  const addBirthday = async (birthday) => {
    const res = await fetch('http://localhost:5000/birthdays', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(birthday)
    })
    const data = await res.json()

    updateBirthdayList([...birthdayList, data])
  }

  const deleteBirthday = async (birthday) => {
    await fetch(`http://localhost:5000/birthdays/${birthday}`,{
      method: 'DELETE'
    })
    updateBirthdayList(birthdayList.filter((x)=>birthday !== x.id))
  }
  const onClick = () => setShowForm(()=> !showForm)
  return (
    <div className="container">
      <AddReminder onClick={onClick} showForm={showForm} />
      {showForm? <ReminderForm onAdd={addBirthday}/> : ''}
      <ComingUp birthdayList={birthdayList} onDelete={deleteBirthday}/>
    </div>
  );
}

export default App;
