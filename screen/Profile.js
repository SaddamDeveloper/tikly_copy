import * as React from 'react';
import { View, SafeAreaView, Image, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import styled from  'styled-components/native'
import Tabs from '../components/Tabs'
import {AntDesign, FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import DATA from  '../services/DATA';
import {
  Container,
  Title,
  Header,
  Avatar,
  Username,
  Content,
  Stats,
  Separator,
  StatsText,
  StatsColumn,
  StatsNumber,
  ProfileColumn,
  ProfileEdit,
  ProfileText,
  Bookmark,
  User,
  Item
} from './ProfileStyle';

const numColumns = 3;
const Profile = () => {
  _renderItem = ({ item }) => (
    <Item style={{ flex: 1, marginHorizontal: 5, marginBottom: 20 }}>
      <Image
        style={{ width: "100%", height: 140 }}
        source={{ uri: item.image }}
      />
    </Item>
  );
    return (
        <>
        <Container>
            <Header>
              <AntDesign
                  style={{ position: 'absolute', left: 10, top: 10 }}
                  name="adduser"
                  size={24}
                  color="black"
              />
              <Title>Matheus Castro</Title>
              <FontAwesome
                  style={{ position: 'absolute', right: 13, top: 12 }}
                  name="ellipsis-v"
                  size={24}
                  color="black"
              />
            </Header>
            <ScrollView>
                <Content>
                    <User>
                      <Avatar resizeMode='cover' source={require('../assets/avatar/02.jpg')} />
                    </User>
                    <Username>@matheuscastroweb</Username>
                    <Stats>
                        <StatsColumn>
                            <StatsNumber>1950</StatsNumber>
                            <StatsText>Following</StatsText>
                        </StatsColumn>
                            <Separator>|</Separator>
                        <StatsColumn>
                            <StatsNumber>650</StatsNumber>
                            <StatsText>Followers</StatsText>
                        </StatsColumn>
                            <Separator>|</Separator>
                        <StatsColumn>
                            <StatsNumber>950</StatsNumber>
                            <StatsText>Likes</StatsText>
                        </StatsColumn>
                    </Stats>
                    <ProfileColumn>
                      <ProfileEdit>
                        <ProfileText>Edit profile</ProfileText>
                      </ProfileEdit>
                      <Bookmark name="bookmark" size={24} color="black" />
                    </ProfileColumn>
                    <StatsText>Tap to add bio</StatsText>
                </Content>
                <SafeAreaView style={{ flex: 1 }}>
                  <FlatList
                    data={DATA}
                    renderItem={_renderItem}
                    keyExtractor={item => item.id}
                    numColumns={numColumns}
                    style={{ flex: 1 }}
                    contentContainerStyle={{ paddingVertical: 10 }}
                  />
                </SafeAreaView>
            </ScrollView>
        </Container>
        <Tabs/>
        </>
    );
}

export default Profile