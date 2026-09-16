import {useRef, useState, useEffect} from 'react';
import {useDraggable} from '@reactuses/core';
import styles from './window.module.css';
import {toTitleCase} from '../utils/string_helpers.ts';


export default function AppWindow({app, apps, appDispatch}){
  const el = useRef<HTMLDivElement>(null);
  const [initialValue, setInitialValue] = useState({ x: 200 / 2.2, y: 120 });

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setInitialValue({ 
      x: (width / 4) + ((Math.random() * 1.5) * (width / 4)), 
      y: (height / 6) + ((Math.random() * 1.5) * (height / 6)) 
    });
  }, []);
  const [x, y, isDragging] = useDraggable(el, {
    initialValue,
    preventDefault: true,
    onStart: () => appDispatch({id:app.name, type:'focus'}) 
  });
  const AppComponent = app.component;
  return (
  <div
      onMouseDown={()=>appDispatch({id:app.name, type:'focus'})}
      className={`${styles.window} ${app.is_maximized ? styles.windowMaximized : ''} ${app.is_focused ? styles.windowFocused : ''}`}
    style={{
      position: "fixed",
      zIndex: app.z_index,
      touchAction: "none",
      left: app.is_maximized ? 0 : x,
      top: app.is_maximized ? 0 : y,
    }} >
      <div ref={el} className={styles.windowHandle}>
        <div className={styles.windowTitle}>{toTitleCase(app.name)}</div>
        <div className={styles.buttonContainer}>
          <div className={styles.maximizeButton} 
                onClick={()=>appDispatch({id: app.name, type: 'toggleMaximize'})}></div>
          <div className={styles.closeButton}
                onClick={()=>appDispatch({id: app.name, type: 'close'})}></div>
        </div>
      </div>
      <AppComponent apps={apps} appDispatch={appDispatch} />
      <div className={styles.statusBar}></div>
    </div>
  )
}
