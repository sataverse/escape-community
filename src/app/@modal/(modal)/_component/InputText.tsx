'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './inputText.module.css';

interface Props {
  type: 'text' | 'password';
  text: string;
}

export default function InputText({ type, text }: Props) {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    inputRef.current?.focus();
    setFocus(true);
  };
  useEffect(() => {
    inputRef.current?.addEventListener('focusout', () => setFocus(false));
    return () => inputRef.current?.removeEventListener('focusout', () => setFocus(false));
  }, []);

  return (
    <div
      className={styles.inputText}
      style={{ border: focus ? '2rem solid #ffd600' : '2rem solid transparent' }}
      onClick={focusInput}
    >
      <div>{text}</div>
      <input type={type} ref={inputRef} />
    </div>
  );
}
