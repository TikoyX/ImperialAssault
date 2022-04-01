import * as React from 'react';
import {SafeAreaView, StyleSheet} from "react-native";
import WebView from "react-native-webview";

function CalculatorScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <WebView source={{uri: "http://mattyellen.github.io/imperial-assault-calculator/"}} />
        </SafeAreaView>
    )
}

export default CalculatorScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        padding: 20
    },
})
