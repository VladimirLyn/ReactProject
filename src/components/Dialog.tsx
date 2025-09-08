
import messegeSend from '../store/store';
import './Dialog.css';

export const Dialog = () => {

    const messege = messegeSend(state => state.text);

    console.log("DialogWindow")

    return (
        <div className='DialogWindow'>
            <div>
                {messege}
            </div>
        </div>


    );
};
