import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import AuthContext from '../../services/AuthContext';

import IntroPage from '../../components/IntroPage/IntroPage';
import Button from '../../components/Button/Button';
import Shadow from '../../components/Shadow/Shadow';
import BackButton from '../../components/BackButton/BackButton';

import colors from '../../styles/colors';
import styles from './styles';

import user from '../../assets/icons/Account_Page/user.png';
import subscription from '../../assets/icons/Account_Page/crown.png';
import notification from '../../assets/icons/Account_Page/notification.png';
import favorite from '../../assets/icons/Account_Page/favorite-day.png';
import album from '../../assets/icons/Account_Page/album.png';
import FAQ from '../../assets/icons/Account_Page/FAQ.png';
import Contact from '../../assets/icons/Account_Page/Contact.png';
import Star from '../../assets/icons/Account_Page/Star.png';

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
            <View style={styles.IntroContainer}>
              <BackButton />
              <Text style={styles.title}>Profile</Text>
            </View>
          </IntroPage>
        </View>
        <View style={styles.AllSection}>
          <View style={styles.SectionContainer}>
            <Text style={styles.SectionTitle}>Account</Text>
            <View>
              <Button
                title="Account"
                onPress={() => navigation.navigate('User')}
                color={colors.backgroundElement}
                variant='alternate'
                icon={user}
              />
              <Shadow size="Normal" color={colors.primary} />
            </View>
          </View>
          <View style={styles.SectionContainer}>
            <Text style={styles.SectionTitle}>Personalization</Text>
            <View>
              <Button
                title="Subscription"
                color={colors.backgroundElement}
                variant='alternate-1'
                icon={subscription}
              />
              <Button
                title="Notifications"
                onPress={() => navigation.navigate('EditProfile')}
                color={colors.backgroundElement}
                variant='alternate-2'
                icon={notification}
              />
              <Button
                title="Favorites Days"
                onPress={() => navigation.navigate('EditProfile')}
                color={colors.backgroundElement}
                variant='alternate-2'
                icon={favorite}
              />
              <Button
                title="Album Photos"
                onPress={() => navigation.navigate('EditProfile')}
                color={colors.backgroundElement}
                variant='alternate-3'
                icon={album}
              />
              <Shadow size="Normal" color={colors.primary} />
            </View>
          </View>
          <View style={styles.SectionContainer}>
            <Text style={styles.SectionTitle}>Help</Text>
            <View>
              <Button
                title="FAQ"
                onPress={() => navigation.navigate('EditProfile')}
                color={colors.backgroundElement}
                variant='alternate-1'
                icon={FAQ}
              />
              <Button
                title="Contact Us"
                onPress={() => navigation.navigate('EditProfile')}
                color={colors.backgroundElement}
                variant='alternate-2'
                icon={Contact}
              />
              <Button
                title="Write a Review"
                onPress={() => navigation.navigate('EditProfile')}
                color={colors.backgroundElement}
                variant='alternate-3'
                icon={Star}
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