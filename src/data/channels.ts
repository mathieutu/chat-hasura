export type Channel = {
  name: string;
  description?: string;
  isOnline?: boolean;
  notifCount?: number;
  status?: string;
  time: string;
  pictureUrl?: string;
}

export const users: Channel[] = [
  {
    name: 'Mathieu TUDISCO',
    description: '🏕 Camping...',
    isOnline: true,
    notifCount: 3,
    status: 'received',
    time: '13:40',
    pictureUrl: 'https://github.com/mathieutu.png',
  },
  {
    name: 'Julian Gruber',
    description: 'Send audio...',
    time: '21:20',
    pictureUrl: 'https://images.unsplash.com/photo-1589349133269-183a6c90fbfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100',
  },
  {
    name: 'Karlien Nihen',
    description: 'Writing...',
    isOnline: true,
    notifCount: 0,
    status: 'sent',
    time: '13:40',
    pictureUrl: 'https://images.unsplash.com/photo-1589222331438-0511a448dbc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100',
  },
  {
    name: 'Meg Rigden',
    description: 'Washington D.C.',
    isOnline: true,
    notifCount: 3,
    status: 'received',
    time: '13:40',
    pictureUrl: 'https://images.unsplash.com/photo-1589351189946-b8eb5e170ba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100',
  },
]

export const channels: Channel[] = [
  {
    name: '#general',
    time: '13:40',
  },
  {
    name: '#random',
    time: '13:40',
  },
]
