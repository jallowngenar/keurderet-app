import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView , Switch} from "react-native";
import { useNavigation } from '@react-navigation/native'
import { useState } from "react";
import Button from "../components/Button";


const Registration = () => {
    const navigation = useNavigation();
    const [enableSwitch , setEnableSwitch] = useState(false);


    const [RegistrationInfor, setRegistrationInfor] = useState({
        FullName: '',
        BloodGroup: '',
        Address: '',
        BirthYear: '',

    })

    const HandleInput = (text) => {
        setRegistrationInfor(text)
    }

    // Button Handler
    const ButtonHandler = () =>{
        navigation.navigate('Home');
    }

//  Tittle = 'sunbit';

 

    const ToggleSwitch = () =>{
        setEnableSwitch(previousState => !previousState)

    }

    
    return(
        <ScrollView>
            <View style={style.header}>
                <Text style={style.moreInfo}>More Information</Text>
                <Text style={{marginBottom: 20}}>Enter the code sent to the phone number you provided.</Text>
            </View>
            {/* Name */}
            <View style={{marginLeft: 20,}}>
            <View>
                <Text style={{marginBottom: 5}}>Full Name</Text>
                <TextInput placeholder="Enter first and Last Name" style={style.input}/>
            </View>
            {/*BloodGroup  */}
            <View>
                <Text style={{marginBottom: 5}}>Blood Group</Text>
                <TextInput placeholder="Enter Blood Type" style={style.input}/>
            </View>
            {/* Address */}
            <View>
                <Text style={{marginBottom: 5}}>Address</Text>
                <TextInput placeholder="Enter Address" style={style.input}/>
            </View>
            {/* DOB */}
            <View>
                <Text style={{marginBottom: 5}}>Birth Year</Text>
                <TextInput placeholder="Enter your birth year" style={style.input}/>
            </View>

            {/* available to donate switch */}
            <View>
                <Text style={{fontWeight: '600'}}>Available to Donate</Text>
                <Switch style={{alignSelf: 'flex-start'}}
                 trackColor={{false: 'grey', true: 'red'}}
                 thumbColor={enableSwitch ? 'white' : 'white'}
                 onValueChange={ToggleSwitch}
                 value={enableSwitch}
                 />
            </View>
            </View>

        {/* button */}
            <Button ButtonHandler={ButtonHandler}/>
        </ScrollView>
        
    )
}

const style = StyleSheet.create({
    header:{
        // margin: 20
        marginLeft: 20,
        marginTop: 40
    },
    input:{
        borderWidth: 0.2,
        padding: 11,
        borderRadius: 5,
        marginBottom: 20,
        width: '95%'
    }, 
    moreInfo:{
        fontWeight: 'bold', 
        fontSize: 20,
         marginBottom: 10

    }
})

export default Registration;