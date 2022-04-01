import * as React from 'react'
import {StyleSheet, View, SafeAreaView} from 'react-native';
import HeroList from "../components/HeroList";

function RebelScreen({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <HeroList />
            </View>
        </SafeAreaView>
    )
}

export default RebelScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});
