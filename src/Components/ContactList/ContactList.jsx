import ContactItem from './ContactItem/ContactItem';
import s from './ContactList.module.scss';

export default function ContactList({ contactList }) {
  return (
    <>
      <h2 className={s.title} hidden>
        Contact List
      </h2>
      <ul className={`${s.list} ${s.listWrapper}`}>
        {contactList.map(el => {
          return (
            <li tabIndex="0" key={el.id} className={s.item}>
              <div className={s.itemWrapper}>
                <ContactItem contactObj={el} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
