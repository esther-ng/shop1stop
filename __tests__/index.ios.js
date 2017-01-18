import 'react-native';
import React from 'react';
import shop1stop from '../index.ios.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <shop1stop />
  );
});
