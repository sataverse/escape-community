import styles from './signInButton.module.css';

interface Props {
  text: string;
}

export default function SignInButton({ text }: Props) {
  return <button className={styles.signinButton}>{text}</button>;
}
