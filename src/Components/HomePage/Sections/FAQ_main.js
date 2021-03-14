import React from 'react';
import FAQCard from './FAQ_Cards';
import Data from './FAQ_Data';
import styles from '../../../CSS/FAQ.module.css';
import { Container, Row } from 'react-bootstrap';

class FAQS extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: Data,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    const prevcards = [...this.state.cards];
    const cards = prevcards.map((c) => {
      const u = { ...c };
      if (c.id === id) {
        u.open = !u.open;
      }
      return u;
    });
    this.setState({ cards });
  }

  render() {
    const QCards = this.state.cards.map((item) => (
      <FAQCard key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <div id="faqs" style={{ marginBottom: '100px' }}>
        <Container sm="fluid">
          <h1 className={`${styles.head}`}>
            Frequently Asked{' '}
            <span style={{ color: '#008dc8' }}> Questions</span>
          </h1>
          <Row style={{ marginTop: '50px' }}>
            <div>{QCards}</div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FAQS;
