import { Movie } from "@/infrastructure/interfaces/movie.interface";
import React, { useRef } from "react";
import { View } from "react-native";

interface Props {
  movies: Movie[];
}

const MainNowPlayingSlideShow = ({ movies }: Props) => {
  const ref = useRef<ICarouselInstance>(null);

  return <View className="h-[250px] w-full"></View>;
};

export default MainNowPlayingSlideShow;
