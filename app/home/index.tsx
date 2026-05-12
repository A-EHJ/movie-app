import { useMovies } from "@/presentation/hooks/useMovies";
import { Text, View } from "react-native";

export default function Index() {
  const { nowPlayingQuery } = useMovies();

  return (
    <View>
      <Text>Home</Text>
      <Text>{JSON.stringify(nowPlayingQuery.data)}</Text>
    </View>
  );
}
