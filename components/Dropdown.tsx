import styles from '@/styles/Dropdown.module.css';
import Link from 'next/link';

function Dropdown({MenuItems}: any) {
  return (
    <>
      <ul className={styles['dropdown-menu']}>
        <div className={styles["items"]}>
        {MenuItems.map((item: any, index: any) => {
          return (
            <li key={index}>
              <Link className={styles['dropdown-link']} href={item.path}>
                {item.title}
              </Link>
            </li>
          );
        })}
        </div>
      </ul>
    </>
  );
}

export default Dropdown;
