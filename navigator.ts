import { NavigationContainerComponent } from "react-navigation";

export let navigatorRef: NavigationContainerComponent | undefined;

export function setTopLevelNavigator(ref: NavigationContainerComponent) {
  navigatorRef = ref;
}
