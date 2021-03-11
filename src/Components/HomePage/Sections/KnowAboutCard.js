import React from 'react';
import { Card } from 'react-bootstrap';
import styles from '../../../CSS/KnowAboutCard.module.css';

function KnowAbout(props) {
  return (
    <div id="knowAbout" className={styles.Box}>
      <a  href={props.knowAbout.link}>
        <Card className={styles.Card}>
          <Card.Img
            variant="top"
            src={require('../../../Assets/' + props.knowAbout.imgUrl)}
            alt="Image"
            className={styles.CardImage}
          />
          <Card.Body>
            <a href={props.knowAbout.link}>
              <Card.Title className={styles.CardTitle}>
                {props.knowAbout.name}
              </Card.Title>
            </a>
            <div className={styles.Rectangle}></div>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
}

export default KnowAbout;
