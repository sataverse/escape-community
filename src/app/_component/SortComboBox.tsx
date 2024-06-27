import styles from './sortComboBox.module.css';

interface Props {
  list: string[];
}

export default function SortComboBox({ list }: Props) {
  return (
    <div className={styles.sortComboBoxWrapper}>
      <select>
        {list.map((item, idx) => (
          <option key={idx} value={idx}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
