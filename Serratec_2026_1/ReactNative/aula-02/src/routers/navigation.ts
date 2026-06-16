export type ParametrosRotasStack = {
  StackLogin: undefined;
  StackHome: undefined;
  StackHomeV2: undefined;
};

export type ParametrosRotasTabs = {
  TabsHome: undefined;
  TabsProfile: undefined;
  TabsSettings: undefined;
  TabsNotification: undefined;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParametrosRotasStack {}
    interface RootParamList extends ParametrosRotasTabs {}
  }
}