// 📂 app/_layout.jsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#e49030ff", // active icon/text color
        tabBarInactiveTintColor: "white", // inactive = white
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "transparent", // ✅ transparent background
          borderTopWidth: 0,              // remove top border
          elevation: 0,                   // Android shadow remove
          shadowOpacity: 0,               // iOS shadow remove
          height: 60,
        },
        tabBarItemStyle: {
          borderRadius: 12, // rounded hover effect
          margin: 6,        // spacing between items
        },
        tabBarActiveBackgroundColor:
          Platform.OS === "web"
            ? "rgba(223, 174, 67, 0.25)" // hover effect on web
            : "rgba(223, 168, 67, 0.4)", // pressed effect native
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      {/* ✅ Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      {/* ✅ About Tab */}
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),
        }}
      />

      {/* 🚫 Hidden: Goals & subroutes */}
      <Tabs.Screen
        name="goals"
        options={{
          href: null,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="goals/create"
        options={{
          href: null,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="goals/updategoals"
        options={{
          href: null,
          tabBarStyle: { display: "none" },
        }}
      />

      {/* 🚫 Hidden: Authentication */}
      <Tabs.Screen
        name="authentication"
        options={{
          href: null,
          tabBarStyle: { display: "none" },
        }}
      />
    </Tabs>
  );
}
