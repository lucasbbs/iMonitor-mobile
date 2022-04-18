import React, { ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import BackIcons from '../../assets/images/icons/back.svg';
import Logo from '../../assets/images/Imonitor.svg';
import logoImg from '../../assets/images/logo.png';
import styles from './styles';

interface PageHeaderProps {
  title?: string;
  headerRight?: ReactNode;
  topTitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  topTitle,
  title = null,
  children,
  headerRight,
}) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handleGoBack}>
          <BackIcons width={30} />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>{topTitle}</Text>
        <Logo width={80} height={60} style={{ bottom: -22 }} />
      </View>
      {title && (
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>{title}</Text>
            {headerRight}
          </View>
        </View>
      )}
      {children}
    </View>
  );
};

export default PageHeader;
