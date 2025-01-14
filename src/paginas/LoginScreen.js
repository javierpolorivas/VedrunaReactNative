import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase-config'; // Importar configuración de Firebase desde firebaseConfig.js

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');  // Para mostrar los mensajes de éxito o error

  const handleLogin = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setMessage('Inicio de sesión exitoso, bienvenido.'); // Mensaje de éxito
        navigation.navigate('TabScreen'); // Navegar a la pantalla principal después del login
      })
      .catch((error) => {
        setMessage('Error de inicio de sesión: ' + error.message); // Mensaje de error
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoSection}>
        <Image
          source={require('../img/logoVedruna.png')} // Reemplaza con la ubicación correcta de tu imagen
          style={styles.logo}
        />
      </View>

      <View style={styles.titleSection}>
        <Text style={styles.title}>VEDRUNA</Text>
        <Text style={styles.title}>EDUCACIÓN</Text>
      </View>

      <View style={styles.formSection}>
        <TextInput
          style={styles.input}
          placeholder="Introduzca su correo..."
          placeholderTextColor="#cccccc"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Introduzca su contraseña..."
          placeholderTextColor="#cccccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.forgotPassword}>¿Olvidaste la contraseña?</Text>
      </View>

      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>

      {/* Aquí es donde mostramos el mensaje de éxito o error */}
      <View style={styles.messageSection}>
        <Text style={styles.messageText}>{message}</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.line}></View>
        <Text style={styles.createAccount}>
          ¿No tienes cuenta?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.createAccountLink}>Crear cuenta</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,  // Aumentar el espacio superior
    paddingBottom: 20,
  },
  logoSection: {
    marginBottom: 20,
  },
  logo: {
    width: 150, // Imagen más pequeña
    height: 150, // Imagen más pequeña
    resizeMode: 'contain',
  },
  titleSection: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  formSection: {
    width: '80%',
  },
  input: {
    backgroundColor: '#333333',
    color: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  forgotPassword: {
    color: '#9FC63B',
    fontSize: 14,
    textAlign: 'right',
    marginBottom: 20,
  },
  buttonSection: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#9FC63B',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '100%',
  },
  loginButtonText: {
    color: 'black',
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
  footer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  line: {
    width: '80%',
    height: 1,
    backgroundColor: '#9FC63B',
    marginBottom: 5,
  },
  createAccount: {
    color: '#ffffff',
    fontSize: 14,
  },
  createAccountLink: {
    color: '#9FC63B',
    textDecorationLine: 'underline',
  },
});