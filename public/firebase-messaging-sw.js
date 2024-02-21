// Handle notification click action
self.addEventListener('notificationclick', event => {
    event.notification.close();
    const notificationData = event.notification.data;
    const clickAction = notificationData && notificationData.clickAction;
    console.log('Notification Data:', notificationData);
    console.log('Click Action:', clickAction);
    if (clickAction) {
        event.waitUntil(
            clients.openWindow(clickAction)
        );
    }
});
// Handle push notification
self.addEventListener('push', event => {
    const payload = event.data.json();
    // Access the notification and data objects from the payload
    const notificationData = payload.data || {};
    const title = notificationData.title || 'Notification';
    const body = notificationData.body || 'Notification For You';
    const options = {
        body: body,
        icon: notificationData.icon || 'Default Icon',
        badge: notificationData.icon || 'Default Icon',
        data: notificationData, // Pass the data to the notification
    };
    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});
