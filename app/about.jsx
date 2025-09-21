import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const About = () => {
  return (
    <LinearGradient
          colors={["#f3e34fff", "#d89b40ff", "#f33a2dff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.container}
        >
      <View style={styles.content}>
        <Text style={styles.title}>About</Text>
        <Text style={styles.text}>This is a Arts App page.</Text>
      </View>
    </LinearGradient>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  content: {
    alignItems: "center",
    
    padding: 20,
    borderRadius: 12,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});
