import { useState } from "react";
import NotificationAlert from "../components/shared/notification-alert/NotificationAlert";

export default function useNotification() {
    const [notificationAlert, setNotificationAlert] = useState(null);

    const notify = (message, type) => {
        setNotificationAlert(<NotificationAlert message={message} type={type} />);

        setTimeout(() => {
            setNotificationAlert(null);
        }, 5000);
    }

    return {
        notify,
        notificationAlert
    }
}