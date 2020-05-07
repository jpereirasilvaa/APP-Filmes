import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import RowMovies from "./componentes/RowMovies";
import axios from "axios";

const HomeScreen = ({ navigation }) => {
  const url = "https://yts.mx/api/v2/list_movies.json";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const callDetail = (item) => {
    navigation.navigate('Detail', {movie: item});
  };

  const getData = async () => {
    try {
      const response = await axios.get(url);
      const content = response.data;
      const { movies: data } = content.data;
      setMovies(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{ flex: 1 }}>
    <FlatList
      keyExtractor={(item) => String(item.id)}
      data={movies}
      renderItem={({ item, index }) => <RowMovies onPress={callDetail} item={item} />}
    ></FlatList>
  </View>
  );
};

export default HomeScreen;
