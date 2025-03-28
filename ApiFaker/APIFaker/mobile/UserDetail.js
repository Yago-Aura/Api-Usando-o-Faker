import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

const API_URL = 'http://localhost:3000/peoples'; // Troque pelo IP da máquina se testar no celular físico

const UserDetail = ({ route }) => {
  const { user } = route.params;
  const [editUser, setEditUser] = useState(user);
  const [isEditing, setIsEditing] = useState(false);

  // Função para atualizar um campo específico
  const handleChange = (field, value) => {
    setEditUser({ ...editUser, [field]: value });
  };

  // Função para salvar as alterações e atualizar a tela imediatamente
  const saveChanges = async () => {
    try {
      await axios.put(`${API_URL}/${user.id}`, editUser);
      Alert.alert('Sucesso!', 'As informações foram atualizadas.');
      setIsEditing(false);
      setEditUser({ ...editUser }); // Atualiza o estado sem precisar recarregar a tela
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      Alert.alert('Erro', 'Não foi possível atualizar as informações.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: editUser.avatar }} style={styles.avatar} />

      <Text style={styles.label}>Primeiro nome:</Text>
      <TextInput 
        style={styles.input} 
        value={editUser.firstName} 
        onChangeText={(text) => handleChange('firstName', text)}
        editable={isEditing}
      />

      <Text style={styles.label}>Último nome:</Text>
      <TextInput 
        style={styles.input} 
        value={editUser.lastName} 
        onChangeText={(text) => handleChange('lastName', text)}
        editable={isEditing}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput 
        style={styles.input} 
        value={editUser.email} 
        onChangeText={(text) => handleChange('email', text)}
        editable={isEditing}
      />

      <Text style={styles.label}>Endereço:</Text>
      <TextInput 
        style={styles.input} 
        value={editUser.address} 
        onChangeText={(text) => handleChange('address', text)}
        editable={isEditing}
      />

      <TouchableOpacity style={styles.button} onPress={() => setIsEditing(!isEditing)}>
        <Text style={styles.buttonText}>{isEditing ? 'Cancelar' : 'Editar'}</Text>
      </TouchableOpacity>

      {isEditing && (
        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={saveChanges}>
          <Text style={styles.buttonText}>Salvar Alterações</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#0000ff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#0000ff',
    textAlign: 'center',
  },
  input: {
    fontSize: 16,
    marginTop: 4,
    color: '#fff',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#0000ff',
    width: '80%',
    paddingVertical: 4,
  },
  button: {
    backgroundColor: '#0000ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: '#121212',
    fontWeight: 'bold',
  }
});

export default UserDetail;