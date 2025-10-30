
import * as Notifications from 'expo-notifications';

interface NotificationProperty{
    title:string,
    body:string,
    timeInSeconds:number
}


const triggerLocalNotification = ({title, body, timeInSeconds}:NotificationProperty)=>{


    Notifications.scheduleNotificationAsync({
  content: {
    title: title,
    body: body,
  },
  trigger: {
    type:Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
    seconds:timeInSeconds


  },
});

}

export default triggerLocalNotification;
