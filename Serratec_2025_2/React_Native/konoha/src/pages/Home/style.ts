import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  
  background: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    resizeMode:"cover",
    paddingTop: Platform.OS === 'android' ? 50 : 60,
  },
});