import { useState } from "react";
import { Animated, Dimensions } from "react-native";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { TabInterface } from "./interface";
import { Gesture, HandlerStateChangeEvent, PanGestureHandlerEventPayload } from "react-native-gesture-handler";

const useTabsScroll = (tabs: TabInterface[], currentTab: string, onChangeTab: (tab: string) => void) => {
	const [currentPage, setCurrentPage] = useState(tabs.findIndex(tab => tab.name === currentTab));
  const translateX = useState(new Animated.Value(0))[0];
	const END_POSITION = Dimensions.get('window').width * 0.25;
	const toLeft = useSharedValue(true);
	const position = useSharedValue(0);
	const animatedStyle = useAnimatedStyle(() => {
		return {
			flex:1,
			transform: [{ translateX: position.value }],
		};
	})

	const handlePageChange = (index: number) => {
    setCurrentPage(index);
    onChangeTab(tabs[index].name);
  };

  const onGestureEvent = Animated.event([{ nativeEvent: { translationX: translateX } }], {
    useNativeDriver: true,
  });

	const panGesture = Gesture.Pan()
		.onUpdate(event => {
			if(toLeft.value) {
				position.value = event.translationX;
			}
			else {
				position.value = END_POSITION + event.translationX;
			}
		})
		.onEnd(event => {
			if(event.translationX > 0) {
				position.value = withTiming(END_POSITION, { duration: 200 });
				toLeft.value = true;
			}
			else {
				position.value = withTiming(0, { duration: 200 });
				toLeft.value = false;
			}
		})

		const onHandlerStateChange = ({ nativeEvent }: HandlerStateChangeEvent<PanGestureHandlerEventPayload>) => {
			if (nativeEvent.state === 5) { 
				const direction = nativeEvent.translationX > 0 ? -1 : 1;
				const nextPage = currentPage + direction;
	
				if (nextPage >= 0 && nextPage < tabs.length) {
					handlePageChange(nextPage);
				}
				
				Animated.spring(translateX, {
					toValue: 0,
					useNativeDriver: true,
				}).start();
			}
		};

		return { currentPage, handlePageChange, onGestureEvent, panGesture, position, onHandlerStateChange, animatedStyle };
}


const useTabsMolecule = (initialTab: string) => {
	const [tab, setTab] = useState(initialTab);

	const handleTabChange = (newTab: string) => {
		setTab(newTab);
	};

	return { tab, handleTabChange };
}


export { useTabsMolecule, useTabsScroll };