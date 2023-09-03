import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useEffect, useState } from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import S from './style'
import colors from '../../style/colors';
import LineError from '../../components/LineError';
import usernameValidation from '../../validations/usernameValidation';
import IO from '../../IO';

export default function Register() {
  const [username, setUsername] = useState({ value: '', error: usernameValidation('') });
  const [datePicker, setDatePicker] = useState({ show: false, value: new Date(), error: 'Debe ser mayor de 18 años' })

  const onInputBlur = () => {
    const value = username.value.trim()
    setUsername({ value, error: usernameValidation(value) })
  }

  const showDatePicker = () => {
    setDatePicker(prev => ({...prev, show: true}))
  }

  const handleSelectedDate = (date) => {
    const hasMoreThanEighteen = date.getTime() < Date.now() - 8 * 365 * 24 * 60 * 60 * 1000

    setDatePicker({ show: false, value: date, error: hasMoreThanEighteen ? '' : 'Debe ser mayor de 18 años' })
  }

  const handleCreateUser = async () => {
    if(username.error || datePicker.error) {
      return;
    }

    const user = await IO.createUser({ username: username.value, birthday: datePicker.value.getTime() });
  }

  return (
    <View style={S.container}>
      <Text style={{...S.defaultFont, ...S.title}}>
        ¡Bienvenido/a a <Text style={{ color: colors.LIGHT_BLUE }}>Check</Text> <Text style={{ color: colors.YELLOW }}>Store</Text>!
      </Text>
      <Text style={{...S.defaultFont, ...S.subtitle}}>
        Tu lugar preferido para registrar los movimientos de tu negocio
      </Text>
      <Text style={{...S.defaultFont, ...S.formTitle}}>
        Creá tu usuario
      </Text>
      <View style={{width: '100%', display: 'flex', gap: 10}}>
        <Text style={S.label}>
          <FontAwesome name="user" size={24} color='white' />&nbsp;&nbsp;Nombre
        </Text>
        {username.error && <LineError text={username.error} fontSize={14} />}
        <TextInput 
          placeholder='Ej. Agustin'
          placeholderTextColor='#A1A1A1'
          style={S.input}  
          value={username.value} 
          onBlur={onInputBlur}
          onChangeText={(value) => setUsername(prev => ({...prev, value: value}))}
        /> 
        <Text style={S.label}>
          <Fontisto name="date" size={24} color="white" />&nbsp;&nbsp;Fecha de cumpleaños
        </Text>
        {datePicker.error && <LineError text={datePicker.error} fontSize={14} />}
        <TouchableOpacity>
          <Text style={{...S.defaultFont, ...S.date}} onPress={showDatePicker}>
            {datePicker.value.toLocaleDateString()}
            &nbsp;&nbsp;
            <FontAwesome5 name="edit" size={18} color={colors.LIGHT_BLUE} />
          </Text>
        </TouchableOpacity>
          <Button 
            text='Crear usuario ' 
            fontSize={15} 
            bgcolor={colors.YELLOW} 
            color={colors.BLACK} 
            onPress={handleCreateUser}
            bold 
          />
      </View>
      <DateTimePickerModal 
          isVisible={datePicker.show}
          date={datePicker.value}
          mode="date"  
          onCancel={() => setDatePicker(prev => ({ ...prev, show: false }))} 
          onConfirm={handleSelectedDate} 
      />
    </View>
  );
}