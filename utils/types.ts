export type AppData = { 
  name: string, 
  open: boolean, 
  z_index: number, 
  is_focused: boolean, 
  is_maximized: boolean,
  component: any,
};
export type AppCollection = { [key: string]: AppData };
export type AppReducerAction = { id: string, type: string}
