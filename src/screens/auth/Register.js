import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {colors} from '../../styles/styles';
import {useDispatch} from 'react-redux';
import {registerFirebase} from '../../services/auth/firebase';
import {register} from '../../redux/authSlice';
import CustomTextInput from '../../components/general/CustomTextInput';
import CustomButton from '../../components/general/CustomButton';
const Register = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const onSubmit = async values => {
    const registerAuth = await registerFirebase(values);
    dispatch(register(registerAuth));
    console.log(registerAuth);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Register to the app!</Text>
      <Formik
        initialValues={{email: '', password: '', confirmPassword: ''}}
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
            <CustomTextInput
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
            <CustomTextInput
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
            <CustomTextInput
              style={styles.textInput}
              label="Confirm Password"
              mode="outlined"
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              placeholder="Confirm Password"
              secureTextEntry={true}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}
            <CustomButton
              style={styles.button}
              onPress={handleSubmit}
              title="Register">
              <Text style={styles.buttonText}>Register</Text>
            </CustomButton>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              title="Login">
              <Text>Do you already have an account</Text>
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
});
export default Register;
