import styles from './iconTextLabel.module.css';

interface Props {
  icon: JSX.Element;
  text: string;
  font: number;
  textColor: string;
  bgColor: string;
}

export default function IconTextLabel({ icon, text, font, textColor, bgColor }: Props) {
  return (
    <div className={styles.iconText} style={{ color: textColor, backgroundColor: bgColor }}>
      {icon}
      <div style={{ fontSize: font }}>{text}</div>
    </div>
  );
}
