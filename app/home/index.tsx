import { Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import MainNowPlayingSlideShow from "@/presentation/components/MainNowPlayingSlideshow";
import { useMovies } from "@/presentation/hooks/useMovies";

const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();
  const safeArea = useSafeAreaInsets();

  if (nowPlayingQuery.isLoading) {
    console.log("isLoading");
    return (
      <SafeAreaView>
        <View className="mt-2" style={{ paddingTop: safeArea.top }}>
          <Text>Loading</Text>
        </View>
      </SafeAreaView>
    );
  }
  if (nowPlayingQuery.isFetching) {
    console.log("isfetching");
    return (
      <SafeAreaView>
        <View className="mt-2" style={{ paddingTop: safeArea.top }}>
          <Text>Fetching</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <View className="mt-2" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl">HomeScreen</Text>

        {/*carrusel*/}
        <MainNowPlayingSlideShow></MainNowPlayingSlideShow>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
