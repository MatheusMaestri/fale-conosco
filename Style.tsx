import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
  
    button: {
      marginTop: 5,
      alignItems: 'center',
      width: '70%',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 10,
      elevation: 5,
      backgroundColor: 'black',
      alignSelf: 'center'
    },
  
    text1: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  
    text2: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
      alignSelf: 'flex-start',
      marginLeft: 45
    },
  
    input: {
      height: 40,
      width: '80%',
      borderColor: 'gray',
      borderWidth: 3,
      marginBottom: 10,
      paddingHorizontal: 10,
      alignSelf: 'center',
      borderRadius: 5
    },
  
    noteInput: {
      height: 100,
      width: '80%',
      borderColor: 'gray',
      borderWidth: 3,
      marginBottom: 10,
      paddingHorizontal: 10,
      textAlignVertical: 'top',
      alignSelf: 'center',
      borderRadius: 5,
      paddingTop: 8
    },
  
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
  
    logo: {
      width: 80,
      height: 80,
      marginBottom: 30,
      alignSelf: 'flex-start',
      marginTop: -30,
      marginLeft: 20
    },
  
    logoInicio: {
      width: 200,
      height: 200,
      marginBottom: 30,
      alignSelf: 'center'
    }
  
  });

  export default styles
  