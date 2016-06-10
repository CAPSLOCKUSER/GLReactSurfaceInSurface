/*
 * @providesModule App
 * */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Surface} from 'gl-react-native';
import {ContrastSaturationBrightness} from 'gl-react-contrast-saturation-brightness';

function App() {
  return (
    <View>
      <Surface
        width={100}
        height={100}
        style={s.outestSurface}
      >
        <ContrastSaturationBrightness
          saturation={0}
        >
          <Text>Hello</Text>
        </ContrastSaturationBrightness>
      </Surface>
      <Surface
        width={100}
        height={100}
        style={s.outestSurface}
      >
        <ContrastSaturationBrightness
          saturation={0}
        >

          <Surface
            width={100}
            height={100}
          >
            <ContrastSaturationBrightness
              saturation={0}
            >
              <Text>World</Text>
            </ContrastSaturationBrightness>
          </Surface>
        </ContrastSaturationBrightness>
      </Surface>
    </View>
  );
}

const s = StyleSheet.create({
  outestSurface: {
    margin: 50,
    borderWidth: 1,
    borderColor: 'black'
  },
});

App.propTypes = {};

export default App;
