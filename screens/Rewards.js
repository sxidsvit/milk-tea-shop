import React from 'react';
import {
    View,
    Text,
    FlatList,
    ImageBackground,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux'
import { HeaderBar, CustomButton } from '../components'
import { dummyData, COLORS, FONTS, SIZES, icons } from '../constants'

const Rewards = ({ navigation, appTheme }) => {
    return (
        <View style={styles.container}>
            {/* Header  */}
            <HeaderBar />
            {/* Details  */}

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


export default connect(mapStateToProps)(Rewards)
