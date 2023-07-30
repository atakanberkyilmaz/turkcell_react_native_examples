import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from "prop-types";

const Title = ({isVisible, text, color}) => {
    return(
        <View>
            {/* Props */}
            {/* <Text>{props.number+1}</Text> */}
            {
                props.isVisible && (
                <Text style = {[styles.title, {color: props.color}]}>{props.text}</Text>
                )}
      {/* <Text style = {[styles.title, {color: props.color}]}>{props.text}</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: '700',
    },
});

Title.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    number: PropTypes.number,
    isVisible: PropTypes.bool,
}

export default Title;