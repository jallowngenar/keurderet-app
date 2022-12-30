import { useNavigation } from "@react-navigation/native";
import { Text,TouchableOpacity , StyleSheet} from "react-native";


function Button({Tittle, ButtonHandler}) {
    const navigation = useNavigation();
    
        return(
            <>
            <TouchableOpacity style={styles.button} onPress={ButtonHandler}>
                <Text style={{color: 'white', fontWeight: 'bold', paddingLeft: 25}}>{Tittle}</Text>
            </TouchableOpacity>
            </>
        )
    }

    const styles = StyleSheet.create({
        button:{
            backgroundColor: '#F63634',
            padding: 17,
            alignSelf: 'center',
            borderRadius: 7,
            marginTop: 40,
            marginBottom: 20,
            width: '45%'
        },
    })

    export default Button