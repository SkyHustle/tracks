import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  return(
    <View style={styles.container}>
      <AuthForm
        headerText='Sign In'
        errorMessage={state.errorMessage}
        SubmitButtonText='Sign In'
        onSubmit={signin}
      />
      <NavLink
        routeName='Signup'
        text="Don't have an account? Sign Up"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;

// <>This is called a fragment </>