import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

import { registerForPushNotificationsAsync } from './notifications';

export default function Login() {

    const router = useRouter();


    const handleLogin = async () => {
        // Aqui você faria a lógica de login real
        // Depois do login, gera token e envia para backend

        const token = await registerForPushNotificationsAsync();
        if (token) {
            await fetch('https://apps.uhlelo.com.br/EnviarNotificacao/salvar_token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_motorista: '123', // substitua pelo ID real do usuário
                    expo_push_token: token,
                }),
            });
        }

        router.push('/pages/tela');
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'black', justifyContent:'center', padding:20, gap:40 }}>
            <Text style={{ color: 'white', padding:10, fontSize:20 }}>
                Login
            </Text>



            <TouchableOpacity
                onPress={handleLogin}
                style={{ width: '90%', backgroundColor: 'white', padding:10 }}>
                <Text style={{ color: 'red' }}>
                    Logar
                </Text>
            </TouchableOpacity>
        </View>
    )
}