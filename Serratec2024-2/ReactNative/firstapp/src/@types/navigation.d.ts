export type PropsStack = {
  StackLogin: { name: string };
  StackHome: { name: string };
}

export type PropsTabs = {
  TabsHome: undefined,
  TabsProfile: undefined,
  TabsSettings: undefined,
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends PropsStack {}
    interface RootParamList extends PropsTabs {}
  }
}