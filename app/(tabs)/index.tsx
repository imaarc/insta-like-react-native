import { COLORS } from "@/constants/themes";
import { styles } from "@/styles/auth.style";
import { Text, TouchableOpacity, Touchable, View } from "react-native";
import { useAuth } from "@clerk/clerk-expo";

export default function Index() {
  const {signOut} = useAuth();
  return (
    <View style={styles.container}>
     
    <TouchableOpacity onPress={() => signOut()}>
        <Text style={{color:COLORS.white}}>Signout</Text>
    </TouchableOpacity>
      
    </View>
  );
}
