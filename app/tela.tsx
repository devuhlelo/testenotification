import { useRouter } from "expo-router";
import { Text, TextInput, View } from "react-native";

export default function TELA1() {

    const router = useRouter();

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <Text style={{ color: 'white' }}>
                TOKEN enviado!
            </Text>

            <TextInput value="2"  style={{ backgroundColor: 'white' }}/>




        </View>
    )
}