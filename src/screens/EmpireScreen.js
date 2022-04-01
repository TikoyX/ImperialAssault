import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function EmpireScreen() {
    return (
        <View style={styles.container}>
            <Text> Imperial Screen</Text>
        </View>
    )
}

export default EmpireScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
