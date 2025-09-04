import './Contacts.css'
export const Contacts = () => {
    console.log("ContactsWindow")
    return (
        <div className='Contacts'>
            
            <form className='Form'>
                <img className='Settings' src="https://img.icons8.com/external-anggara-filled-outline-anggara-putra/32/external-setting-user-interface-basic-anggara-filled-outline-anggara-putra.png" alt="external-setting-user-interface-basic-anggara-filled-outline-anggara-putra"/>             <input className='ContactsSearch' type="text" placeholder="Поиск контактов"/>
           </form>
            <ul className='ContactList'>
                <p className='ContactInList'>Контакт</p>
                <p className='ContactInList'>Контакт</p>
                <p className='ContactInList'>Контакт</p>
                <p className='ContactInList'>Контакт</p>
                <p className='ContactInList'>Контакт</p>
                <p className='ContactInList'>Контакт</p>
                <p className='ContactInList'>Контакт</p>
                <p className='ContactInList'>Контакт</p>
                <p className='ContactInList'>Контакт</p>
                <p className='ContactInList'>Контакт</p>
            </ul>
        </div>
    );
};
