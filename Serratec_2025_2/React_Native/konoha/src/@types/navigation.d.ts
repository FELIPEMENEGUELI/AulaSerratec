export type StackList = {
  StackLogin: undefined;
  StackHome: { name: string };
  StackSettings: undefined;
}

export type DrawerList = {
  DrawerHome: undefined;
  DrawerProfile: undefined;
  DrawerSettings: undefined;
}

export type TabList = {
  TabHome: undefined;
  TabProfile: undefined;
  TabContacts: undefined;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackList, DrawerList, TabList { }
  }
}