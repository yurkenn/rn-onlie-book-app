import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../styles/styles';
import Loading from '../../components/general/Loading';

const URL = 'https://openlibrary.org/works/';

const BookDetails = ({route}) => {
  const {item} = route.params;
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await axios.get(`${URL}${item.id}.json`);
        const data = await response.data;

        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;
          const newBook = {
            description: description ? description.value : 'No description',
            title,
            cover_img: covers
              ? `http://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg',
            subject_places: subject_places
              ? subject_places.join(', ')
              : 'No subject places',
            subject_times: subject_times
              ? subject_times.join(', ')
              : 'No subject times',
            subjects: subjects ? subjects.join(', ') : 'No subjects',
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [item.id]);

  console.log(book);

  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inner_container}>
        <Image style={styles.image} source={{uri: book?.cover_img}} />
        <Text style={styles.title}>{book?.title}</Text>
        <Text style={styles.description}>{book?.description}</Text>
        <Text style={styles.places}>
          <Text style={styles.text}>Subject Places: </Text>
          {book?.subject_places}
        </Text>
        <Text style={styles.times}>
          <Text style={styles.text}>Subject Time: </Text>
          {book?.subject_times}
        </Text>
        <Text style={styles.subject}>
          <Text style={styles.text}>Subject: </Text>
          {book?.subjects}
        </Text>
      </View>
    </ScrollView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  inner_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 330,
    marginBottom: 20,
  },
  title: {
    color: colors.tertiary,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  places: {
    fontSize: 16,
    marginBottom: 20,
  },
  times: {
    fontSize: 16,
    marginBottom: 20,
  },
  subject: {
    fontSize: 16,
    marginBottom: 20,
  },
  text: {
    color: colors.quaternary,
    fontWeight: 'bold',
  },
});
