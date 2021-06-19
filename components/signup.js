import React  from "react";
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
  StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";
// import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { useDispatch } from "react-redux";
import { login } from "./slice";
import AsyncStorage from "@react-native-community/async-storage";

const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });
  const [firstname, setfirstname] = React.useState("");
  const [username, setusername] = React.useState("");
  const [lastname, setlastname] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [confirm_password, setconfirm_password] = React.useState("");


 

  const dispatch = useDispatch();
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const submit = () => {
    if (firstname == "") {
      alert("Please enter firstname");
    } else if (lastname == "") {
      alert("Please enter lastname");
    } else if (username == "") {
      alert("Please enter username");
    } else if (password == "") {
      alert("Please enter password");
    } else if (confirm_password == "") {
      alert("Please confirm password");
    } else if (confirm_password != password) {
      alert("Password and confirm password don't match");
    } else {
      dispatch(
        login({
          firstname: firstname,
          lastname: lastname,
          username: username,
          password: password,
        })
      );
      navigation.navigate("Signup");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>First Name</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="First Name"
              style={styles.textInput}
              autoCapitalize="none"
              value={firstname}
              onChangeText={(val) => setfirstname(val)}
            />
          </View>
          <Text
            style={
              (styles.text_footer,
              {
                marginTop: 35,
              })
            }
          >
            Last Name
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Last Name"
              style={styles.textInput}
              autoCapitalize="none"
              value={lastname}
              onChangeText={(val) => setlastname(val)}
            />
          </View>
          <Text
            style={
              (styles.text_footer,
              {
                marginTop: 35,
              })
            }
          >
            Username
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Username"
              style={styles.textInput}
              autoCapitalize="none"
              value={username}
              onChangeText={(val) => setusername(val)}
            />
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              value={password}
              onChangeText={(val) => setpassword(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Confirm Your Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              value={confirm_password}
              onChangeText={(val) => setconfirm_password(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => submit()}
              style={[
                styles.signIn,
                {
                  borderColor: "#009387",
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#009387",
                  },
                ]}
              >
                Step 2
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
    width: Dimensions.get("window").width,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === "ios" ? 3 : 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  color_textPrivate: {
    color: "grey",
  },
});
