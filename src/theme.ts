import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";



const config = defineConfig({
  preflight: true,
  globalCss: {
    "body, html, #root": {
      display: "flex",
      flexDir: "row",
      overflow: "hidden",
      height: "100vh", 
      width: "100vw",
    }
  },
  theme: {
    tokens: {

    },
    recipes: {

    }
  }
})


const system = createSystem(config, defaultConfig)
export default system
