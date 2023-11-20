import React, {ReactElement} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  Dimensions,
  StatusBar,
  ViewStyle,
  ViewProps,
  FlexStyle,
  ColorValue,
  StatusBarStyle,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import colors from '../constants/colors';
import {
  SafeAreaView,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import BottomTab from './BottomTab';

type Props = {
  backgroundColor: ColorValue | undefined;
  barStyle: StatusBarStyle | null | undefined;
};
const CustomStatusBar = ({
  backgroundColor,
  barStyle = 'dark-content',
}: //add more props StatusBar
Props) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{height: insets.top, backgroundColor}}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};
interface props {
  active: string;

  contentContainerStyle?: ViewStyle;
  justifyContent?: FlexStyle['justifyContent'];
  alignItems?: FlexStyle['alignItems'];
  children?: string | JSX.Element | JSX.Element[] | null;
  backgroundColor?: string;
  scrollStyle?: ViewStyle;
  withoutScroll?: boolean;
  navigation?: props;
  viewStyle?: ViewStyle;
  paddingBottom?: number;
}
const Block: React.FunctionComponent<props> = ({
  contentContainerStyle,
  justifyContent,
  alignItems,
  children,
  backgroundColor,
  scrollStyle,
  withoutScroll,
  navigation,
  viewStyle,
  paddingBottom,
  active,
}) => {
  const externalStyle: ViewStyle = {
    justifyContent: justifyContent || 'flex-start',
    alignItems: alignItems || 'stretch',
    backgroundColor: backgroundColor || colors.primary,
  };

  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={1}
        style={[{flex: 1}, externalStyle]}>
        <CustomStatusBar
          backgroundColor={colors.primary}
          barStyle={'light-content'}
        />
        {withoutScroll ? (
          <View style={[viewStyle]}>{children}</View>
        ) : (
          <ScrollView
            style={[scrollStyle, {flex: 1}]}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              contentContainerStyle,
              {paddingBottom: paddingBottom ? paddingBottom : 0},
            ]}
            keyboardShouldPersistTaps="handled">
            {children}
          </ScrollView>
        )}
        <BottomTab active={active} />
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
};

export default Block;
