import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView , Switch} from "react-native";
import { useNavigation } from '@react-navigation/native'
import { useState } from "react";

const Registration = () => {
    const navigation = useNavigation();
    const [enableSwitch , setEnableSwitch] = useState(false);
    // const [text, setText] = useState()
    const [fullName, setFullName] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [address, setAddress] = useState('');
    const [birthYear, setBirthYear] = useState('');


    const HandleInput = (text) =>{
        setFullName(text);
    }

    const HandleBloodGroup = (text) =>{
        setBloodGroup(text);
    }

    const HandleAddress = (text) =>{
        setAddress(text);
    }

    const HandleBirthYear = (text) =>{
        setBirthYear(text);
    }


    // submitButton
    const SubmitButton = () =>{
        navigation.navigate('Home');

        console.log(fullName);
        console.log(bloodGroup);
        console.log(address);
        console.log(birthYear);



    }

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
                <TextInput placeholder="Enter first and Last Name" style={style.input} value={fullName} onChangeText={HandleInput}/>
            </View>
            {/*BloodGroup  */}
            <View>
                <Text style={{marginBottom: 5}}>Blood Group</Text>
                <TextInput placeholder="Enter Blood Type" style={style.input} value={bloodGroup} onChangeText={HandleBloodGroup} />
            </View>
            {/* Address */}
            <View>
                <Text style={{marginBottom: 5}}>Address</Text>
                <TextInput placeholder="Enter Address" style={style.input} value={address}  onChangeText={HandleAddress}/>
            </View>
            {/* DOB */}
            <View>
                <Text style={{marginBottom: 5}}>Birth Year</Text>
                <TextInput placeholder="Enter your birth year" style={style.input} value={birthYear} onChangeText={HandleBirthYear}/>
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
            <TouchableOpacity style={style.button} onPress={SubmitButton}>
                <Text style={{color: 'white', fontWeight: 'bold', paddingLeft: 25}}>Complete</Text>
            </TouchableOpacity>
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
    button:{
        backgroundColor: '#F63634',
        padding: 17,
        alignSelf: 'center',
        borderRadius: 7,
        marginTop: 40,
        marginBottom: 20,
        width: '45%'
    },
    moreInfo:{
        fontWeight: 'bold', 
        fontSize: 20,
         marginBottom: 10

    }
})

export default Registration;