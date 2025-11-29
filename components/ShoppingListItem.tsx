import { Text, TouchableOpacity, View, StyleSheet, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { theme } from "../theme";

type Props = {
    name: string;
    isCompleted?: boolean;
}

export function ShoppingListItem({ name, isCompleted }: Props) {

  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete this ${name}?`, 
      "It will be gone for good.",
      [
        {
          text: "Yes",
          onPress: () => console.log("Ok, deleting"),
          style: "destructive"
        },
        {
          text: "Cancel",
          style: 'cancel'
        }
      ]
    )
  }

    return (
      <View style={[styles.itemContainer, isCompleted ? styles.completedContainer : undefined]}>             
        {/* <Text style={[styles.itemText, isCompleted ? styles.completedText : undefined]}>{name}</Text> */}
       <View style={styles.row}>
         <Entypo
           name={isCompleted ? "check" : "circle"}
           size={24}
           color={isCompleted ? theme.colorGrey : theme.colorCerulean}
         />
         <Text
           style={[
             styles.itemText,
             isCompleted ? styles.completedText : undefined,
           ]}
         >
           {name}
         </Text>
       </View>        
        <TouchableOpacity hitSlop={20} onPress={handleDelete}>
            <AntDesign
            name="close-circle"
            size={24}
            color={isCompleted ? theme.colorGrey : theme.colorRed}
            />  
            </TouchableOpacity>
      </View>        
    )
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey
  },
  itemText: {
    fontSize: 18, 
    fontWeight: "200",
    marginLeft: 8,
    flex: 1
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6
  },
  completedButton: {
    backgroundColor: theme.colorGrey
  },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGrey
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
  }
});