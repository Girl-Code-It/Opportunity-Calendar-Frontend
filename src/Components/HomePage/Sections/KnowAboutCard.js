import React from 'react';
import { Card } from 'react-bootstrap';
import styles from '../../../CSS/KnowAboutCard.module.css';

function KnowAbout(props) {
  const imgModule = import(`../../../Assets/${props.knowAbout.imgUrl}`);
  const [imgSrc, setImgSrc] = React.useState('');

  // load images
  React.useEffect(() => {
    imgModule.then((mod) => {
      setImgSrc(mod.default);
    });
  }, []);

  return (
    <div id="knowAbout" className={styles.Box}>
      <a href={props.knowAbout.link}>
        <Card className={styles.Card}>
          <Card.Img
            variant="top"
            src={imgSrc}
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
