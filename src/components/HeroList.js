import * as React from 'react';
import * as Data from "../Data/heroes.js";
import {FlatList, StyleSheet, Text, View, TouchableHighlight} from "react-native";
import {useEffect, useState} from "react";
import {SearchBar} from "@react-native-elements/base";
import { useNavigation } from '@react-navigation/native';


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

const HeroList = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState()
    const [heroData, setHeroData] = useState()
    const [arrayHolder, setArrayHolder] = useState([[]])

    useEffect(() => {
        setHeroData(Data.Heroes)
        setArrayHolder(Data.Heroes)
    }, []);

    const sort_Alphabetically = () => {
        setHeroData(Data.Heroes.sort((a, b) => a.name.localeCompare(b.name)));
    }

    const searchFunction = (text) => {
        const updatedData = arrayHolder.filter((item) => {
            const item_data = `${item.name.toUpperCase()})`;
            const text_data = text.toUpperCase();
            return item_data.indexOf(text_data) > -1;
        });
        setHeroData(updatedData)
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
                data={heroData}
                extraData={heroData}
                ItemSeparatorComponent={FlatListItemSeparator}

                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    return (
                        <TouchableHighlight
                            activeOpacity={0.6}
                            underlayColor="#DDDDDD"
                            onPress={() => {
                                navigation.navigate("Hero", {
                                    heroData: item
                                });
                            }
                        }>
                            <View style={styles.listItem}>
                                <Text style={styles.listItemText}> {item.name} </Text>
                            </View>
                        </TouchableHighlight>
                    )
                }}
            />
        </View>
    )
}

export default HeroList

const styles = StyleSheet.create({
    listItem: {
        padding: 20,
        alignItems: 'center',
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
