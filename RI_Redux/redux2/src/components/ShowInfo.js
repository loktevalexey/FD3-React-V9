import React from 'react';
import { useSelector } from 'react-redux';

export const ShowInfo = () => {

  const fruits = useSelector( state => state.fruits ); 
  // getting the whole redux partition, why not? 
  // we can get state.fruits.apples and state.fruits.apples separately using useSelector twice,
  // but it's a little slower

  const profile = useSelector( state => state.profile );

  // const onlyMyData = useSelector( state => { 
  //   return {apples:state.fruits.apples,firstname:state.profile.firstname} 
  // } );

  return (
    <>
      <div>Apples: {fruits.apples}</div>
      <div>Pears: {fruits.pears}</div>
      <div>
        Profile: {profile.surname} {profile.firstname}
      </div>
    </>
  );

}
