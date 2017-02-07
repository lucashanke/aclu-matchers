import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import TwitterWidget from './TwitterWidget';

const styles = StyleSheet.create({
  footer: {
    maxWidth: '1024px',
    padding: '2rem 50px',
    margin: '0 auto',
    display: 'flex',
    '@media (max-width: 425px)': {
      flexDirection: 'column-reverse',
      padding: '2rem',
     }
  },
  a: {
    fontFamily: 'heading_regular',
    color: '#33373A',
    textDecoration: 'none',
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  about: {
    display: 'inline-block',
    fontSize: '1.3rem',
    marginRight: '0.5rem',
    fontFamily: 'heading_bold'
  },
  logo: {
    display: 'inline-block',
    width: '60%',
    maxWidth: '350px',
    '@media (max-width: 425px)': {
      margin: '2rem 0',
     }
  },
  footerDiv: {
    flexBasis: '50%',
    display: 'inline-block',
    verticalAlign: 'top',
    display: 'inline-flex',
    '@media (max-width: 425px)': {
      flexBasis: '100%'
     }
  },
  footerContainer: {
    background: '#ebebeb'
  },
  p: {
    margin: '5px 0',
    fontSize: '14px'
  }
});

export default () => (
  <div className={css(styles.footerContainer)}>
    <div className={css(styles.footer)}>
        <a className={css(styles.a, styles.footerDiv)} href="https://docs.google.com/document/d/1uQda1goIN5m1Rb5anVNlWgU7Ra-uBEZBIa1GaHqfRH4/edit?usp=sharing" target="_blank">
          <img className={css(styles.logo)} alt='matchus logo' src='./logo_light.png' />
          <div>
            <div className={css(styles.about)}>About | Terms of service</div>
            <p className={css(styles.p)}>Copyright © 2017 matchUS, All right reserved.</p>
            <p className={css(styles.p)}>All specifications are subject to change without notice.</p>
            <p className={css(styles.p)}>matchUS is not affiliated with the American Civil Liberties Union.</p>
          </div>
        </a>
        <div className={'twitter-feed ' + css(styles.footerDiv)}>
          <TwitterWidget />
        </div>
    </div>
  </div>
);
