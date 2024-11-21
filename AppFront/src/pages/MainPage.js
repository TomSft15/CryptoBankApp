import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitle}>Bank Account Balance</Text>
        <Text style={styles.balanceValue}>$12,345.67</Text>
      </View>

      <View style={styles.cryptoContainer}>
        <Text style={styles.cryptoTitle}>Crypto Portfolio Balance</Text>
        <Text style={styles.cryptoValue}>3.45 BTC</Text>
        <Text style={styles.cryptoValue}>(~$172,890.45)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  balanceContainer: {
    backgroundColor: '#FFFFFFFF', // Couleur verte pour le solde bancaire
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  balanceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  balanceValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  cryptoContainer: {
    backgroundColor: '#FFFFFFFF', // Couleur bleue pour le solde crypto
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  cryptoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  cryptoValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default MainPage;
