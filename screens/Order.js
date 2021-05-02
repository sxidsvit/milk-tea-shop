import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList,
    StyleSheet
} from 'react-native';

import Svg, { Circle } from 'react-native-svg'

import { connect } from 'react-redux'
import { TabButton, IconButton, VerticalTextButton } from '../components'
import { dummyData, COLORS, FONTS, SIZES, icons } from '../constants'

const Order = ({ navigation, route, appTheme }) => {

    const [selectedLocation, setSelecytedLocation] = React.useState(null)
    const [selectedTab, setSelectedTab] = React.useState(0)
    const [selectedCategory, setSelectedCategory] = React.useState('Milk Tea')
    const [menu, setMenu] = React.useState(null)

    React.useEffect(() => {
        let { selectedLocation } = route.params
        setSelecytedLocation(selectedLocation)
    })

    React.useEffect(() => {
        const menuList = dummyData.menuList.filter(menuItem => menuItem.category === selectedCategory)
        setMenu(menuList)
    }, [selectedCategory])

    const renderHeaderSection = () => {
        return (
            <SafeAreaView
                style={{
                    height: 160,
                    paddingTop: 10,
                    backgroundColor: COLORS.primary,
                    alignItems: 'center'
                }}>


                {/* Nav Bar  */}
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: SIZES.radius,
                        alignItems: 'center'
                    }}
                >
                    <IconButton
                        icon={icons.leftArrow}
                        onPress={() => navigation.goBack()}
                    />
                    <View style={{
                        flex: 1,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: COLORS.white, ...FONTS.h1, fontSize: 25
                        }}> Pick-Up order </Text>
                    </View>
                    <View style={{ width: 25 }} />
                </View>
                {/* Location  */}
                <View
                    style={{
                        marginTop: SIZES.radius,
                        backgroundColor: COLORS.white1,
                        paddingHorizontal: SIZES.radius,
                        paddingVertical: 5,
                        borderRadius: SIZES.padding
                    }}
                >
                    <Text style={{ color: COLORS.primary, ...FONTS.body3 }}> {selectedLocation?.title} </Text>
                </View>




            </SafeAreaView>
        )
    }

    const renderTopTabBarSection = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    marginTop: SIZES.radius,
                    justifyContent: 'center',
                    paddingLeft: SIZES.padding * 2,
                    paddingRight: SIZES.padding
                }}
            >
                {/* Tab buttons  */}
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}
                >
                    <TabButton
                        containerStyle={{ width: 60 }}
                        label='Menu'
                        selected={selectedTab === 0}
                        onPress={() => setSelectedTab(0)}
                    />
                    <TabButton
                        containerStyle={{ width: 90 }}
                        label='Previous'
                        selected={selectedTab === 1}
                        onPress={() => setSelectedTab(1)}
                    />
                    <TabButton
                        containerStyle={{ width: 90 }}
                        label='Favourite'
                        selected={selectedTab === 2}
                        onPress={() => setSelectedTab(2)}
                    />
                </View>
                {/* Order Numder  */}
                <View
                    style={{
                        width: 35,
                        height: 35,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: COLORS.primary
                    }}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>0</Text>
                </View>
            </View>
        )
    }


    const renderSideBar = () => {
        return (
            <View>
                <Svg height="65" width="65" viewBox="0 0 65 65">
                    <Circle cx='5' cy='65' r="60" fill={COLORS.primary} />
                </Svg>
                <View
                    style={{
                        marginTop: -10,
                        width: 65,
                        backgroundColor: COLORS.primary,
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1
                    }}
                >
                    <VerticalTextButton
                        label="Snack"
                        selected={selectedCategory === 'Snack'}
                        onPress={() => setSelectedCategory('Snack')}
                    />
                    <VerticalTextButton
                        label="Coffee"
                        containerStyle={{ marginTop: 50 }}
                        selected={selectedCategory === 'Coffee'}
                        onPress={() => setSelectedCategory('Coffee')}
                    />
                    <VerticalTextButton
                        label="Smoothie"
                        containerStyle={{ marginTop: 70, width: 100 }}
                        selected={selectedCategory === 'Smoothie'}
                        onPress={() => setSelectedCategory('Smoothie')}
                    />
                    <VerticalTextButton
                        label="Specialtea"
                        containerStyle={{ marginTop: 90, width: 100 }}
                        selected={selectedCategory === 'Specialtea'}
                        onPress={() => setSelectedCategory('Specialtea')}
                    />
                    <VerticalTextButton
                        label="Milk Tea"
                        containerStyle={{ marginTop: 80, width: 80 }}
                        selected={selectedCategory === 'Milk Tea'}
                        onPress={() => setSelectedCategory('Milk Tea')}
                    />
                </View>
                <Svg height="65" width="65" viewBox="0 0 65 65">
                    <Circle cx='5' cy='0' r="60" fill={COLORS.primary} />
                </Svg>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* Header  */}
            {renderHeaderSection()}
            {/* Detail  */}
            <View
                style={{
                    flex: 1,
                    backgroundColor: appTheme.backgroundColor,
                    marginTop: -45,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40
                }}
            >
                {/* Tab Bar  */}
                {renderTopTabBarSection()}

                {/* Side Bar & Listing  */}
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                    }}
                >
                    {/* Side Bar  */}
                    {renderSideBar()}
                    {/* Listing  */}
                    <FlatList
                        contentContainerStyle={{
                            marginTop: SIZES.padding,
                            paddingBottom: 50
                        }}
                        data={menu}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableWithoutFeedback
                                    onPress={() => navigation.navigate('OrderDetail', { selectedItem: item })}
                                >
                                    <View
                                        style={{
                                            height: 150,
                                            paddingHorizontal: SIZES.padding,
                                            marginTop: index > 0 ? SIZES.padding : 0,
                                            alignItems: 'flex-end',
                                            justifyContent: 'flex-end'
                                        }}>
                                        {/* Thumbnail  */}
                                        <View
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: SIZES.padding,
                                                width: 130,
                                                height: 140,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: SIZES.radius,
                                                backgroundColor: COLORS.lightYellow,
                                                zIndex: 1
                                            }}
                                        >
                                            <Image
                                                source={item.thumbnail}
                                                resizeMode="contain"
                                                style={{
                                                    width: 100,
                                                    height: 100
                                                }}

                                            />
                                        </View>
                                        {/* Details  */}
                                        <View
                                            style={{
                                                width: '70%',
                                                height: '85%',
                                                paddingLeft: '22%',
                                                paddingRight: SIZES.base,
                                                borderRadius: SIZES.radius,
                                                justifyContent: 'space-between',
                                                backgroundColor: COLORS.primary
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: COLORS.white,
                                                    ...FONTS.h2,
                                                    fontSize: 18,
                                                    lineHeight: 25
                                                }}
                                            >
                                                {item.name}
                                            </Text>
                                            <Text
                                                style={{
                                                    color: COLORS.lightYellow,
                                                    ...FONTS.h2,
                                                    fontSize: 18,
                                                }}
                                            >
                                                {item.price}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        }}
                    />
                </View>
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

export default connect(mapStateToProps)(Order)
