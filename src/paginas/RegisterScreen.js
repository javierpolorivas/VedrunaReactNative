import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config'; // Asegúrate de importar correctamente el auth desde firebaseConfig

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');  // Para mostrar los mensajes de éxito o error

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden.');  // Mensaje de error
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setMessage('Tu cuenta ha sido creada con éxito.'); // Mensaje de éxito
        navigation.navigate('Login'); // Navegar a la pantalla de Login después del registro
      })
      .catch((error) => {
        let errorMessage = 'Hubo un problema al registrar tu cuenta.';
        
        switch (error.code) {
          case 'auth/email-already-in-use':
            errorMessage = 'El correo electrónico ya está en uso.';
            break;
          case 'auth/invalid-email':
            errorMessage = 'El correo electrónico no es válido.';
            break;
          case 'auth/weak-password':
            errorMessage = 'La contraseña es muy débil. Debe tener al menos 6 caracteres.';
            break;
          default:
            errorMessage = 'Hubo un error inesperado.';
            break;
        }

        setMessage(errorMessage);  // Mensaje de error
      });
  };

  return (
    <View style={styles.container}>
      {/* Imagen encima del formulario */}
      <Image
        source={require('../img/formulario 1.png')} // Asegúrate de poner la ruta correcta de la imagen
        style={styles.image}
      />

      <Text style={styles.title}>Completar los siguientes campos:</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>FINALIZAR</Text>
      </TouchableOpacity>

      {/* Aquí es donde mostramos el mensaje de éxito o error */}
      <View style={styles.messageSection}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  image: {
    width: 350,  // Ajusta el tamaño de la imagen
    height: 350, // Ajusta el tamaño de la imagen
    resizeMode: 'contain', // Hace que la imagen se ajuste sin deformarse
    marginBottom: 30, // Espacio debajo de la imagen
  },
  title: {
    color: '#a1e45a',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    width: '100%',
  },
  input: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    width: '100%',
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#a1e45a',
    marginTop: 20,
    width: 'auto',
  },
  buttonText: {
    color: '#a1e45a',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageSection: {
    width: '80%',
    marginTop: 15,
    alignItems: 'center',
  },
  messageText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
  },
});