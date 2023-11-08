import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Link} from '@react-navigation/native';
import {backgroundStyle} from '../../../commons/Utils/Utils';
import Section from '../../Section/Section';

const HomeScreen = (): React.ReactNode => {
  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Section title="Functions">
          <Link to="/Gps">GPS</Link>
          {'\n'}
          <Link to="/Camera">CAMERA</Link>
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
