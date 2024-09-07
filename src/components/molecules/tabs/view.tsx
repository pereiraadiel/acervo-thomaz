import { ScrollView, View } from 'react-native';
import { TabsMoleculeViewProps } from './interface';
import { BadgeAtom } from '@/components/atoms/badge';

const TabsMoleculeView: React.FC<TabsMoleculeViewProps> = ({ children, onChangeTab, tab: currentTab, tabs }) => {
  return (
    <View className="box-border">
      <ScrollView
        horizontal
        className="flex flex-row gap-0.5 pt-2 mb-1"
      >
        {tabs.map((tab, index) => (
          <BadgeAtom
            key={tab.name}
            variant={tab.name}
            isActive={currentTab === tab.name}
            onPress={() => onChangeTab(tab.name)}
          />
        ))}
      </ScrollView>

      <View className="w-full flex items-center mb-2 mt-1">
        <View className="w-[90%] h-0.5 bg-gray-600" />
      </View>
        <View style={[{ flex: 1}]}>
          {children}
        </View>
    </View>
  );
};

export { TabsMoleculeView };
