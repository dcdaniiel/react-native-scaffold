import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { useSelector } from 'react-redux';

export const Login = () => {
  const data = useSelector((state) => state.themeReducer.theme);

  return (
    <Layout level="4">
      <Text style={{ color: 'red' }}>LOGIN {data}</Text>
    </Layout>
  );
};
