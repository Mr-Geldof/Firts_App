import { View, Text, ScrollView, Image, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import image1 from '../../asset/homme.jpg'
import dashbordStyles from './style.js'
import FakeActivity from '../../fakeData/fakeActivity.js'
import ActivityItem from '../../composentes/ActivityItem'
import FakeSymptome from '../../fakeData/fakeSymptome'
import SymptomeItem from '../../composentes/SymptomeItem'
import fakeDoctor from '../../fakeData/fakeDoctors'


function Home() {
  return (
    <ScrollView>
      <View style={dashbordStyles.header}>
        <Text style={dashbordStyles.UserName}>Aubrey MBOLO</Text>
        <Image style={dashbordStyles.userImage} source={image1} />
      </View>

      <FlatList
        data={FakeActivity}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={dashbordStyles.scrollBarList}
        renderItem={({ item }) => {
          return (
            <ActivityItem item={item}/>
          );
        } } />

      <View style={dashbordStyles.title}>
        <Text style={dashbordStyles.titleBold}>Quel symptôme avez vous ?</Text>
      </View>
      <FlatList
        data={FakeSymptome}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={dashbordStyles.scrollBarList}
        renderItem={({ item }) => {
          return (
            <SymptomeItem item={item}/>
          );
        } } />


<View style={dashbordStyles.title_space_between}>
        <Text style={dashbordStyles.titleBold}>Nos médecins</Text>
        <TouchableOpacity>
          <Text style={dashbordStyles.link}>Affichez tout</Text>
        </TouchableOpacity>
      </View>

      <View style={dashbordStyles.doctorsContainer}>
        {
          fakeDoctor.map((doctor, index )=>{
            return(
              <TouchableOpacity key={doctor.id} style={dashbordStyles.doctorCard}>
                <Image source={{url: `${doctor.img}`}}
                style={dashbordStyles.doctorImg}
                />
                <View style={dashbordStyles.doctorInfo}>
                  <Text style={dashbordStyles.doctorName}>{doctor.fullname}</Text>
                  <Text style={dashbordStyles.doctorSpec}>{doctor.speciality}</Text>
                </View>
              </TouchableOpacity>
            );
          })
        }
      </View>
    </ScrollView>
  );
} 

export default Home