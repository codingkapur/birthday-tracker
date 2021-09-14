function ReminderForm() {
    return(
        <form className="reminder-form">
            <div className="form-control">
                <label>Name:</label>
                <input type="text" placeholder="Enter a Name"></input> 
            </div>
            <div className="form-control">
                <label>Date of Birth:</label>
                <input type="text" placeholder="Enter Date of Birth"></input> 
            </div>
                <input type="submit" value="Save Task" className="btn btn-save-task"></input> 
        </form>
    )
}

export default ReminderForm