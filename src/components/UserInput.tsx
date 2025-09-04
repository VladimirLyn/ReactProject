import './UserInput.css'
export const UserInput = () => {
    console.log("UserInputWindow")
    return (

        <div className='Input'>
           <form>
            <input className='MessegeBox' type="text" placeholder="Ваше ообщение"/>
           </form>
        </div>
    );
};
