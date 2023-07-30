//rnfe -> react native function export

import { View, Text } from 'react-native'
import React from 'react'
import PropTypes from "prop-types";

const User = (props) => {
  return (
    <View>
      <Text>{JSON.stringify(props.data)}</Text>
    </View>
  );
};

User.PropTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        //https://legacy.reactjs.org/docs/typechecking-with-proptypes.html -> ctrl + sol tık

    }),
}

export default User