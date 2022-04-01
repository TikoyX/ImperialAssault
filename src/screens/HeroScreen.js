import * as React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import {useState} from "react";

function HeroScreen({route, navigation}) {
    const {heroData} = route.params
    const [woundedState, setWoundedState] = useState(heroData.hero_sheet)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <SwitchSelector
                    style={styles.selector}
                    initial={0}
                    onPress={value => {
                        if (value === "Healthy") { setWoundedState(heroData.hero_sheet)}
                        else {
                            setWoundedState(heroData.hero_sheet_wounded)
                    }
                }}
                    options={[{label: "Healthy", value: "Healthy", activeColor: "#93c47d"}, {
                        label: "Wounded",
                        value: "Wounded",
                        activeColor: "#e06666"
                    }]}
                    borderColor={"#000000"}
                    hasPadding
                    backgroundColor={"#eeeeee"}
                    selectedColor={"#ffffff"}
                    textColor={"#bcbcbc"}
                    animationDuration={220}
                />

                <Image
                    style={styles.heroImage}
                    resizeMode={"contain"}
                    source={woundedState}
                />
                {/*<Text>
                    Health: {heroData.health}{"\n"}
                    Endurance: {heroData.endurance}{"\n"}
                    Speed: {heroData.speed}{"\n"}
                    Defense Die: {heroData.defense_die}
                </Text>*/}
                <Text style={styles.xpHeader}>
                    Weapon
                </Text>
                <Image
                    style={styles.cardImage}
                    resizeMode={"contain"}
                    source={heroData.weapon}
                />
                <View style={styles.xpContainer}>
                    <Text style={styles.xpHeader}>XP Cards</Text>
                    <Text style={styles.smallText}>1 XP</Text>
                    <View style={styles.cardContainer}>
                        <Image style={styles.cardImage}
                               resizeMode={"contain"}
                               source={heroData.xp_cards["1_1"]}
                        />
                        <Image style={styles.cardImage}
                               resizeMode={"contain"}
                               source={heroData.xp_cards["1_2"]}
                        />
                    </View>
                    <View style={styles.separator}/>
                    <Text style={styles.smallText}>2 XP</Text>
                    <View style={styles.cardContainer}>
                        <Image style={styles.cardImage}
                               resizeMode={"contain"}
                               source={heroData.xp_cards["2_1"]}
                        />
                        <Image style={styles.cardImage}
                               resizeMode={"contain"}
                               source={heroData.xp_cards["2_2"]}
                        />
                    </View>
                    <View style={styles.separator}/>
                    <Text style={styles.smallText}>3 XP</Text>
                    <View style={styles.cardContainer}>
                        <Image style={styles.cardImage}
                               resizeMode={"contain"}
                               source={heroData.xp_cards["3_1"]}
                        />
                        <Image style={styles.cardImage}
                               resizeMode={"contain"}
                               source={heroData.xp_cards["3_2"]}
                        />
                    </View>
                    <View style={styles.separator}/>
                    <Text style={styles.smallText}>4 XP</Text>
                    <View style={styles.cardContainer}>
                        <Image style={styles.cardImage}
                               resizeMode={"contain"}
                               source={heroData.xp_cards["4_1"]}
                        />
                        <Image style={styles.cardImage}
                               resizeMode={"contain"}
                               source={heroData.xp_cards["4_2"]}
                        />
                    </View>
                    <View style={styles.separator}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HeroScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        padding: 20
    },
    scrollView: {
        alignItems: 'center',
        justifyContent: "flex-start",
        padding: 20
    },
    heroImage: {
        marginTop: 10,
        width: 375,
        height: 300,
        borderWidth: 1
    },
    cardImage: {
        height: 270,
        width: 240
    },
    selector: {
        width: 220
    },
    selectorText: {
        color: "#bcbcbc"
    },
    selectorSelectedTest: {
        color: "#FFFFFF"
    },
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: "#607D8B",
        marginTop: 15,
        marginBottom: 15
    },
    xpContainer: {
      width: "100%"
    },
    xpHeader: {
        fontSize: 25,
        marginBottom: 10,
        marginTop: 20
    },
    cardContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    smallText: {
        fontSize: 18,
        marginBottom: 10
    }
});
