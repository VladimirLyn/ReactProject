import {messegeSend } from '../store/store';
import './UserInput.css'

export const UserInput = () => {
const Send = messegeSend(state=>state.Send);
const userMessege = document.getElementById("Userinput")?.textContent;


    console.log("UserInputWindow")
    return (
        
        <div className='Input'>
           
            <input id='Userinput' className='MessegeBox' type="text" placeholder="Ваше сообщение" onKeyPress={handleKeyPress} />
        </div>
    );
};
const handleKeyPress = (event:any) => {
  if(event.key === 'Enter') 
    {
      messegeSend.getState().Send(document.getElementById("Userinput")?.value);
      // messegeSend().Send("asda".toLowerCase());
      // messegeSend().Display;
      alert(messegeSend.getState().text);
    }
};