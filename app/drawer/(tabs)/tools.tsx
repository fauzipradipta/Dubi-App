import { Text, View } from 'react-native';

import { ChevronRight } from 'lucide-react-native';
import {
  ScrollView,
  SectionList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

// If you don't have lucide-react-native, use these alternatives:
// import { Ionicons } from '@expo/vector-icons';

export default function ToolsScreen() {
  // Data for the sections
  const sections = [
    {
      title: 'Tools',
      data: [
        { id: '1', title: 'Regulation', icon: '⚙️' },
        { id: '2', title: 'Motivation', icon: '🔥' },
        { id: '3', title: 'Chats', icon: '💬' },
        { id: '4', title: 'Star', icon: '⭐' },
      ],
    },
    {
      title: 'Emotions',
      data: [
        { id: '5', title: 'Anxiety', icon: '😰' },
        { id: '6', title: 'Fidgets', icon: '🌀' },
        { id: '7', title: 'Meditations', icon: '🧘' },
      ],
    },
    {
      title: 'Wheel of Emotions',
      data: [
        { id: '8', title: 'Bia Bia Bia', description: 'Interactive emotion wheel to identify and track feelings' },
      ],
    },
    {
      title: 'My Zones of Regulation',
      data: [
        { id: '9', title: 'Run zones that help you identify your state and lead you to ways of regulating your emotions. Track and customize your moods.' },
      ],
    },
    {
      title: 'Feelings VS Emotions',
      data: [
        { id: '10', title: 'Bia Bia Bia', description: 'Learn the difference between feelings and emotions' },
      ],
    },
    {
      title: 'Pain Scale',
      data: [
        { id: '11', title: 'Bia Bia Bia', description: 'Visual scale to track pain levels' },
      ],
    },
  ];

  const renderItem = ({ item, section }) => {
    if (section.title === 'Tools' || section.title === 'Emotions') {
      return (
        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.icon}>{item.icon}</Text>
          <Text style={styles.listItemText}>{item.title}</Text>
          <ChevronRight size={20} color="#666" />
        </TouchableOpacity>
      );
    }
    
    return (
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        {item.description && (
          <Text style={styles.cardDescription}>{item.description}</Text>
        )}
      </View>
    );
  };

  const renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tools</Text>
        <Text style={styles.headerSubtitle}>Resources for emotional regulation</Text>
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        scrollEnabled={false} // Since it's inside ScrollView
        style={styles.sectionList}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  sectionList: {
    marginTop: 10,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  listItemText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  icon: {
    fontSize: 20,
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 8,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});