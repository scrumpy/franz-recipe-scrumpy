'use strict';

module.exports = Franz => {
	const getMessages = function getMessages() {
		const notifications = document.querySelector('.c-notifications-dropdown__count')
		const count = notifications ? parseInt(notifications.innerText, 10) : 0;

		Franz.setBadge(0, count);
	};

	Franz.loop(getMessages);
};