import {useState} from 'react'

function ReminderForm({ onAdd }) {

    const [name, updateName] = useState('')
    const [dob, updateDob] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name){
            alert("Add a fucking name son!")
            return
        }

        if(!dob){
            alert("Add a fucking date son!")
            return
        }
        
        onAdd({name, dob})
        updateName('')
        updateDob('')
    }

    return(
        <form className="reminder-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Name:</label>
                <input type="text" placeholder="Enter a Name" value={name} onChange = {(e)=>{updateName(e.target.value)}}></input> 
            </div>
            <div className="form-control">
                <label>Date of Birth:</label>
                <input type="date" placeholder="Enter Date of Birth" value={dob} onChange = {(e)=> {updateDob(e.target.value)}}></input> 
            </div>
                <input type="submit" value="Add Birthday" className="btn btn-add-birthday" onSubmit={onAdd}></input> 
        </form>
    )
}

export default ReminderForm