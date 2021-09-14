function Birthday({ bday }) {
    return (
        <div className="birthday-container">
            <div className="birthday-container__left">
                <p>{bday.id}</p>
                <p>{bday.name}</p>
            </div>
            <div className="birthday-container__right">
                <p>{bday.dob}</p>
            </div>
        </div>
    )
}
export default Birthday