import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Block,
  ContactCard,
  ContactHeader,
  MissedCallsCard,
} from '../components';
import colors from '../constants/colors';

type IProps = {};

const Contacts: React.FunctionComponent<IProps> = () => {
  return (
    <Block active="Contacts" withoutScroll={true}>
      <ContactHeader />
      <Text style={styles.headings}>{`Missed calls (1)`}</Text>
      <MissedCallsCard />
      <Text style={styles.headings}>{`Contacts (1)`}</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 200}}>
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <View style={{height: 120}} />
      </ScrollView>
    </Block>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  headings: {
    color: colors.white,
    marginVertical: 8,
    marginHorizontal: 12,
    fontWeight: '700',
  },
});
