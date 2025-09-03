import { PixelifySans_400Regular, PixelifySans_700Bold, useFonts } from "@expo-google-fonts/pixelify-sans";
import AppLoading from "expo-app-loading"; // for loading state
import React, { useState } from "react";
import {
  Image,
  Keyboard, KeyboardAvoidingView, Platform, ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import HeartIcon from "../../assets/images/heart.svg";

export default function Index() {
  const [fontsLoaded] = useFonts({
    PixelifySans_400Regular,
    PixelifySans_700Bold,
  });

  const [note, setNote] = useState<string>("");
  const [notes, setNotes] = useState<Array<{ text: string; date: string }>>([
    { text: "i thought of you today. i missed you lots", date: new Date().toDateString() },
  ]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleSend = () => {
    if (note.trim().length > 0) {
      setNotes(prev => [
        ...prev,
        { text: note, date: new Date().toDateString() }
      ]);
      setNote("");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView
          contentContainerStyle={[styles.container, { flexGrow: 1, paddingBottom: 60 }]}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
        >
          {/* Days together counter */}
          <View style={styles.counterBox}>
            <View style={{ alignItems: "center", marginBottom: 10 }}>
              <HeartIcon width={48} height={40} />
            </View>
            <Text style={styles.counterText}>Day X, Month X, Year X</Text>
          </View>

          {/* Avatars & heart */}
          <Image
            source={require("../../assets/images/usicons.png")}
            style={styles.usicons}
          />

          {/* Love Note Section */}
          <View style={styles.noteSection}>
            <Text style={styles.sectionTitle}>💌 Today’s Love Note</Text>

            {/* Show notes from today */}
            {notes
              .filter(n => n.date === new Date().toDateString())
              .map((n, idx) => (
                <View style={styles.savedNote} key={idx}>
                  <Text style={[styles.savedNoteText, { fontFamily: "PixelifySans_400Regular" }]}>“{n.text}”</Text>
                  <Text style={styles.date}>— {n.date}</Text>
                </View>
              ))}

            {/* Input box */}
            <TextInput
              style={[styles.input, { fontFamily: "PixelifySans_400Regular" }]}
              placeholder="Write a sweet note to each other..."
              value={note}
              onChangeText={setNote}
              multiline
            />

            {/* Send button */}
            <TouchableOpacity style={styles.button} onPress={handleSend}>
              <Text style={styles.buttonText}>send</Text>
            </TouchableOpacity>
          </View>

          {/* Spacer to ensure extra space below days together section */}
          <View style={{ height: 80 }} />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFE6EB",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 40,
  },
  usicons: {
    height: 400,
    width: 400,
    resizeMode: "contain",
    marginBottom: 0,
    marginTop: -65,
    zIndex: 1,
  },
  noteSection: {
    backgroundColor: "#FFF8F0",
    borderRadius: 13,
    borderLeftWidth: 5,
    borderLeftColor: "#FFB6B9",
    padding: 20,
    width: "90%",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 9.2,
    shadowOffset: { width: 0, height: 0 },
    elevation: 4,
    marginTop: -103,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "PixelifySans_700Bold",
    marginBottom: 15,
  textAlign: "center",
  letterSpacing: 1,
  },
  savedNote: {
    backgroundColor: "#FFEBEE",
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
  },
  savedNoteText: {
    fontSize: 13,
    fontFamily: "PixelifySans_400Regular",
    color: "#E36166",
    fontWeight: 400,
    letterSpacing: 0.65,
  },
  date: {
    fontSize: 12,
    fontFamily: "PixelifySans_400Regular",
    color: "rgba(117, 117, 117, 0.59)",
    marginTop: 4,
    letterSpacing: 0.65, 
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    minHeight: 60,
    marginBottom: 12,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#FFB6B9",
    alignSelf: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "PixelifySans_700Bold",
    textTransform: "lowercase",
  },
  counterBox: {
    // backgroundColor removed
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    width: "85%",
    marginTop: 40,
    marginBottom: -30,
  },
  counterText: {
    fontSize: 24,
    fontFamily: "PixelifySans_700Bold",
    color: "#E07579",
  },
  counterSub: {
    fontSize: 24,
    fontFamily: "PixelifySans_400Regular",
    color: "#E07579",
  },
  navBar: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  navIcon: {
    fontSize: 22,
    fontFamily: "PixelifySans_400Regular",
  },
});
