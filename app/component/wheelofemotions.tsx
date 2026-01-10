import React from 'react';
import {
  Animated,
  Dimensions,
  Easing,
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

const AnimatedG = Animated.createAnimatedComponent(G);
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
  const spinValue = React.useRef(new Animated.Value(0)).current;

  const spin = () => {
    spinValue.setValue(0);

    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };

  const spinInterpolation = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1080deg'], // 3 full spins
  });
  return (
    <SafeAreaView style={styles.container}>
      

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
          <AnimatedG
            style={{
              transform: [
                {
                  rotate: spinInterpolation,
                },
              ],
              originX: CENTER,
              originY: CENTER,
            }}
          >

            {/* Outer Ring */}
            {EMOTIONS.flatMap((category, catIdx) =>
              category.sub.map((subLabel, subIdx) => (
                <Segment
                  key={`outer-${catIdx}-${subIdx}`}
                  index={catIdx * 3 + subIdx}
                  total={EMOTIONS.length * 3}
                  center={CENTER}
                  radius={CENTER * 0.95}
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
                innerRadius={CENTER * 0.25}
                gradientId={`grad-${index}`}
                label={item.label}
                fontSize={CENTER * 0.08}
              />
            ))}

            {/* Center */}
            <Circle cx={CENTER} cy={CENTER} r={CENTER * 0.15} fill="white" />
            <Circle
              cx={CENTER}
              cy={CENTER}
              r={CENTER * 0.25}
              fill="none"
              stroke="#eee"
              strokeWidth="1"
            />
            <SvgText
              x={CENTER}
              y={CENTER - CENTER * 0.02}
              textAnchor="middle"
              fontSize={CENTER * 0.08}
              fill="#666"
              onPress={spin}
            >
              I'm 
            </SvgText>
            <SvgText
              x={CENTER}
              y={CENTER + CENTER * 0.06}
              textAnchor="middle"
              fontSize={CENTER * 0.08}
              fill="#666"
            >
              Feeling
            </SvgText>
          </AnimatedG>
        </Svg>
      </View>
    </SafeAreaView>
  );
}

// Responsive style calculations
const getResponsiveStyles = () => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const baseSize = Math.min(screenWidth, screenHeight);
  
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      paddingVertical: baseSize * 0.02, 
      alignItems: 'center',
    },
    title: {
      fontSize: baseSize * 0.04, 
      fontWeight: '700',
      color: '#333',
    },
    wheelContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: screenHeight * 0.24, 
      paddingTop: baseSize * 0.05, 
      paddingEnd: baseSize * 0.70, 
      
    },
  });
};

// Styles
const styles = getResponsiveStyles();
