




import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { ThemeContext, themes } from '../ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDarkMode = theme === themes.dark;

  const toggleTheme = () => {
    setTheme(isDarkMode ? themes.light : themes.dark);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Settings</Text>
      <View style={styles.option}>
        <Text style={[styles.optionText, { color: theme.text }]}>Language</Text>
        <Icon name="chevron-forward" size={20} color={theme.text} />
      </View>
      <View style={styles.option}>
        <Text style={[styles.optionText, { color: theme.text }]}>Profile</Text>
        <Icon name="chevron-forward" size={20} color={theme.text} />
      </View>
      <View style={styles.option}>
        <Text style={[styles.optionText, { color: theme.text }]}>Contact Us</Text>
        <Icon name="chevron-forward" size={20} color={theme.text} />
      </View>
      <View style={styles.option}>
        <Text style={[styles.optionText, { color: theme.text }]}>Change Password</Text>
        <Icon name="chevron-forward" size={20} color={theme.text} />
      </View>
      <View style={styles.option}>
        <Text style={[styles.optionText, { color: theme.text }]}>Privacy Policy</Text>
        <Icon name="chevron-forward" size={20} color={theme.text} />
      </View>
      <View style={styles.option}>
        <Text style={[styles.optionText, { color: theme.text }]}>Theme</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
  },
});

export default SettingsScreen;


