// src/components/TransactionCard.js
import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

const TransactionCard = ({ title, details }) => (
  <Card style={{ marginBottom: 20 }}>
    <Card.Content>
      <Title>{title}</Title>
      <Paragraph>{details}</Paragraph>
    </Card.Content>
  </Card>
);

export default TransactionCard;
