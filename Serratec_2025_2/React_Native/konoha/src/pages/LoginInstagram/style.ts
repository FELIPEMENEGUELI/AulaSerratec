import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
  },

  titleInsta: {
    fontSize: 60,
    fontWeight: '800',
  },

  containerForms: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  input: {
    width: '100%',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    color: '#000',
    paddingRight: 50
  },

  containerInput: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    position: 'absolute',
    right: 10,
  },
  
  forgotPassword: {
    borderRadius: 6,
    width: '100%',
    height: 50,
    alignItems: 'flex-end',
  },

  textForgot: {
    color: '#0098FD',
    fontSize: 18,
    fontWeight: '600',
  },

  login: {
    backgroundColor: '#0098FD',
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },

  textLogin: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  containerLine: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },

  line: {
    width: '40%',
    height: 2,
    backgroundColor: '#ccc',
  },

  textOr: {
    fontSize: 18,
    color: '#555',
  },

  texCreateAccount: {
    fontSize: 18,
    color: '#555',
  },

  loginFacebook: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 25
  },

  containerCreateAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  containerBottom: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 15,
    flex: 0.2,
  }
});