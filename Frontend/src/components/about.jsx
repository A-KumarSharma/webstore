import React from 'react';

export default function About() {
  return (
    <div className='dark:bg-slate-900 dark:text-white' style={styles.container}>
      <div className="  shadow-xl hover:scale-105 duration-200 dark:border" 
       style={styles.card}>
        <img src="R (1).png" alt="" style={styles.profileImage} />
        <h1 className='dark:bg-slate-900 dark:text-white' style={styles.header}>About AK Website Store</h1>
        <p  className='dark:bg-slate-900 dark:text-white' style={styles.paragraph}>Welcome to the About Page! This is where you can learn more about AK Website Store.</p>
        <section className='dark:bg-slate-900 dark:text-white' style={styles.section}>
          <h2 className='dark:bg-slate-900 dark:text-white' style={styles.subHeader}>Thory</h2>
          <p  className='dark:bg-slate-900 dark:text-white' style={styles.paragraph}>A website store is an online platform where businesses 
            display and sell their products or services. Think of it like a digital mall 
            where you can browse various items, read descriptions, check customer reviews
            , and make purchases—all from the comfort of your home. These stores are
             equipped with categories, search functionalities, and secure payment options
             , making shopping convenient and efficient. Whether you’re looking for the 
             latest gadgets, trendy clothes, or unique handmade goods, a website store
              has it all
            . How do you feel about online shopping?</p>
        </section>
        <section className='dark:bg-slate-900 dark:text-white' style={styles.section}>
          <h2 style={styles.subHeader}>Hobbies & Interests</h2>
          <p style={styles.paragraph}>In his free time, AK enjoys [MUSIC ,DANCE ,TALKS], [BASKETBALL, CIRCKET , FOOTBALL ,VOLLYBALL,ETC.GAMES!], and exploring new [Places/Topics].</p>
        </section>
        <section  className='dark:bg-slate-900 dark:text-white' style={styles.section}>
          <h2 style={styles.subHeader}>Contact</h2>
          <p style={styles.paragraph}>If you'd like to get in touch with AK, you can reach him at <a href="mailto:sharmakshat2222@gmail.com" style={styles.emailLink}>sharmakshat2222@gmail.com</a>.</p>
        </section>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    padding: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '600px',
    width: '100%',
  },
  profileImage: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  header: {
    fontSize: '2em',
    marginBottom: '10px',
  },
  subHeader: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '1em',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    background: '#f9f9f9',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  emailLink: {
    color: '#007BFF',
    textDecoration: 'none',
  },
};

