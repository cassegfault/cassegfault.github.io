import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import Layout from '../app/layout'
import StartBar from "../components/start_bar";
import {useReducer} from 'react';
import Resume from '../components/apps/resume';
import Console from '../components/apps/console';
import AboutMe from '../components/apps/about_me';
import AppWindow from '../components/window';
import Dock from '../components/dock';
import {AppData, AppCollection, AppReducerAction} from '../utils/types';

import styles from './app.module.css';
const dummyParams = Promise.resolve({});

const apps_initial_state: AppCollection = {};
function makeApp(name, component, defaults = {open:false, z_index: 0, is_focused: true, is_maximized: false}){
  apps_initial_state[name] = {
    name,
    component,
    ...defaults
  }
}
makeApp('about_me', AboutMe);
makeApp('resume', Resume);

function setAppFocus(apps: AppCollection, focused_app: string | null) {
  const z_sorted_apps: string[] = Object.keys(apps)
                              .filter((name)=>name !== focused_app)
                              .sort((a,b)=> apps[a].z_index - apps[b].z_index);
  if (focused_app){
    z_sorted_apps.push(focused_app);
  }
  z_sorted_apps.forEach((app, index) => {
    apps[app].z_index = (index * 10) + 10;
    apps[app].is_focused = false;
  });
  const last_app =z_sorted_apps.at(-1); 
  if (last_app) {
    apps[last_app].is_focused = true;
  }
}
function appsReducer(apps: AppCollection, action: AppReducerAction){

  switch (action.type) {
    case 'open':
      apps[action.id].open = true;
      apps[action.id].is_maximized = false;
      setAppFocus(apps, action.id)
      break;
    case 'close':
      apps[action.id].open = false;
      setAppFocus(apps, null);
      break;
    case 'focus':
      setAppFocus(apps, action.id)
      break;
    case 'toggleMaximize':
      apps[action.id].is_maximized = !apps[action.id].is_maximized;
      break;
    default:
      throw Error(`Unknown dispatched action type ${action.type}`)
  }
  return {...apps};
}
 
export default function ResumeSiteApp({ Component, pageProps }: AppProps) {
  const [apps, dispatch] = useReducer(appsReducer, apps_initial_state);
  useEffect(()=>{
    dispatch({ id: 'about_me', type: 'open' });
  },[]);
  const openApps = Object.values(apps).filter((app) => app.open);
  return (
    <Layout params={dummyParams}>
      <div className={styles.desktop}>
        <StartBar apps={apps} appDispatch={dispatch} />
        <Dock apps={apps} appDispatch={dispatch} />
        <Component {...pageProps} /> 
        {openApps.map((app) => (<AppWindow app={app} apps={apps} appDispatch={dispatch} key={app.name} />))}
      </div>
    </Layout>
  )
}
