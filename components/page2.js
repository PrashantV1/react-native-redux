import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useSelector} from 'react-redux';
import {selectuser} from"./slice";
import { useDispatch } from "react-redux";
import { login } from "./slice";


const SignupScreen = ({navigation}) => {
    const user=useSelector(selectuser);
    const abc={user}
    const dispatch = useDispatch();

    const [phone,setphone]= React.useState("")
    const [email,setemail]= React.useState("")

    const submit = () => {
        if (phone == "") {
          alert("Please enter phone");
        } else if (email == "") {
          alert("Please enter email");
        }  else {
          dispatch(
            login({
                phone: phone,
                email: email,
            })
          );
alert("Successfully submitted ",abc.user.username)
        }
      };

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Step 2</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_footer}>Phone</Text>
            <View style={styles.action}>
               
                <TextInput 
                    placeholder="Phone"
                    style={styles.textInput}
                    autoCapitalize="none"
                    value={phone}
                    onChangeText={(val) => setphone(val)}
                />
               
            </View>
            <Text style={[styles.text_footer,  {
                marginTop: 35,
              },]}>Email</Text>
            <View style={[styles.action,
              {
                marginTop: 35,
              },]}>
               
                <TextInput 
                    placeholder="Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    value={email}
                    onChangeText={(val) => setemail(val)}
                />
               
            </View>
         
         
            <View style={styles.button}>
            <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Go Back</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => submit()}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Submit</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });
