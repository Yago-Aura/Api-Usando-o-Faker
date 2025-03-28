import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl, Image, TouchableOpacity, Dimensions } from 'react-native';
import axios from 'axios';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const API_URL = 'http://localhost:3000/peoples'; // Para dispositivos físicos, troque pelo IP da máquina

// Calcula a largura dos cards para exibir 2 por linha
const { width } = Dimensions.get('window');
const CARD_MARGIN = 8;
const CARD_WIDTH = (width / 2) - (CARD_MARGIN * 3);

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  // Função para buscar os usuários na API
  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  // Carrega os dados quando a tela for aberta novamente
  useFocusEffect(
    useCallback(() => {
      fetchUsers();
    }, [])
  );

  // Puxa os dados ao puxar para baixo
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchUsers();
    setRefreshing(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{item.firstName} {item.lastName}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('UserDetail', { user: item })}
      >
        <Text style={styles.buttonText}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#fff" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  listContainer: {
    padding: CARD_MARGIN,
  },
  card: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    margin: CARD_MARGIN,
    borderRadius: 8,
    alignItems: 'center',
    width: CARD_WIDTH,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0000ff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#121212',
    fontWeight: 'bold',
  }
});

export default UserList;