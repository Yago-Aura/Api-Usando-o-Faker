import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './UserList';
import UserDetail from './UserDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#1E1E1E' }, headerTintColor: '#fff' }}>
        <Stack.Screen name="UserList" component={UserList} options={{ title: 'Usuários' }} />
        <Stack.Screen name="UserDetail" component={UserDetail} options={{ title: 'Detalhes do Usuário' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
