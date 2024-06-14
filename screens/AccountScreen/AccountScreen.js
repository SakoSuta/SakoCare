import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import AuthContext from '../../services/AuthContext';

import IntroPage from '../../components/IntroPage/IntroPage';
import Button from '../../components/Button/Button';
import Shadow from '../../components/Shadow/Shadow';

import colors from '../../styles/colors';
import styles from './styles';

import user from '../../assets/icons/Account_Page/user.png';

const AccountScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
      navigation.navigate('Login'); 
    } catch (error) {
      console.error('Logout failed!', error);
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.Intro}>
          <IntroPage>
            <Text style={styles.title}>Profile</Text>
          </IntroPage>
        </View>
        <View style={styles.AllSection}>
          <View style={styles.SectionContainer}>
            <Text style={styles.SectionTitle}>Account</Text>
            <View>
              <Button
                title="Account"
                onPress={() => navigation.navigate('EditProfile')}
                color={colors.backgroundElement}
                variant='alternate'
                icon={user}
              />
              <Shadow size="Normal" color={colors.primary} />
            </View>
          </View>
          <View style={styles.SectionContainer}>
            <Text style={styles.SectionTitle}>Account</Text>
            <View>
              <Button
                title="Account"
                onPress={() => navigation.navigate('EditProfile')}
                color={colors.backgroundElement}
                variant='alternate-1'
                icon={user}
              />
              <Button
                title="Account"
                onPress={() => navigation.navigate('EditProfile')}
                color={colors.backgroundElement}
                variant='alternate-2'
                icon={user}
              />
              <Button
                title="Account"
                onPress={() => navigation.navigate('EditProfile')}
                color={colors.backgroundElement}
                variant='alternate-3'
                icon={user}
              />
              <Shadow size="Normal" color={colors.primary} />
            </View>
          </View>
          <View style={styles.SectionContainer}>
            <Text style={styles.SectionTitle}>Account</Text>
            <View>
              <Button
                title="Account"
                onPress={() => navigation.navigate('EditProfile')}
                color={colors.backgroundElement}
                variant='alternate-1'
                icon={user}
              />
              <Button
                title="Account"
                onPress={() => navigation.navigate('EditProfile')}
                color={colors.backgroundElement}
                variant='alternate-2'
                icon={user}
              />
              <Button
                title="Account"
                onPress={() => navigation.navigate('EditProfile')}
                color={colors.backgroundElement}
                variant='alternate-2'
                icon={user}
              />
              <Button
                title="Account"
                onPress={() => navigation.navigate('EditProfile')}
                color={colors.backgroundElement}
                variant='alternate-2'
                icon={user}
              />
              <Button
                title="Account"
                onPress={() => navigation.navigate('EditProfile')}
                color={colors.backgroundElement}
                variant='alternate-3'
                icon={user}
              />
              <Shadow size="Normal" color={colors.primary} />
            </View>
          </View>
          <View style={styles.AccountControle}>
            <Button
              title="Logout"
              onPress={handleLogout}
              color={colors.primary}
            />
            <TouchableOpacity style={styles.DeleteAccount} onPress={handleLogout}>
              <Text style={styles.DeleteAccountText}>Delete Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AccountScreen;