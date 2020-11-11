import React, { useEffect, useState } from 'react'
import { View , Text, Image,TouchableOpacity, ScrollView} from 'react-native'
import { Feather, Entypo } from '@expo/vector-icons';
import styles from './MainStyles'
import {ContactCard, AddContact, EditContact} from '../../Components'
import {getContactListAsync} from '../../utils'
import constants from '../../utils/constants'
const Main = ({setScreen, setSelectedContact, selectedContact, screen}) => {
    const [contacts, setContacts] = useState(null)
    useEffect(()=>{
        getContactListAsync().then(res=>{
            setContacts(res?.CONTACTS_LIST.data)
        })
    }, [])
    switch (screen) {
        case constants.ADD_SCREEN:
            return(
                <View style={styles.main}>
                   <AddContact setScreen={setScreen} />
                </View>
            )
        case constants.EDIT_SCREEN:
            return(
                <View style={styles.main}>
                   <EditContact selectedContact={selectedContact}/>
                </View>
            )
        default:
            return(
                <ScrollView style={styles.main}>
                    {
                        contacts?.map((contact, index)=> <ContactCard setSelectedContact={setSelectedContact} setScreen={setScreen} index ={index}key={contact?.id} contact={contact}/>)
                    }
                </ScrollView>
            )
    }
       
}
export default Main
