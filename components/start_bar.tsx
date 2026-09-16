import styles from './start_bar.module.css';
import {toTitleCase} from '../utils/string_helpers';
import {AppData} from '../utils/types';
export default function StartBar({ apps, appDispatch }){
  const open_apps = Object.keys(apps || {}).map((key) => apps[key] ).filter((app) => app.open);
  const all_apps: AppData[] = Object.values(apps);
  const now = new Date();
  const hour = now.getHours() % 12;
  const minute = now.getMinutes();
  return (
  <div className={styles.startBar}>
    <div className={styles.appsContainer}>
      {all_apps.map((app) => (
        <div onClick={()=>appDispatch({id: app.name, type:'open'})}
            className={`${styles.app} ${app.is_focused ? styles.appRunning : ''}`}>
          {toTitleCase(app.name)}
        </div>
      ))}
    </div>
      <div className={styles.statusContainer}>
        <div className={styles.statusPowerContainer}><div className={styles.statusPower}></div></div>
        <div className={styles.statusClock}>
          {hour} : {minute < 10 ? '0'+minute : minute}
        </div>
      </div>
  </div>
  )
}
