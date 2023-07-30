import { View, Text } from 'react-native'
import React from 'react'
import PropTypes from "prop-types";

const Users = ({data}) => {
  return (
    <View>
      <Text>
        {
            JSON.stringify(data, null, 2)
        }
      </Text>
    </View>
  );
};
Users.propTypes ={
    data: PropTypes.Array, //hangi propertymiz hangi tipte veri alıyorsa onu belirtmek için kullanılır
};

export default Users