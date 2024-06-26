


import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../ThemeContext';

const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header section with profile picture, welcome message, and search icon */}
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image source={require('./Ediprofile.png')} style={styles.pic} />
          <View>
            <Text style={[styles.welcome, { color: theme.text }]}>Welcome back,</Text>
            <Text style={[styles.user, { color: theme.text }]}>Edward Sefah</Text>
          </View>
        </View>
        <Icon name="search" size={30} style={{ borderRadius: 15 }} color={theme.text} />
      </View>

      {/* Card image */}
      <Image source={require('./Card.png')} style={styles.masterCard} />

      {/* Icons row for different actions */}
      <View style={styles.iconsRow}>
        <TouchableOpacity style={styles.iconItem}>
          <Icon name="send" size={30} color={theme.icon} />
          <Text style={[styles.iconText, { color: theme.text }]}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconItem}>
          <Icon name="arrow-down-circle" size={30} color={theme.icon} />
          <Text style={[styles.iconText, { color: theme.text }]}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconItem}>
          <Icon name="cash" size={30} color={theme.icon} />
          <Text style={[styles.iconText, { color: theme.text }]}>Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconItem}>
          <Icon name="add-circle" size={30} color={theme.icon} />
          <Text style={[styles.iconText, { color: theme.text }]}>Top Up</Text>
        </TouchableOpacity>
      </View>

      {/* Transactions section */}
      <View style={styles.transactions}>
        <View style={styles.transactionsHeader}>
          <Text style={[styles.transactionsTitle, { color: theme.text }]}>Transactions</Text>
          <Text style={[styles.seeAll, { color: theme.text }]}>See all</Text>
        </View>

        {/* Individual transaction items */}
        <View style={styles.transactionItem}>
          <Image source={require("./apple1.png")} style={styles.transactionLogo} />
          <View  style={{marginLeft:-160}}>
            <Text style={[styles.transactionText, { color: theme.text }]}>App Store</Text>
            <Text style={styles.transactionSubText}>Entertainment</Text>
          </View>
          <Text style={[styles.transactionAmount, { color: theme.text }]}>-$599</Text>
        </View>
        <View style={styles.transactionItem}>
          <Image source={require("./Spotify1.png")} style={styles.transactionLogo} />
          <View  style={{marginLeft:-170}}>
            <Text style={[styles.transactionText, { color: theme.text }]}>Spotify</Text>
            <Text style={styles.transactionSubText}>Music</Text>
          </View>
          <Text style={[styles.transactionAmount, { color: theme.text }]}>-$1299</Text>
        </View>
        <View style={styles.transactionItem}>
          <Image source={require("./moneyTransfer.png")} style={styles.transactionLogo} />
          <View style={{marginLeft:-130}}>
            <Text style={[styles.transactionText, { color: theme.text }]}>Money transfer</Text>
            <Text style={styles.transactionSubText}>Transaction</Text>
          </View>
          <Text style={[styles.transactionAmount, { color: theme.text }]}>$300</Text>
        </View>
        <View style={styles.transactionItem}>
          <Image source={require("./grocery.png")} style={styles.transactionLogo} />
          <View  style={{marginLeft:-170}}>
            <Text style={[styles.transactionText, { color: theme.text }]}>Grocery</Text>
          </View>
          <Text style={[styles.transactionAmount, { color: theme.text }]}>-$88</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 16,
    marginLeft: 10,
  },
  user: {
    marginTop: 0,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  masterCard: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  pic: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconItem: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 5,
  },
  transactions: {
    marginBottom: 20,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 16,
    color: 'blue',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 4,
  },
  transactionLogo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  transactionText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  transactionSubText: {
    color: 'gray',
  },
  transactionAmount: {
    fontWeight: 'bold',
  },
});

export default HomeScreen;









