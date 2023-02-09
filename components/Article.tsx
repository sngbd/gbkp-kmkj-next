import React from 'react';
import styles from '@/styles/Cards.module.css';
import Page from './Page';

const Article = ({ title, content }: any) => {
  return (
    <div>
      <div>
        <div className={styles['article']}>
          <Page title={title} content={content} />
        </div>
      </div>
    </div>
  );
}

export default Article;
