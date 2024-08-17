import { ScrollView, View, Animated } from 'react-native';
import { GestureDetector, GestureHandlerRootView, HandlerStateChangeEvent, PanGestureHandler, PanGestureHandlerEventPayload } from 'react-native-gesture-handler';
import { TabsMoleculeViewProps } from './interface';
import { BadgeAtom } from '@/components/atoms/badge';

const TabsMoleculeView: React.FC<TabsMoleculeViewProps> = ({ children, onChangeTab, tab: currentTab, tabs, scroll }) => {
  return (
    <View className="box-border">
      <ScrollView
        horizontal
        className="flex flex-row gap-2 pt-2 mb-1"
      >
        {tabs.map((tab, index) => (
          <BadgeAtom
            key={tab.name}
            variant={tab.name}
            isActive={index === scroll.currentPage}
            onPress={() => scroll.handlePageChange(index)}
          />
        ))}
      </ScrollView>

      <View className="w-full flex items-center mb-2">
        <View className="w-[90%] h-0.5 bg-gray-600" />
      </View>

			<GestureHandlerRootView className='flex flex-1'>
				<GestureDetector gesture={scroll.panGesture} >
					<PanGestureHandler
						onGestureEvent={scroll.onGestureEvent}
						onHandlerStateChange={scroll.onHandlerStateChange}
					>
						<Animated.View style={[{ flex: 1, transform: [{ translateX:  scroll.position.value }]}]}>
							{children}
						</Animated.View>
					</PanGestureHandler>
				</GestureDetector>
			</GestureHandlerRootView>
    </View>
  );
};

export { TabsMoleculeView };
