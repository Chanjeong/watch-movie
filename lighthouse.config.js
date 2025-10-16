module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      numberOfRuns: 3 // 3번 실행해서 평균값 계산
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.8 }], // 80점 이상
        'categories:accessibility': ['error', { minScore: 0.9 }], // 90점 이상
        'categories:best-practices': ['error', { minScore: 0.9 }], // 90점 이상
        'categories:seo': ['error', { minScore: 0.8 }] // 80점 이상
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};

