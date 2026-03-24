import { useTheme } from "@/contexts/ThemeContext";
import { Palette } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const isLightGold = theme === "light-gold";

  return (
    <button
      onClick={() => setTheme(isLightGold ? "gray-blue" : "light-gold")}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
      style={{
        background: isLightGold
          ? "hsl(var(--primary))"
          : "hsl(var(--primary))",
        color: "hsl(var(--primary-foreground))",
        boxShadow: "var(--shadow-soft)",
        border: "1px solid hsl(var(--accent) / 0.4)",
      }}
      title={`Switch to ${isLightGold ? "Gray & Blue" : "Light & Gold"} theme`}
    >
      <Palette size={13} />
      {isLightGold ? "Switch to Gray & Blue" : "Switch to Light & Gold"}
    </button>
  );
};

export default ThemeSwitcher;
