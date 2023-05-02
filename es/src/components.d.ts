import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MiuButton: typeof components.Button;
    MiuIcon: typeof components.Icon;
  }
}
export {};
