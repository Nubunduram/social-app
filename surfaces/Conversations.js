import React from "react";
import { View, TextInput, Pressable } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign as IconIcons } from "@expo/vector-icons";
import { ListOfConvos } from "../components/ListOfConvos";

export const Conversations = ({ navigation }) => {
    const headerHeight = useHeaderHeight();
    const [text, onChangeText] = React.useState("");

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: headerHeight + 30 }}>
            <View
                style={{
                    width: 650,
                    height: 570,
                    borderRadius: 155,
                    borderWidth: 1,
                    borderColor: "#EFE2E2",
                    position: "absolute",
                    top: 210,
                    left: -160,
                    transform: [{ rotate: "-45deg" }],
                }}
            />
            <View
                style={{
                    width: 650,
                    height: 570,
                    borderRadius: 155,
                    borderWidth: 1,
                    borderColor: "#EFE2E2",
                    position: "absolute",
                    top: 280,
                    left: -160,
                    transform: [{ rotate: "-45deg" }],
                }}
            />
            <View
                style={{
                    width: 650,
                    height: 570,
                    borderRadius: 155,
                    position: "absolute",
                    top: 350,
                    left: -160,
                    backgroundColor: "#E1F0F4",
                    transform: [{ rotate: "-45deg" }],
                }}
            />
            <View style={{ marginHorizontal: 30, position: "relative" }}>
                <TextInput
                    style={{
                        fontSize: 14,
                        paddingVertical: 12,
                        paddingLeft: 40,
                        marginHorizontal: 17,
                        borderRadius: 15,
                        backgroundColor: "#ffffff",
                        shadowColor: "#000000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.1,
                        shadowRadius: 9,
                    }}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="search contacts"
                />
                <IconIcons
                    name="search"
                    size={24}
                    color="#000000"
                    style={{ position: "absolute", left: 28, top: 6 }}
                />
            </View>
            <ListOfConvos navigation={navigation} searchQuery={text} />
        </SafeAreaView>
    );
};
