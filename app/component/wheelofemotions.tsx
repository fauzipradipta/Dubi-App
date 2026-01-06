import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Defs, G, Path, RadialGradient, Stop, Text as SvgText } from 'react-native-svg';

const { width } = Dimensions.get('window');
const SIZE = width * 0.95;
const CENTER = SIZE / 2;

// Colors matching the image style
const EMOTIONS = [
  { label: 'Anger', color: '#E91E63', sub: ['Hurt', 'Threatened', 'Hateful'] },
  { label: 'Disgust', color: '#9C27B0', sub: ['Awful', 'Avoided', 'Nauseated'] },
  { label: 'Sadness', color: '#2196F3', sub: ['Lonely', 'Guilty', 'Depressed'] },
  { label: 'Surprise', color: '#00BCD4', sub: ['Startled', 'Confused', 'Amazed'] },
  { label: 'Fear', color: '#4CAF50', sub: ['Anxious', 'Insecure', 'Scared'] },
  { label: 'Happy', color: '#FFEB3B', sub: ['Proud', 'Content', 'Joyful'] },
];

const Segment = ({ index, total, radius, innerRadius, gradientId, label }: any) => {
  const startAngle = (index * 2 * Math.PI) / total;
  const endAngle = ((index + 1) * 2 * Math.PI) / total;
  
  // Trig for path coordinates
  const x1 = CENTER + radius * Math.cos(startAngle);
  const y1 = CENTER + radius * Math.sin(startAngle);
  const x2 = CENTER + radius * Math.cos(endAngle);
  const y2 = CENTER + radius * Math.sin(endAngle);
  const x3 = CENTER + innerRadius * Math.cos(endAngle);
  const y3 = CENTER + innerRadius * Math.sin(endAngle);
  const x4 = CENTER + innerRadius * Math.cos(startAngle);
  const y4 = CENTER + innerRadius * Math.sin(startAngle);

  const pathData = `M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 0 0 ${x4} ${y4} Z`;

  // Label positioning
  const middleAngle = (startAngle + endAngle) / 2;
  const textRadius = (radius + innerRadius) / 2;
  const tx = CENTER + textRadius * Math.cos(middleAngle);
  const ty = CENTER + textRadius * Math.sin(middleAngle);
  const rotation = (middleAngle * 180) / Math.PI;

  return (
    <G>
      <Path d={pathData} fill={`url(#${gradientId})`} stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <SvgText
        x={tx}
        y={ty}
        fill="#444"
        fontSize="9"
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

export default function EmotionWheelScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Wheel of Emotions</Text>
      </View>

      <View style={styles.wheelContainer}>
        <Svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
          <Defs>
            {EMOTIONS.map((emo, i) => (
              <RadialGradient
                key={`grad-${i}`}
                id={`grad-${i}`}
                cx={CENTER}
                cy={CENTER}
                rx={SIZE / 2}
                ry={SIZE / 2}
                fx={CENTER}
                fy={CENTER}
                gradientUnits="userSpaceOnUse"
              >
                {/* Inner color is more saturated, outer is lighter/softer */}
                <Stop offset="20%" stopColor={emo.color} stopOpacity="1" />
                <Stop offset="100%" stopColor={emo.color} stopOpacity="0.3" />
              </RadialGradient>
            ))}
          </Defs>

          {/* Outer Layer (Sub-emotions) */}
          {EMOTIONS.flatMap((category, catIdx) => 
            category.sub.map((subLabel, subIdx) => {
              const totalSubSlices = EMOTIONS.length * 3;
              return (
                <Segment
                  key={`outer-${catIdx}-${subIdx}`}
                  index={catIdx * 3 + subIdx}
                  total={totalSubSlices}
                  radius={CENTER * 0.95}
                  innerRadius={CENTER * 0.65}
                  gradientId={`grad-${catIdx}`}
                  label={subLabel}
                />
              );
            })
          )}

          {/* Middle Layer (Primary Emotions) */}
          {EMOTIONS.map((item, index) => (
            <Segment
              key={`inner-${index}`}
              index={index}
              total={EMOTIONS.length}
              radius={CENTER * 0.65}
              innerRadius={CENTER * 0.35}
              gradientId={`grad-${index}`}
              label={item.label}
            />
          ))}

          {/* Core Center */}
          <Circle cx={CENTER} cy={CENTER} r={CENTER * 0.35} fill="white" />
          <Circle cx={CENTER} cy={CENTER} r={CENTER * 0.32} fill="none" stroke="#eee" strokeWidth="1" />
          <SvgText
            x={CENTER}
            y={CENTER}
            textAnchor="middle"
            fontSize="16"
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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 20, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: '700', color: '#333' },
  wheelContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});