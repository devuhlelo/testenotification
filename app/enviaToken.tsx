import { useRouter } from "expo-router";
import { Text, TextInput, View } from "react-native";

export default function EnviaToken() {

    const router = useRouter();

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <Text style={{ color: 'white' }}>
                ENVIA TOKEN
            </Text>

            <TextInput value="2"  style={{ backgroundColor: 'white' }}/>




        </View>
    )
}