import styles from './Shop.module.css';

export const InputComponent = ({
  type,
  placeholder,
  data,
  handleChange,
  children,
}: {
  type: string;
  placeholder: string;
  data: { content: string; error: string };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}) => {
  return (
    <div className={styles.input_box}>
      <input
        type={type}
        placeholder={placeholder}
        value={data.content}
        onChange={handleChange}
      ></input>
      {children}
      {data.error && <p className={styles.error_message}>{data.error}</p>}
    </div>
  );
};
