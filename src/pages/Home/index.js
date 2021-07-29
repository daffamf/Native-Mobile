import React from 'react'
import { Text, View, ListItem } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import { BottomNavigation, Avatar } from 'react-native-paper';
import { Calendar } from 'react-native-calendario';


import './styles'

const HomeRoute = () =>
  <View>
    <Text>
      <Icon name="home" size={30} color="#4F8EF7" />
    </Text>

  </View>;

const CalenderRoute = () =>
  <View>
    <Text>
      <Icon name="calendar" size={30} color="#6d95da" />Calendar
    </Text>

    <Calendar
      onChange={(range) => console.log(range)}
      minDate={new Date(2018, 3, 20)}
      startDate={new Date(2018, 3, 30)}
      endDate={new Date(2018, 4, 5)}
      theme={{
        activeDayColor: {},
        monthTitleTextStyle: {
          color: '#6d95da',
          fontWeight: '300',
          fontSize: 16,
        },
        emptyMonthContainerStyle: {},
        emptyMonthTextStyle: {
          fontWeight: '200',
        },
        weekColumnsContainerStyle: {},
        weekColumnStyle: {
          paddingVertical: 10,
        },
        weekColumnTextStyle: {
          color: '#b6c1cd',
          fontSize: 13,
        },
        nonTouchableDayContainerStyle: {},
        nonTouchableDayTextStyle: {},
        startDateContainerStyle: {},
        endDateContainerStyle: {},
        dayContainerStyle: {},
        dayTextStyle: {
          color: '#2d4150',
          fontWeight: '200',
          fontSize: 15,
        },
        dayOutOfRangeContainerStyle: {},
        dayOutOfRangeTextStyle: {},
        todayContainerStyle: {},
        todayTextStyle: {
          color: '#6d95da',
        },
        activeDayContainerStyle: {
          backgroundColor: '#6d95da',
        },
        activeDayTextStyle: {
          color: 'white',
        },
        nonTouchableLastMonthDayTextStyle: {},
      }}
    />

  </View>


const UserRoute = () =>
  <View>
  </View>;


const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Home', title: 'Home', icon: 'home' },
    { key: 'calendar', title: 'calendar', icon: 'calendar' },
    { key: 'user', title: 'user', icon: 'human' },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    Home: HomeRoute,
    calendar: CalenderRoute,
    user: UserRoute,
  });

  return (
    <>

      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
};
export default MyComponent

