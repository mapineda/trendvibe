import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the tallest buildings in the world',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th St., New York, NY 10001',
    coordinates: {
      latitude: 40.74844,
      longitude: -73.9856644
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'St. Louis Arch',
    description: 'One of the tallest arches in the world',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/d/de/St_Louis_night_expblend.jpg',
    address: '100 Washington Avenue, St. Louis, MO 63102',
    coordinates: {
      latitude: 40.74844,
      longitude: -73.9856644
    },
    creator: 'u2'
  },
  {
    id: 'p3',
    title: 'Houston Cloud Column',
    description: 'Cloud Column is a monumental stainless steel 2006 sculpture by Anish Kapoor, installed outside Glassell School of Art in Houston, Texas, in 2018',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Cloud_Column_at_Dusk.jpg',
    address: '0360220000001, Houston, TX 77006',
    coordinates: {
      latitude: 29.7270873,
      longitude: -95.3906725
    },
    creator: 'u3'
  }
];

const UserPlaces = () => {
  const { userId } = useParams();
  return (<PlaceList items={DUMMY_PLACES.filter((item) => item.creator === userId)} />);
};

export default UserPlaces;
