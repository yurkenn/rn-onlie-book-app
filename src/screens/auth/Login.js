import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {colors} from '../../styles/styles';
import {loginFirebase} from '../../services/auth/firebase';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/authSlice';
import Input from '../../components/general/Input';
import CustomButton from '../../components/general/CustomButton';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = async values => {
    const loginAuth = await loginFirebase(values);
    console.log('loginAuth', loginAuth);
    dispatch(login(loginAuth));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the app!</Text>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.inner_container}>
            <Input
              style={styles.textInput}
              label="Email"
              mode="outlined"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email"
            />
            {errors.email && touched.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <Input
              style={styles.textInput}
              label="Password"
              mode="outlined"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              secureTextEntry={true}
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <CustomButton
              style={styles.button}
              mode="contained"
              onPress={handleSubmit}>
              <Text style={styles.buttonText}>Login</Text>
            </CustomButton>
            <TouchableOpacity
              mode="contained"
              onPress={() => navigation.navigate('Register')}
              Register
              style={styles.register}>
              <Text style={styles.text}>Don't you have an account ?</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: colors.tertiary,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    backgroundColor: 'white',
    width: 300,
    height: 50,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    elevation: 5,
  },
  button: {
    width: 300,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    backgroundColor: colors.tertiary,
    borderRadius: 10,
    marginTop: 10,
  },
  error: {
    color: 'white',
  },
  register: {
    marginTop: 10,
  },
  text: {
    color: colors.tertiary,
  },
});

export default Login;
