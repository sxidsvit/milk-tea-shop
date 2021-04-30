import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    StyleSheet
} from 'react-native';

import { connect } from 'react-redux'
import { TabButton, IconButton } from '../components'
import { dummyData, COLORS, FONTS, SIZES, icons } from '../constants'

const Location = ({ navigation, appTheme }) => {

    const [selectedTab, setSelectedTab] = React.useState(0)

    const renderHeader = () => {
        return (
            <SafeAreaView
                style={{
                    height: 110,
                    paddingTop: 10,
                    backgroundColor: COLORS.primary,
                    alignItems: 'center'
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.radius,
                    alignItems: 'center'
                }}>
                    {/* Back Button  */}
                    <IconButton
                        icon={icons.leftArrow}
                        onPress={() => navigation.goBack()}
                    />
                    {/* Title  */}
                    <View style={{
                        flex: 1,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: COLORS.white, ...FONTS.h1, fontSize: 25
                        }}> Locations </Text>
                    </View>

                    {/* Empty  */}
                    {/* <View style={{ width: 25 }} /> */}
                </View>


            </SafeAreaView>
        )
    }

    const renderTopBarSection = () => {
        return (
            <View
                style={{
                    flexDirection: 'row'
                }}>
                {/* Nearby  */}
                <TabButton
                    containerStyle={{ width: 80 }}
                    label='Nearby'
                    selected={selectedTab === 0}
                    onPress={() => setSelectedTab(0)}
                />
                {/* Previous  */}
                <TabButton
                    containerStyle={{ width: 100 }}
                    label='Previous'
                    selected={selectedTab === 1}
                    onPress={() => setSelectedTab(1)}
                />
                {/* Favourite  */}
                <TabButton
                    containerStyle={{ width: 100 }}
                    label='Favourite'
                    selected={selectedTab === 2}
                    onPress={() => setSelectedTab(2)}
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* Header  */}
            {renderHeader()}
            {/* Detail  */}
            <View style={{
                flex: 1,
                backgroundColor: appTheme.backgroundColor,
                marginTop: -50,
                borderTopLeftRadius: SIZES.radius * 2,
                borderTopRightRadius: SIZES.radius * 2,
                padding: SIZES.padding
            }}>
                {renderTopBarSection()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})

function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
    }
}

export default connect(mapStateToProps)(Location)
