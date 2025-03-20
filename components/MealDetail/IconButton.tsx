import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";

type IconButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  icon: ComponentProps<typeof Ionicons>["name"];
  color?: string;
};

function IconButton({ onPress, icon, color }: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons size={24} name={icon} color={color} />
    </Pressable>
  );
}
export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
    transform: [{ scale: 1.3 }],
  },
});
