import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const AccountsPage = () => {
  return (
    <View style={styles.container}>
      {/* Titre principal */}
      <View style={{ marginBottom: -20 }}>
        <Text style={styles.title}>Connect your accounts</Text>
      </View>
      <View style={{ paddingTop: 0 }}>
        <Text style={styles.title}>to BankCryptoWallet</Text>
      </View>

      {/* Texte explicatif */}
      <Text style={styles.description}>
        Connecting your accounts, such as <Text style={styles.highlight}>Binance</Text> and <Text style={styles.highlight}>BNP Paribas</Text>, allows you to centralize all your financial data in one place. This simplifies the management of your finances, whether it's your digital assets or traditional bank accounts.
      </Text>
      <Text style={styles.description}>
        By connecting your accounts, you can:
        {"\n"}- <Text style={styles.highlight}>Track your balances in real-time.</Text>
        {"\n"}- <Text style={styles.highlight}>Make better financial decisions.</Text>
        {"\n"}- <Text style={styles.highlight}>Automate actions and transactions securely.</Text>
      </Text>
      <Text style={styles.description}>
        We use advanced security protocols to ensure your data remains confidential and protected.
      </Text>

      {/* Boutons de connexion avec logos */}
      <TouchableOpacity style={styles.buttonBnpParibas} onPress={() => alert('Connect BNP Paribas')}>
        <Image
          source={require('../../assets/bnpLogo.png')}
          style={styles.logoBnpParibas}
        />
        <Text style={styles.buttonText}>Connect to BNP Paribas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonBinance} onPress={() => alert('Connect Binance')}>
        <Image
          source={require('../../assets/binanceLogo.png')}
          style={styles.logoBinance}
        />
        <Text style={styles.buttonText}>Connect to Binance</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    textAlign: 'justify',
    marginBottom: 20,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#000000FF',
  },
  buttonBnpParibas: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1FD625FF',
    width: '80%',
    padding: 10,
    borderRadius: 25,
    marginTop: 20,
    height: 50,
  },
  buttonBinance: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000FF',
    width: '80%',
    padding: 10,
    borderRadius: 25,
    marginTop: 20,
    height: 50,
  },
  logoBinance: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  logoBnpParibas: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonTextBiance: {
    color: '#f0b90b',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AccountsPage;
