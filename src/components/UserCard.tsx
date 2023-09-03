import { Link } from 'expo-router';
import { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface Props {
  id: number;
  firstName: string;
  lastName: string;
}

const UserCard: FC<Props> = ({ id, firstName, lastName }) => {
  return (
    <Link href={`users/${id}`}>
      <View>
        <Text>{`${firstName} ${lastName}`}</Text>
      </View>
    </Link>
  );
};

export default UserCard;
