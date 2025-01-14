import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen() {
  const [showMessage, setShowMessage] = useState(false); // Estado para mostrar el mensaje de ADD
  const [showSettings, setShowSettings] = useState(false); // Estado para mostrar el menú de ajustes
  const [showWelcomeText, setShowWelcomeText] = useState(true); // Estado para controlar la visibilidad del mensaje de bienvenida
  const [activeIcon, setActiveIcon] = useState(null); // Estado para saber qué ícono está activo

  const handleAddPress = () => {
    setShowMessage(true);
    setShowSettings(false); // Aseguramos que el menú de ajustes no esté visible
    setShowWelcomeText(false); // Ocultamos el texto de bienvenida cuando se presiona ADD
    setActiveIcon('add'); // Establece el ícono ADD como activo
  };

  const handleSettingsPress = () => {
    setShowSettings(true);
    setShowMessage(false); // Aseguramos que el mensaje de ADD no esté visible
    setShowWelcomeText(false); // Ocultamos el texto de bienvenida cuando se presiona AJUSTES
    setActiveIcon('settings'); // Establece el ícono AJUSTES como activo
  };

  const handleHomePress = () => {
    setShowMessage(false);
    setShowSettings(false); // Aseguramos que el menú de ajustes no esté visible
    setShowWelcomeText(true); // Mostramos el mensaje de bienvenida cuando se presiona HOME
    setActiveIcon('home'); // Establece el ícono HOME como activo
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} scrollEnabled={false}>
        <View style={styles.imagePlaceholder}>
          <Image
            source={require('../img/cabecera_logo_home.png')} // Ajusta la ruta según la ubicación de tu imagen
            style={styles.image}
          />
        </View>

        {/* Mostrar texto de bienvenida solo si showWelcomeText es true */}
        {showWelcomeText && (
          <Text style={styles.welcomeText}>¡Bienvenido al Home!</Text>
        )}

        {/* Mostrar mensaje cuando se presiona ADD */}
        {showMessage && (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>¡Has presionado el botón ADD!</Text>
          </View>
        )}

        {/* Mostrar menú de ajustes cuando se presiona AJUSTES */}
        {showSettings && (
          <View style={styles.settingsMenu}>
            <Text style={styles.settingsText}>Menú de Ajustes</Text>
            {/* Aquí puedes añadir más opciones de configuración */}
            <Text style={styles.settingsOption}>Opción 1</Text>
            <Text style={styles.settingsOption}>Opción 2</Text>
            <Text style={styles.settingsOption}>Opción 3</Text>
          </View>
        )}
      </ScrollView>

      {/* Footer con iconos */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.footerButton, activeIcon === 'home' && styles.activeButton]}
          onPress={handleHomePress}
        >
          <Ionicons name="home-outline" size={30} color={activeIcon === 'home' ? 'green' : '#fff'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.footerButton, activeIcon === 'add' && styles.activeButton]}
          onPress={handleAddPress}
        >
          <Ionicons name="add-circle-outline" size={30} color={activeIcon === 'add' ? 'green' : '#fff'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.footerButton, activeIcon === 'settings' && styles.activeButton]}
          onPress={handleSettingsPress}
        >
          <Ionicons name="settings-outline" size={30} color={activeIcon === 'settings' ? 'green' : '#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Fondo oscuro
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 0, // Elimina cualquier margen superior
    paddingTop: 0, // Elimina el relleno superior
  },
  scrollContainer: {
    flexGrow: 1, // Permite que el contenido se expanda para llenar la pantalla
    justifyContent: 'flex-start', // Alinea el contenido desde la parte superior
    paddingBottom: 20, // Añadir algo de espacio en la parte inferior para evitar que el contenido quede cortado
  },
  imagePlaceholder: {
    height: 350, // Tamaño de la imagen
    width: '100%', // Ancho completo
    justifyContent: 'flex-start', // Asegura que la imagen se pegue a la parte superior
    alignItems: 'center',
    marginTop: -114, // Mueve la imagen hacia arriba (aproximadamente 3cm hacia arriba) y 2cm más abajo
    paddingTop: 0, // Elimina cualquier relleno superior
  },
  image: {
    width: 350, // Tamaño de la imagen
    height: 350, // Tamaño de la imagen
    resizeMode: 'contain', // Mantiene las proporciones de la imagen
  },
  welcomeText: {
    color: '#ffffff', // Color del texto
    fontSize: 20, // Tamaño de la fuente
    marginTop: 20, // Espacio arriba
    textAlign: 'center', // Centrado del texto
  },
  footer: {
    flexDirection: 'row', // Alinea los botones horizontalmente
    justifyContent: 'space-around', // Distribuye los botones con espacio entre ellos
    alignItems: 'center',
    width: '100%',
    height: 60, // Altura del footer
    backgroundColor: '#333', // Fondo oscuro para el footer
    position: 'absolute',
    bottom: 0, // Fija el footer en la parte inferior
    paddingHorizontal: 20, // Espacio a los lados del footer
  },
  footerButton: {
    width: 50, // Ancho de cada botón
    height: 50, // Alto de cada botón
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25, // Hacer los botones redondeados
  },
  activeButton: {
    backgroundColor: 'rgba(0, 255, 0, 0.2)', // Fondo verde cuando el ícono está activo
  },
  messageContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  messageText: {
    color: '#fff',
    fontSize: 18,
  },
  settingsMenu: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    width: '90%',
  },
  settingsText: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
  },
  settingsOption: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 5,
  },
});