import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AccountsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect Your Accounts</Text>
      <Button title="Connect to Binance" onPress={() => alert('Connect Binance')} />
      <Button title="Connect to BNP Paribas" onPress={() => alert('Connect BNP Paribas')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
});

export default AccountsPage;
