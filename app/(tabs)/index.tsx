import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [note, setNote] = useState<string>("");
  const [savedNote, setSavedNote] = useState<string | null>(null);

  const handleSend = () => {
    if (note.trim().length > 0) {
      setSavedNote(note);
      setNote("");
    }
  };

  return (
    <View style={styles.container}>
      {/* Usicons image at top */}
  <Image source={require("../../assets/images/usicons.png")} style={styles.usicons} />

      {/* Title */}
      <Text style={styles.header}>💌 Today’s Love Note</Text>

      {/* Show saved note */}
      {savedNote && (
  <View style={styles.savedNote}>
          <Text style={styles.savedNoteText}>{savedNote}</Text>
          <Text style={styles.date}>— {new Date().toDateString()}</Text>
        </View>
      )}

      {/* Input box */}
      <TextInput
        style={styles.input}
        placeholder="Write a sweet note to each other..."
        value={note}
        onChangeText={setNote}
        multiline
      />

      {/* Send button */}
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>send</Text>
      </TouchableOpacity>

      {/* Days together counter placeholder */}
      <View style={styles.counterBox}>
        <Text style={styles.counterText}>Day X together</Text>
        <Text style={styles.counterSub}>- months</Text>
        <Text style={styles.counterSub}>- years</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6eb",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  usicons: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  savedNote: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  savedNoteText: {
    fontSize: 16,
    color: "#d6336c",
  },
  date: {
    marginTop: 5,
    fontSize: 12,
    color: "#888",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    width: "100%",
    minHeight: 80,
    marginBottom: 15,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#ff8fa3",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
  counterBox: {
    backgroundColor: "#fddde6",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginTop: 20,
  },
  counterText: {
    fontSize: 18,
    fontWeight: "600",
  },
  counterSub: {
    fontSize: 14,
    color: "#666",
  },
});
