import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/theme', () => {
    return HttpResponse.json({
      data: [
        {
          themeId: 1,
          name: '층간소음',
          image: '/image/층간소음.jpeg',
          score: 9.5,
          difficulty: 2.7,
        },
        {
          themeId: 1,
          name: '층간소음',
          image: '/image/층간소음.jpeg',
          score: 9.5,
          difficulty: 2.7,
        },
        {
          themeId: 1,
          name: '층간소음',
          image: '/image/층간소음.jpeg',
          score: 9.5,
          difficulty: 2.7,
        },
        {
          themeId: 1,
          name: '층간소음',
          image: '/image/층간소음.jpeg',
          score: 9.5,
          difficulty: 2.7,
        },
        {
          themeId: 1,
          name: '층간소음',
          image: '/image/층간소음.jpeg',
          score: 9.5,
          difficulty: 2.7,
        },
        {
          themeId: 1,
          name: '층간소음',
          image: '/image/층간소음.jpeg',
          score: 9.5,
          difficulty: 2.7,
        },
        {
          themeId: 1,
          name: '층간소음',
          image: '/image/층간소음.jpeg',
          score: 9.5,
          difficulty: 2.7,
        },
        {
          themeId: 1,
          name: '층간소음',
          image: '/image/층간소음.jpeg',
          score: 9.5,
          difficulty: 2.7,
        },
      ],
    });
  }),
  http.post('/api/signout', () => {
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/',
      },
    });
  }),
  //여기에 추가
];
