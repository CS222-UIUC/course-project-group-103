import React  from "react";
import { Text ,View, StyleSheet } from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
  
const CreateCard = () => {
      
    return(
         
        <Card style={Styles.container}>
        <Card.Content>
            <Title>Welcome to iStudy!</Title>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://www.felca.org/wp-content/uploads/iStudy.jpg' }} />
       <Card.Content>
        <Paragraph>Import your schedule, see common study spaces, and the study spaces closest to you!</Paragraph>
        </Card.Content>
      </Card>
         
    )
}
export default CreateCard;
  
const Styles = StyleSheet.create({
    container :{
        alignContent:'center',
        margin:37
    }
})