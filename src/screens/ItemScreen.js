import * as React from 'react'
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ItemList from "../components/ItemList";

function ItemScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ItemList />
        </SafeAreaView>
    )
}

export default ItemScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
