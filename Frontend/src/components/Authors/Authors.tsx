import styles from './Authors.module.css';
import authorsArr from './authorsArr';

const Authors = () => {
  const authors = authorsArr.map((author) => author.author);

  return (
    <div className={styles.authors}>
      <p className={styles.authors_paragraph}>
        <span>
          Huge thanks to the incredible artists at Unsplash.com for lending
          their creative magic to our visuals!:
        </span>
        {authors.join(' & ')}
      </p>
    </div>
  );
};

export default Authors;
