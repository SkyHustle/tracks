import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

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
      <NavLink
        routeName='Signin'
        text='Already have an account? Sign in instead'
      />
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
  }
});

export default SignupScreen;

// <>This is called a fragment </>