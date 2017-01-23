import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser, signUp, loginAnonymous } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onGuestPress() {
    this.props.loginAnonymous();
  }

  onSignUp() {
    const { email, password } = this.props;
    this.props.signUp({ email, password });
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <CardSection>
          <Spinner size="large" />
        </CardSection>
      );
    }

    return (
      <View>
      <CardSection>
      <Button
        onPress={this.onButtonPress.bind(this)}
        textColor="#FDFCF2"
        borderColor="#FDFCF2"
      >
        Login / Sign Up
      </Button>
      </CardSection>
      <CardSection>
      <Button
        onPress={this.onSignUp.bind(this)}
        textColor='#FDFCF2'
        borderColor='#FDFCF2'
      >
        Sign Up & Save Guest Data
      </Button>
      </CardSection>
      <CardSection>
        <Button
          onPress={this.onGuestPress.bind(this)}
          textColor='#FDFCF2'
          borderColor='#FDFCF2'
        >
          Guest Access
        </Button>
      </CardSection>
      </View>
    );
  }

  render() {
    return (
      <Image source={require('../images/login.png')} style={{ flex: 1, width: null, height: null }}>
      <Card>
        <CardSection style={{ flex: 1 }}>
          <Input
            textColor="#FDFCF2"
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
          secureTextEntry
          textColor="#FDFCF2"
          label="Password"
          placeholder="password"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <View>
        {this.renderButton()}
        </View>
      </Card>
      </Image>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser, signUp, loginAnonymous
})(LoginForm);
