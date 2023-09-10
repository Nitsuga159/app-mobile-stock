import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Drop from 'react-native-dropdown-picker';
import Button from '../Button';
import test from '../../test-device';
import logger from '../../logger';
import PreStyles from '../../style/prevalues';
import colors from '../../style/colors';

export default function Test() {
  const [{ funcName, query, show, response }, setTestOptions] = useState({ 
      show: false, query: '', funcName: test.demo.name, response: '' 
  })
  const [openDropdown, setOpenDropdown] = useState(false)

  const handleSetOptions = (options) => {
    setTestOptions(prev => ({...prev, ...options}))
  }

  const runTest = async () => {
    const response = test[funcName](...query.split(' '))

    if(response) {
        const finalResult = response instanceof Promise ? await response : response
        logger.info(Test, finalResult)
        alert(finalResult)
        handleSetOptions({ response })
    }
  }

  return (
    <>
        {
          show &&            
            <View style={styles.container}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.dropDownContainer}>
                  <Drop
                  open={openDropdown}
                  setOpen={setOpenDropdown}
                  value={funcName}
                  items={Object.keys(test).map(key => ({ label: key, value: key }))}
                  onSelectItem={({ value }) => handleSetOptions({ funcName: value })}
                  containerStyle={styles.dropDown}
                  />
                </View>
                <TextInput
                  value={query}
                  onChangeText={(query) => handleSetOptions({ query })}
                  style={styles.textInput}
                />
                <Button
                    text="Run"
                    bgcolor="#565656"
                    onPress={runTest}
                    />
                </View>
                <Text style={{...PreStyles.defaultFont, width: 75}} selectable>
                    {JSON.stringify(response)}
                </Text>
            </View>
        }
        <TouchableOpacity 
            style={{position: 'absolute', top: 10, right: 10, opacity: 0.3}} 
            onPress={() => handleSetOptions({ show: !show })}
        >
            <Text style={{...PreStyles.defaultFont, backgroundColor: colors.LIGHT_BLUE, padding: 5, borderRadius: 6}}>test</Text>
        </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    top: 15,
    left: 15,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15
  },
  dropDownContainer: {
    maxWidth: 100,
    elevation: 20,
    zIndex: 2,
  },
  dropDown: {
    elevation: 40,
  },
  textInput: {
    width: 100,
    backgroundColor: 'white',
    borderRadius: 6,
    paddingHorizontal: 6,
    marginBottom: 10,
    zIndex: 1,
  },
});
