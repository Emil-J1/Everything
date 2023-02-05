import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback>
        <Image
          blurRadius={1}
          fadeDuration={300}
          style={[
            {
              width: 200,
              height: 200,
              borderRadius: 100,
              margin: 20,
              marginTop: 0,
              marginBottom: 0,
            },
            styles.flexEnd,
          ]}
          source={require("./assets/pictures/artiskok.jpeg")}
        />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <Image
          blurRadius={1}
          fadeDuration={300}
          style={{ width: 130, height: 130, borderRadius: 100, marginLeft: 40 }}
          source={require("./assets/pictures/artiskok.jpeg")}
        />
      </TouchableWithoutFeedback>

      <Pressable style={styles.openAppButton}>
        <Text style={styles.openAppButtonText}>
          Find dine varer på kort dato!
        </Text>
      </Pressable>

      <TouchableWithoutFeedback>
        <Image
          blurRadius={1}
          fadeDuration={300}
          style={[
            {
              width: 180,
              height: 180,
              borderRadius: 100,
              marginRight: 40,
              // marginTop: "35%",
              // marginBottom: "5%",
            },
            styles.flexEnd,
          ]}
          source={require("./assets/pictures/artiskok.jpeg")}
        />
      </TouchableWithoutFeedback>

      <Text id="TextPressed" style={styles.appName}>
        Madspilds App
      </Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3a5141",
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  appName: {
    flex: 1,
    color: "white",
    textAlign: "center",
    fontSize: 15,
    marginTop: 20,
  },
  roundImage: {
    borderRadius: "100%",
  },
  openAppButton: {
    height: "12%",
    width: "75%",
    alignSelf: "center",
    margin: "12.5%",
    marginBottom: "18%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#556e4b",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#a1a89d",
  },
  openAppButtonText: {
    width: "85%",
    // height: "auto",
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  flexEnd: {
    marginLeft: "auto",
  },
});
