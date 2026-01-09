import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import Svg, {
  Circle,
  Defs,
  G,
  Path,
  RadialGradient,
  Stop,
  Text as SvgText,
} from 'react-native-svg';

const { width, height } = Dimensions.get('window');
// const SIZE = Math.min(width, height) * 0.9;
const SIZE = Math.min(width, height) * 1.50;
const CENTER = SIZE / 2;

// Emotion data
const EMOTIONS = [
  { label: 'Anger', color: '#E91E63', sub: ['Hurt', 'Threatened', 'Hateful'] },
  { label: 'Disgust', color: '#9C27B0', sub: ['Awful', 'Avoided', 'Nauseated'] },
  { label: 'Sadness', color: '#2196F3', sub: ['Lonely', 'Guilty', 'Depressed'] },
  { label: 'Surprise', color: '#00BCD4', sub: ['Startled', 'Confused', 'Amazed'] },
  { label: 'Fear', color: '#4CAF50', sub: ['Anxious', 'Insecure', 'Scared'] },
  { label: 'Happy', color: '#FFEB3B', sub: ['Proud', 'Content', 'Joyful'] },
];

// Segment component
const Segment = ({
  index,
  total,
  radius,
  innerRadius,
  center,
  gradientId,
  label,
}: any) => {
  const startAngle = (index * 2 * Math.PI) / total;
  const endAngle = ((index + 1) * 2 * Math.PI) / total;

  const x1 = center + radius * Math.cos(startAngle);
  const y1 = center + radius * Math.sin(startAngle);
  const x2 = center + radius * Math.cos(endAngle);
  const y2 = center + radius * Math.sin(endAngle);
  const x3 = center + innerRadius * Math.cos(endAngle);
  const y3 = center + innerRadius * Math.sin(endAngle);
  const x4 = center + innerRadius * Math.cos(startAngle);
  const y4 = center + innerRadius * Math.sin(startAngle);

  const pathData = `
    M ${x1} ${y1}
    A ${radius} ${radius} 0 0 1 ${x2} ${y2}
    L ${x3} ${y3}
    A ${innerRadius} ${innerRadius} 0 0 0 ${x4} ${y4}
    Z
  `;

  const middleAngle = (startAngle + endAngle) / 2;
  const textRadius = (radius + innerRadius) / 2;
  const tx = center + textRadius * Math.cos(middleAngle);
  const ty = center + textRadius * Math.sin(middleAngle);
  const rotation = (middleAngle * 180) / Math.PI;

  return (
    <G>
      <Path
        d={pathData}
        fill={`url(#${gradientId})`}
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1"
      />
      <SvgText
        x={tx}
        y={ty}
        fill="#444"
        fontSize={radius * 0.08}
        fontWeight="600"
        textAnchor="middle"
        alignmentBaseline="middle"
        transform={`rotate(${rotation}, ${tx}, ${ty})`}
      >
        {label}
      </SvgText>
    </G>
  );
};

// Main Screen
export default function EmotionWheelScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.title}>Wheel of Emotions</Text>
      </View> */}

      <View style={styles.wheelContainer}>
        <Svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
          <Defs>
            {EMOTIONS.map((emo, i) => (
              <RadialGradient
                key={i}
                id={`grad-${i}`}
                cx={CENTER}
                cy={CENTER}
                rx={CENTER}
                ry={CENTER}
                fx={CENTER}
                fy={CENTER}
                gradientUnits="userSpaceOnUse"
              >
                <Stop offset="20%" stopColor={emo.color} stopOpacity="1" />
                <Stop offset="100%" stopColor={emo.color} stopOpacity="0.3" />
              </RadialGradient>
            ))}
          </Defs>

          {/* Outer Ring */}
          {EMOTIONS.flatMap((category, catIdx) =>
            category.sub.map((subLabel, subIdx) => (
              <Segment
                key={`outer-${catIdx}-${subIdx}`}
                index={catIdx * 3 + subIdx}
                total={EMOTIONS.length * 3}
                center={CENTER}
                radius={CENTER * 0.85}
                innerRadius={CENTER * 0.55}
                gradientId={`grad-${catIdx}`}
                label={subLabel}  
              />
            ))
          )}

          {/* Middle Ring */}
          {EMOTIONS.map((item, index) => (
            <Segment
              key={`middle-${index}`}
              index={index}
              total={EMOTIONS.length}
              center={CENTER}
              radius={CENTER * 0.55}
              innerRadius={CENTER * 0.15}
              gradientId={`grad-${index}`}
              label={item.label}
            />
          ))}

          {/* Center */}
          <Circle cx={CENTER} cy={CENTER} r={CENTER * 0.15} fill="white" />
          <Circle
            cx={CENTER}
            cy={CENTER}
            r={CENTER * 0.12}
            fill="none"
            stroke="#eee"
            strokeWidth="1"
          />
          <SvgText
            x={CENTER}
            y={CENTER + 6}
            textAnchor="middle"
            // fontSize={CENTER * 0.12}
            fontSize={"12px"}
            fontWeight="bold"
            fill="#666"
          >
            I'm Feeling
          </SvgText>
        </Svg>
      </View>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#333',
  },
  wheelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
    marginEnd:345,
  },
});
