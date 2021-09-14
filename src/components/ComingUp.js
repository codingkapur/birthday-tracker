import Birthday from "./Birthday";

function ComingUp({ birthdayList, onDelete }) {
  return (
    <div className="birthdays-container">
        {birthdayList.map((birthday, index)=> (
            <Birthday key={index} bday={birthday} onDelete={onDelete}/> 
        ))}
    </div>
  );
}
export default ComingUp;
