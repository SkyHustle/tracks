import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return(
    <View style={styles.container}>
      <AuthForm
        headerText='Sign Up'
        errorMessage={state.errorMessage}
        SubmitButtonText='Sign Up'
        onSubmit={signup}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Spacer>
          <Text style={styles.link}>Already have an account? Sign in instead</Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  },
  link: {
    color: 'blue'
  }
});

export default SignupScreen;

// <>This is called a fragment</>