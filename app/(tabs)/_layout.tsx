import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';
import ArchiveIcon from '../../assets/images/archive.svg';
import HomeIcon from '../../assets/images/home.svg';
import NoteIcon from '../../assets/images/note.svg';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#E36166',
        tabBarInactiveTintColor: '#757575',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            height: 80,
          },
          default: {
            height: 80,
          },
        }),
  tabBarItemStyle: { marginHorizontal: 12, marginTop: 10 },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', minWidth: 48, height: '100%', flex: 1, marginHorizontal: 12 }}>
              <HomeIcon width={22} height={22} fill={color} />
              <Text style={{ marginTop: 2, color, fontSize: 12, fontWeight: focused ? 'bold' : 'normal', textAlign: 'center', maxWidth: 48 }} numberOfLines={1} ellipsizeMode="tail">Home</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="archive"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', minWidth: 64, height: '100%', flex: 1, marginHorizontal: 12 }}>
              <ArchiveIcon width={22} height={22} fill={color} />
              <Text style={{ marginTop: 2, color, fontSize: 12, fontWeight: focused ? 'bold' : 'normal', textAlign: 'center', maxWidth: 64 }} numberOfLines={1} ellipsizeMode="tail">Archive</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="notes"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', minWidth: 48, height: '100%', flex: 1, marginHorizontal: 12 }}>
              <NoteIcon width={22} height={22} fill={color} />
              <Text style={{ marginTop: 2, color, fontSize: 12, fontWeight: focused ? 'bold' : 'normal', textAlign: 'center', maxWidth: 48 }} numberOfLines={1} ellipsizeMode="tail">Notes</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
