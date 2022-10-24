import {
  AppShell,
  Button,
  ColorScheme,
  ColorSchemeProvider,
  Loader,
  MantineProvider,
  Paper,
  Text,
} from "@mantine/core";
import { useLocalStorage, useHotkeys } from "@mantine/hooks";
import { SunIcon } from "@modulz/radix-icons";
import { useState } from "react";
import AppShellDemo from "./components/AppShell";
import Cards from "./components/Cards";
import LightDarkButton from "./components/LightDarkButton";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <div className="App">
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withNormalizeCSS
          withGlobalStyles
          theme={{
            colorScheme: colorScheme,
          }}
        >
          <AppShellDemo />
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
