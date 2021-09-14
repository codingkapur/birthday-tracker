import Button from './Button'

function AddReminder({onClick, showForm}) {
    return (
        <header className="header">
            <h1>Add a Birthday Reminder</h1>
            <Button onClick={onClick} text={showForm? 'Close' : 'Add Birthday'}/>
        </header>
    )
}

export default AddReminder