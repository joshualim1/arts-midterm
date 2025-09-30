// 📂 app/goals/_layout.jsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { GoalsProvider } from "../../contexts/GoalsContext";

export default function GoalsLayout() {
  return (
    <GoalsProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#e6a964ff", // active = pink gradient tone
          tabBarInactiveTintColor: "white", // inactive = white
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "transparent", // ✅ transparent like root layout
            borderTopWidth: 0,
            elevation: 0, // remove Android shadow
            shadowOpacity: 0, // remove iOS shadow
            height: 60,
          },
          tabBarItemStyle: {
            borderRadius: 12,
            margin: 6,
          },
          tabBarActiveBackgroundColor:
            Platform.OS === "web"
              ? "rgba(214, 151, 57, 0.25)" // hover effect on web
              : "rgba(228, 169, 60, 0.4)", // pressed effect native
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
          },
        }}
      >
        {/* ✅ Goals Home */}
        <Tabs.Screen
          name="index"
          options={{
<<<<<<< HEAD
            title: "Your Schedules",
=======
            title: "Your Goals",
>>>>>>> 59599028a9f57bb919c8d0247a9b14090699e7f1
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />

        {/* ✅ Create Goal */}
        <Tabs.Screen
          name="create"
          options={{
<<<<<<< HEAD
            title: "Create Schedule",
=======
            title: "Create Goal",
>>>>>>> 59599028a9f57bb919c8d0247a9b14090699e7f1
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle" size={size} color={color} />
            ),
          }}
        />

        {/* ✅ Update Goal */}
        <Tabs.Screen
          name="updategoals"
          options={{
<<<<<<< HEAD
            title: "Update Schedule",
=======
            title: "Update Goal",
>>>>>>> 59599028a9f57bb919c8d0247a9b14090699e7f1
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="create" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </GoalsProvider>
  );
}
