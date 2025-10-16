# 🎬 WatchMovies

TMDB API를 활용한 영화 검색 및 상세 정보 제공 웹 애플리케이션입니다.

## ✨ 주요 기능

- 🎭 인기 영화 목록 조회
- 🔍 영화 검색 기능
- 📱 반응형 디자인
- 💾 즐겨찾기 기능 (로컬 스토리지)
- 📄 페이지네이션
- 🎨 shadcn/ui 컴포넌트 사용

## 🚀 시작하기

### 1. 환경 설정

```bash
# 저장소 클론
git clone <repository-url>
cd watchmovies

# 의존성 설치
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```env
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
```

### 3. 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 애플리케이션을 확인할 수 있습니다.

## 🛠️ 사용 가능한 스크립트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 코드 린팅
npm run lint

# 린팅 자동 수정
npm run lint:fix

# 타입 체크
npm run type-check

# 테스트 실행
npm run test
```

## 🔧 GitHub Actions

이 프로젝트는 GitHub Actions를 사용하여 CI/CD 파이프라인을 구축합니다.

### 워크플로우

1. **CI/CD Pipeline** (`.github/workflows/ci.yml`)

   - 코드 품질 검사 (ESLint, TypeScript)
   - 테스트 실행
   - Vercel 자동 배포

2. **Code Quality** (`.github/workflows/code-quality.yml`)

   - 보안 취약점 검사
   - 번들 크기 분석
   - 사용하지 않는 의존성 체크

3. **PR Automation** (`.github/workflows/pr-automation.yml`)
   - Pull Request 자동 검사
   - PR 댓글 자동 생성

### GitHub Secrets 설정

Vercel 자동 배포를 위해 다음 secrets를 설정해야 합니다:

1. `VERCEL_TOKEN`: Vercel API 토큰
2. `VERCEL_ORG_ID`: Vercel 조직 ID
3. `VERCEL_PROJECT_ID`: Vercel 프로젝트 ID

### Secrets 설정 방법

1. GitHub 저장소 → Settings → Secrets and variables → Actions
2. "New repository secret" 클릭
3. 위의 세 가지 secrets 추가

## 📁 프로젝트 구조

```
src/
├── app/                 # Next.js App Router
│   ├── movies/         # 영화 목록 페이지
│   ├── search/         # 검색 페이지
│   └── layout.tsx      # 레이아웃
├── components/         # React 컴포넌트
│   ├── ui/            # shadcn/ui 컴포넌트
│   ├── AllMovies.tsx  # 영화 목록
│   ├── SearchBar.tsx  # 검색바
│   └── ...
├── hooks/             # 커스텀 훅
├── lib/               # 유틸리티 함수
├── store/             # Zustand 상태 관리
└── types/             # TypeScript 타입 정의
```

## 🎨 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Zustand
- **Data Fetching**: React Query (TanStack Query)
- **API**: TMDB (The Movie Database)

## 📱 주요 기능 상세

### 페이지네이션

- URL 쿼리 파라미터를 사용하여 현재 페이지 상태 유지
- 뒤로가기 시 이전 페이지로 정확히 복귀

### 즐겨찾기

- 로컬 스토리지를 사용한 영화 즐겨찾기 기능
- Zustand persist 미들웨어로 상태 유지

### 반응형 디자인

- 모바일, 태블릿, 데스크톱 모든 환경 지원
- Tailwind CSS를 활용한 반응형 레이아웃

## 🚀 배포

### Vercel 배포

1. [Vercel](https://vercel.com)에서 프로젝트 연결
2. 환경 변수 설정
3. GitHub Actions를 통한 자동 배포

### 수동 배포

```bash
npm run build
npm run start
```

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.
