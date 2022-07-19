import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(ınputText) {
    setEnteredText(ınputText);
  }
  function addGoalHandler() {
    setGoals((currentCourseGoals) => [...currentCourseGoals, enteredText]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Set your goal here."
        />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.goalContainer}>
          {goals.map((goal) => (
            <Text>{goal}</Text>
          ))}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    display: "flex",
    justifyContent: "center",
  },
  container: {
    padding: 50,
  },
  textContainer: {
    marginTop: 30,
    flexDirection: "column",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    padding: 8,
    margin: 1,
  },
});
