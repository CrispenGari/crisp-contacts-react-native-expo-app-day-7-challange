import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

import styles from './ContactCardStyles'
import { Avatar } from 'react-native-paper';
import constants from '../../utils/constants'
const ContactCard = ({contact, index, setScreen, setSelectedContact}) => {
    const editContact =()=>{
        if(contact){
            setSelectedContact(contact)
            setScreen(constants.EDIT_SCREEN)
            return
        }
    }
    return (
        <TouchableOpacity onPress={editContact} onLongPress={()=>console.log("Long pressed")} style={index %2 === 0? styles.contactcardEven:styles.contactcardOdd}>
            <Avatar.Text size={45} label={String(contact?.firstName).charAt(0)}  />
            <View style={styles.contactcard__info}>
               <Text style={styles.contactcard__text1}>{contact?.name}</Text>
               <View style={styles.contactcard__infobottom}>
                    <Text style={styles.contactcard__text2}>{contact?.phoneNumbers[contact?.phoneNumbers?.length-1]?.number}</Text>
                    <Text style={styles.contactcard__text3}>{contact?.phoneNumbers[contact?.phoneNumbers?.length - 1]?.data3}</Text>
               </View>
            </View>
        </TouchableOpacity>
    )
}

export default ContactCard
