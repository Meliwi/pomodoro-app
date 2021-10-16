const SetPomodoro = () => {

    const [newTimer, setNewTimer] = useState({
        work:0.3,
        shortBreak: 0.2,
        longBreak: 1,
        activate: 'work'
    })

    return(
        <div className="form-container">
            {/* No validate means that input shouldn't be validated when submit*/}
            <form noValidate>
                <div>
                    <input className="input" name="work" onChange={handleChange} value={}></input>
                    <input className="input" name="shortBreak" onChange={handleChange} value={}></input>
                    <input className="input" name="longBreak" onChange={handleChange} value={}></input>
                </div>       
            </form>|
        </div>
    )
}

export default SetPomodoro;