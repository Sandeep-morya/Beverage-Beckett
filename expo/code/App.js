import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import Loader from "./components/Loader"
import COLORS from "./constants/COLORS";

export default function App() {
	return (
    <SafeAreaView style={styles.container} >
      <StatusBar backgroundColor={COLORS.backgroundColor} />
			<WebView
				source={{ uri: "https://beveragebeckett.com/app" }}
        style={styles.container}
				startInLoadingState={true}
				renderLoading={Loader}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
