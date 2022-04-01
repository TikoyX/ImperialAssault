import * as React from 'react';
import * as Data from "../Data/items.json";
import {FlatList, StyleSheet, Text, View, TouchableHighlight} from "react-native";
import {useEffect, useState} from "react";
import {SearchBar} from "@react-native-elements/base";
import {SearchBarDefault} from "@react-native-elements/base/dist/SearchBar/SearchBar-default";


const FlatListItemSeparator = () => {
    return (
        <View
            style={{
                height: 1,
                width: "100%",
                backgroundColor: "#000",
            }}
        />
    );
}

const ItemList = () => {

    const [itemData, setItemData] = useState()
    const [search, setSearch] = useState()
    const [arrayHolder, setArrayHolder] = useState([[]])

    useEffect(() => {
        setItemData(Data.Items)
        setArrayHolder(Data.Items)
    }, []);

    const sort_Alphabetically = () => {
        setItemData(Data.Items.sort((a, b) => a.name.localeCompare(b.name)));
    }

    const searchFunction = (text) => {
        const updatedData = arrayHolder.filter((item) => {
            const item_data = `${item.name.toUpperCase()})`;
            const text_data = text.toUpperCase();
            return item_data.indexOf(text_data) > -1;
        });
        setItemData(updatedData)
        setSearch(text);
    };

    return (
        <View>
            {/*<Text>
                Sort by
            </Text>
            <Button
                title="Sort A-Z"
                onPress={() => sort_Alphabetically()}
            />*/}
            <SearchBar
                placeholder="Search Here..."
                onChangeText={(text) => searchFunction(text)}
                value={search}
                theme={"lightTheme"}
                autoCorrect={false}
            />

            <FlatList
                data={itemData}
                extraData={itemData}
                ItemSeparatorComponent={FlatListItemSeparator}

                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    return (
                        <TouchableHighlight
                            activeOpacity={0.6}
                            underlayColor="#DDDDDD"
                            onPress={() => console.log('Pressed!')}
                        >
                            <View style={styles.listItem}>
                                <Text style={styles.listItemText}> {item.name} </Text>
                                {(() => {
                                    if (item.type === "Melee") {
                                        return (<Text>Melee</Text>)
                                    } else if (item.type === "Ranged") {
                                        return (<Text>Ranged</Text>)
                                    } else {
                                        return (<Text>Mod</Text>)
                                    }
                                })()}
                            </View>
                        </TouchableHighlight>
                    )
                }}
            />
        </View>
    )
}

export default ItemList

const styles = StyleSheet.create({
    listItem: {
        padding: 20,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    listItemText: {
        fontSize: 16
    },
    listHeaderContainer: {
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
    },
    listHeader: {
        fontSize: 20
    }
});
