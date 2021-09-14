import Birthday from "./Birthday";

function ComingUp({ birthdayList }) {
  return (
    <div className="birthdays-container">
        {birthdayList.map((birthday)=>{
            return <Birthday key={birthday.id} bday={birthday}/> 
        })}
    </div>
  );
}
export default ComingUp;
