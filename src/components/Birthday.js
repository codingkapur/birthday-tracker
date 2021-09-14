import { FaTimes } from 'react-icons/fa'

function Birthday({ bday, onDelete }) {
    return (
        <div className="birthday-container">
            <div className="birthday-container__left">
                <p>{bday.id}</p>
                <p>{bday.name}</p>
            </div>
            <div className="birthday-container__right">
                <p>{bday.dob}</p>
                <FaTimes cursor="pointer" onClick={()=> onDelete(bday.id)}/>
            </div>
        </div>
    )
}
export default Birthday