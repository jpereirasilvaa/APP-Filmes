import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Linking } from 'expo';

const DetailScreen = ({ navigation, route }) => {
  const movie = route.params.movie;
  const youtube_url = `https://www.youtube.com/watch?v=${movie.yt_trailer_code}`;

  const getStars = () => {
    let stars = '';
    return stars.padStart(movie.rating, '★');
  };

  const callYoutube = () => {
    Linking.openURL(youtube_url); 
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        imageStyle={{ opacity: 0.4 }}
        style={styles.banner}
        source={{ uri: movie.background_image }}
      >
        <Image style={styles.cover} source={{ uri: movie.medium_cover_image }} />
        <View>
          <Text style={styles.title}>{movie.title_long}</Text>
          <Text style={styles.year}>{`Ano:  ${movie.year}`}</Text>
        </View>
      </ImageBackground>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.content}>
          
          <Text
            style={{ ...styles.rating, color: movie.rating > 6 ? 'blue' : 'red' }}
          >{`Nota: ${movie.rating}`}</Text>
          <Text style={styles.rating}>{getStars()}</Text>

          <TouchableOpacity onPress={callYoutube}>
            <Text style={styles.youtube}>Assistir no Youtube</Text>
          </TouchableOpacity>

          <Text style={styles.subtitle}>Descrição</Text>
          <Text style={styles.description}>{movie.description_full}</Text>
          <Text style={styles.subtitle}>Generos</Text>
          {movie.genres.map((genre) => (
            <Text style={styles.description}>{` - ${genre}`}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    marginTop: 14,
    color: 'orange',
    fontWeight: 'bold',
    fontStyle:'italic',
  },
  youtube: {
    marginTop: 10,
    color: 'green',
    fontWeight: 'bold',
    fontStyle:'italic',
  },
  content: {
    padding: 30,
  },
  description: {
    marginTop: 7,
    color: 'white',
    fontSize: 12,
    fontStyle:'italic',
  },
  banner: {
    padding: 15,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  cover: {
    marginLeft: 16,
    marginRight: 16,
    width: 100,
    height: 130,
    
  },
  side: {
    height: 100,
    marginLeft: 16,
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle:'italic',
  },
  year: {
    marginTop: 8,
    color: '#ccc',
    fontSize: 14,
    fontStyle:'italic',
  },
  rating: {
    marginTop: 7,
    color: 'yellow',
    fontSize: 12,
    fontStyle:'italic',
  },
});

export default DetailScreen;