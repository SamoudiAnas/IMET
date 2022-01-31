import { View, Text } from "react-native";
import GlobalStyles from './GlobalStyles';
import MyProfile from "./screens/MyProfile";
import { SafeAreaView } from "react-native";
import ProfileCard from "./components/ProfileCard";
import { useFonts, Poppins_400Regular} from '@expo-google-fonts/poppins';
import BottomTabs from "./components/BottomTabs";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <MyProfile />
      <BottomTabs />
    </SafeAreaView>
  );
}
