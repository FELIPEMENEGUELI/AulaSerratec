export type StackList = {
  StackLogin: undefined;
  StackHome: { name: string };
  StackSettings: { nomeAula: string };
}

export type DrawerList = {
  DrawerHome: undefined;
  DrawerProfile: undefined;
  DrawerSettings: undefined;
  DrawerLoginInstagram: undefined;
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