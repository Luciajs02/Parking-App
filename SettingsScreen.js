import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


const SettingsScreen = ({ navigation }) => {

    const navigateToSecurity = () => {
        navigation.navigate('Home', { screen: 'Security' });
    };
    const navigateToNotifications = () => {
        navigation.navigate('Home', { screen: 'Notifications' });
    };
    const navigateToPayment = () => {
        navigation.navigate('Home', { screen: 'Payment configurations' });
     };
    const navigateToSubscription = () => {
        navigation.navigate('Home', { screen: 'My Subscription' });
    };
    const navigateToSupport = () => {
        navigation.navigate('Home', { screen: 'Help & Support' });
    };
    const navigateToTermsAndPolicies = () => {
        navigation.navigate('Home', { screen: 'Terms & Policies' });
    };
    const logout = () => {
        navigation.navigate('Home', { screen: 'Log Out' });
    };



    const accountItems = [
        {icon: "security", text: "Security", action: navigateToSecurity },
        {icon: "notifications-none", text: "Notifications", action: navigateToNotifications },
        {icon: "credit-card", text: "Payment", action: navigateToPayment },
    ];

    const supportItems = [
        {icon: "credit-card", text: "My subscription", action: navigateToSubscription },
        {icon: "help-outline", text: "Help & Support", action: navigateToSupport },
        {icon: "info-outline", text: "Terms and Policies", action: navigateToTermsAndPolicies },
    ];

    const actionItems = [
        {icon: "logout", text: " Log out", action: logout },
    ]


    const renderSettingsItem = ({ icon, text, action }) => (
        <TouchableOpacity 
            onPress={action}
            style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 9,
                paddingLeft: 20
            }}
        >
            <MaterialIcons name={icon} size={24} color="black" />
            <Text style={{
                marginLeft: 35,
                fontWeight: 600,
                fontSize: 16
            }}>{text}</Text>
        </TouchableOpacity>
    )



  return (
    <SafeAreaView style={{
        flex: 1,
        backgroundColor: "#FFFFFF"
    }}>
        <View style = {{
            marginHorizontal: 12,
            flexDirection: "row",
            justifyContent: "center"
        }}>
        </View>

        
        {/*Account*/}
        <ScrollView style = {{ marginHorizontal: 12 }}>
            <View style = {{ marginBottom: 10}}>
                <Text style={{ marginVertical: 18, marginLeft: 15 }}>Account</Text>
                <View style={{
                    borderRadius: 12,
                    backgroundColor: "white"
                }}>

                    {
                        accountItems.map((item, index ) => (
                            <React.Fragment key={index}>
                                {renderSettingsItem(item)}
                            </React.Fragment>
                        ))
                    }
                </View>
            </View>

            {/*Support and About*/}
            <View style = {{ marginBottom: 12}}>
                <Text style={{ marginVertical: 20, marginLeft: 15 }}>Support & About</Text>
                <View style={{
                    borderRadius: 12,
                    backgroundColor: "white"
                }}>

                    {
                        supportItems.map((item, index ) => (
                            <React.Fragment key={index}>
                                {renderSettingsItem(item)}
                            </React.Fragment>
                        ))
                    }
                </View>
            </View>


            {/*Actions Settings*/}
            <View style = {{ marginBottom: 12}}>
                <Text style={{ marginVertical: 20, marginLeft: 15 }}>Actions & settings</Text>
                <View style={{
                    borderRadius: 12,
                    backgroundColor: "white"
                }}>

                    {
                        actionItems.map((item, index ) => (
                            <React.Fragment key={index}>
                                {renderSettingsItem(item)}
                            </React.Fragment>
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
};

export default SettingsScreen;
