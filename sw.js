const CACHE_NAME = 'physics-reminder-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700;900&family=JetBrains+Mono:wght@400;700&display=swap'
];

// 安装事件 - 缓存资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 拦截网络请求
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果缓存中有，直接返回
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// 处理后台同步
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// 处理推送通知
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : '物理课即将开始',
    icon: '/icon-256.png',
    badge: '/icon-256.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: '查看课表',
        icon: '/icon-256.png'
      },
      {
        action: 'close',
        title: '关闭',
        icon: '/icon-256.png'
      }
    ],
    requireInteraction: true,
    silent: false,
    tag: 'physics-reminder'
  };

  event.waitUntil(
    self.registration.showNotification('物理课提醒', options)
  );
});

// 处理通知点击
self.addEventListener('notificationclick', event => {
  console.log('Notification click received.');

  event.notification.close();

  if (event.action === 'explore') {
    // 打开应用
    event.waitUntil(
      clients.openWindow('/')
    );
  } else if (event.action === 'close') {
    // 关闭通知
    event.notification.close();
  } else {
    // 默认行为：打开应用
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// 后台同步函数
async function doBackgroundSync() {
  try {
    // 这里可以添加后台数据同步逻辑
    console.log('Background sync completed');
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// 定期检查提醒
function checkReminders() {
  // 获取当前时间
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();
  
  // 这里可以添加检查逻辑，与主应用的提醒逻辑保持一致
  // 由于Service Worker无法直接访问主线程的变量，
  // 可以通过postMessage与主线程通信
}

// 每分钟检查一次
setInterval(checkReminders, 60000);