/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {PanGestureHandler} from 'react-native-gesture-handler';

const headerSize = 108;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  modal: {
    position: 'absolute',
    transform: [{translateY: Dimensions.get('window').height - headerSize}],
    backgroundColor: '#f3f3f3',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingBottom: 25,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
});

const CustomBottomSheet = (props) => {
  let {children, title} = props;
  const [modalHeight, setModalHeight] = useState({
    previous: 0,
    current: 0,
  });

  const [modalSettings, setModalSettings] = useState({
    position: 'initial',
    headerSize: headerSize,
    modalSize: Dimensions.get('window').height - headerSize,
  });

  const resize = useCallback(
    (h) => {
      console.log(h);
      console.log(modalSettings);
    },
    [modalSettings],
  );

  useEffect(() => {
    resize(modalHeight);
    console.log(modalHeight);
  });

  const animation = () => {
    if (modalSettings.position === 'initial') {
      return {
        from: {
          transform: [
            {
              translateY: Dimensions.get('window').height - modalHeight.current,
            },
          ],
        },
        to: {
          transform: [
            {
              translateY:
                Dimensions.get('window').height - modalSettings.headerSize,
            },
          ],
        },
      };
    } else {
      return {
        from: {
          transform: [
            {
              translateY:
                Dimensions.get('window').height - modalHeight.previous,
            },
          ],
        },
        to: {
          transform: [
            {
              translateY: Dimensions.get('window').height - modalHeight.current,
            },
          ],
        },
      };
    }
  };

  return (
    <View style={style.container}>
      <Animatable.View
        animation={animation()}
        duration={200}
        style={style.modal}>
        <View
          style={{paddingBottom: 25}}
          onLayout={({nativeEvent}) => {
            setModalHeight({
              previous:
                modalSettings.position === 'initial'
                  ? headerSize
                  : modalHeight.current,
              current: nativeEvent.layout.height,
            });
          }}>
          <PanGestureHandler
            onHandlerStateChange={(e) => {
              console.log(e.nativeEvent.state);
            }}
            onGestureEvent={(e) => {
              // console.log(e.nativeEvent.translationY);
              if (e.nativeEvent.translationY < -10) {
                console.log(modalSettings.position);
                if (modalSettings.position === 'initial') {
                  setModalSettings({
                    ...modalSettings,
                    position: 'top',
                  });
                }
              }

              if (e.nativeEvent.translationY > 10) {
                if (modalSettings.position === 'top') {
                  setModalSettings({
                    ...modalSettings,
                    position: 'initial',
                  });
                }
              }
            }}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 40,
                paddingTop: 35,
                paddingBottom: 20,
                color: '#282828',
              }}>
              {title}
            </Text>
          </PanGestureHandler>
          {children}
        </View>
      </Animatable.View>
    </View>
  );
};

export default CustomBottomSheet;
