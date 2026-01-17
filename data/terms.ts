import { UITerm, TermCategory } from '../types';

export const UITerms: UITerm[] = [
  // --- STYLE & DESIGN ---
  {
    id: 'palette',
    name: 'Color Palette (컬러 팔레트)',
    category: TermCategory.STYLE,
    componentKey: 'palette',
    shortDescription: '브랜드 아이덴티티와 UI의 역할(Primary, Error 등)을 정의하는 색상 모음입니다.',
    fullDescription: 'Color Palette는 UI 전체에서 일관성을 유지하기 위해 정의된 색상 세트입니다. 주조색(Primary), 보조색(Secondary), 중립색(Neutral/Grayscale), 그리고 상태 표시색(Success, Warning, Error) 등으로 구성됩니다.',
    bestPractices: [
      '60-30-10 규칙(배경 60%, 주조색 30%, 강조색 10%)을 활용하세요.',
      '접근성을 위해 텍스트와 배경 간의 명도 대비(Contrast Ratio)를 확인하세요.',
      '의미 없는 장식용 색상 사용을 자제하고, 색상에 기능적 의미(예: 붉은색=삭제)를 부여하세요.'
    ],
    codeSnippet: `// Tailwind CSS Config Example
theme: {
  colors: {
    primary: {
      50: '#f0f9ff',
      500: '#0ea5e9', // Brand Color
      900: '#0c4a6e',
    },
    slate: { ... }, // Neutral
    red: { ... },   // Semantic (Error)
  }
}`
  },
  {
    id: 'typography',
    name: 'Typography (타이포그래피)',
    category: TermCategory.STYLE,
    componentKey: 'typography',
    shortDescription: '글꼴의 크기, 두께, 자간, 행간 등을 조절하여 가독성과 계층 구조를 만듭니다.',
    fullDescription: 'Typography는 단순히 글자를 보여주는 것을 넘어, 정보의 위계(Hierarchy)를 시각적으로 전달합니다. 제목(Heading)은 크고 굵게, 본문(Body)은 읽기 편한 크기와 행간으로 설정하여 사용자가 내용을 쉽게 훑어볼 수 있게 합니다.',
    bestPractices: [
      '폰트 종류는 최대 2~3가지만 사용하세요.',
      '본문의 행간(Line-height)은 글자 크기의 1.5배 정도가 적당합니다.',
      '계층 구조(H1 > H2 > H3)를 명확히 하여 훑어보기(Skimming) 좋게 만드세요.'
    ],
    codeSnippet: `// Typography Scale
<h1 className="text-4xl font-bold tracking-tight">Main Title</h1>
<h2 className="text-2xl font-semibold mt-4">Section Title</h2>
<p className="text-base text-slate-600 leading-relaxed">
  Body text should be readable and comfortable to scan.
</p>`
  },
  // --- LAYOUT (Structural) ---
  {
    id: 'header',
    name: 'Header (헤더)',
    category: TermCategory.LAYOUT,
    componentKey: 'header',
    shortDescription: '웹사이트 최상단에 위치하며, 로고와 네비게이션 메뉴를 포함하는 영역입니다.',
    fullDescription: 'Header는 사용자가 사이트에 들어왔을 때 가장 먼저 보게 되는 최상단 영역입니다. 보통 브랜드 로고, 메인 네비게이션(GNB), 검색창, 로그인 버튼 같은 전역적인 기능들을 포함합니다. 모든 페이지에서 동일하게 유지되는 경우가 많습니다.',
    bestPractices: [
      'Semantic HTML 태그인 <header>를 사용하세요.',
      '화면 스크롤 시 상단에 고정(Sticky)되게 하여 접근성을 높일 수 있습니다.',
      '너무 많은 요소를 넣지 말고, 핵심 네비게이션에 집중하세요.'
    ],
    codeSnippet: `// 실제 DashboardScene에 사용된 헤더 코드
<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
  <div className="flex items-center gap-4">
    {/* 모바일 메뉴 버튼 */}
    <Menu className="md:hidden text-slate-500" />
    
    {/* 검색 필드 */}
    <div className="relative hidden sm:block w-64">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
      <input 
        type="text" 
        placeholder="Search..." 
        className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary-500 outline-none" 
      />
    </div>
  </div>
  
  <div className="flex items-center gap-4">
    {/* 알림 아이콘 */}
    <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-full relative">
      <Bell size={20} />
      <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
    </button>
  </div>
</header>`
  },
  {
    id: 'footer',
    name: 'Footer (푸터)',
    category: TermCategory.LAYOUT,
    componentKey: 'footer',
    shortDescription: '웹사이트 최하단에 위치하며, 저작권 정보나 사이트맵 등을 표시합니다.',
    fullDescription: 'Footer는 본문 콘텐츠가 끝나는 페이지의 가장 아랫부분입니다. 저작권 표시(Copyright), 이용약관, 개인정보처리방침, 소셜 미디어 링크, 회사 주소 등 부차적이지만 법적으로 필요하거나 유용한 정보들을 담습니다.',
    bestPractices: [
      'Semantic HTML 태그인 <footer>를 사용하세요.',
      '모바일 환경에서는 세로로 내용을 쌓아서 배치하세요.',
      '배경색을 어둡게 하거나 구분선을 두어 본문과 명확히 구분하세요.'
    ],
    codeSnippet: `// 실제 LandingScene에 사용된 푸터 코드
<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
    <div className="col-span-2 md:col-span-1">
      <div className="text-white font-bold text-lg mb-4 flex items-center gap-2">
        <Globe size={20}/> Globex
      </div>
      <p className="text-sm">Making the world a better place through software.</p>
    </div>
    
    {/* 네비게이션 링크 컬럼 */}
    <div>
      <h4 className="text-white font-bold mb-4">Product</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-white">Features</a></li>
        <li><a href="#" className="hover:text-white">Pricing</a></li>
      </ul>
    </div>
    {/* ... 추가 컬럼들 ... */}
  </div>
</footer>`
  },
  {
    id: 'sidebar',
    name: 'Sidebar (사이드바)',
    category: TermCategory.LAYOUT,
    componentKey: 'sidebar',
    shortDescription: '본문 옆에 위치하여 보조 네비게이션이나 필터, 광고 등을 표시하는 영역입니다.',
    fullDescription: 'Sidebar(또는 Aside)는 메인 콘텐츠의 왼쪽이나 오른쪽에 위치하는 수직 열(Column)입니다. 데스크톱에서는 주로 카테고리 목록, 검색 필터, 목차(Table of Contents) 등을 보여주며, 모바일에서는 햄버거 메뉴를 눌렀을 때 나타나는 서랍(Drawer) 형태로 변형되기도 합니다.',
    bestPractices: [
      'Semantic HTML 태그인 <aside>를 사용하세요.',
      '메인 콘텐츠보다 시각적 비중을 낮게 잡으세요.',
      '모바일에서는 화면을 가리지 않도록 숨겼다가 나타나게 처리하세요.'
    ],
    codeSnippet: `// 실제 DashboardScene에 사용된 사이드바 코드
<aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col h-full shrink-0">
  {/* 로고 영역 */}
  <div className="p-4 flex items-center gap-2 border-b border-slate-800 h-16">
    <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center font-bold">L</div>
    <span className="font-bold text-lg">Lexicon Admin</span>
  </div>

  {/* 네비게이션 메뉴 */}
  <nav className="flex-1 p-4 space-y-2">
    <div className="p-3 rounded-lg text-sm font-medium bg-primary-600 text-white">Dashboard</div>
    <div className="p-3 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white">Analytics</div>
    <div className="p-3 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white">Customers</div>
    <div className="p-3 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white">Settings</div>
  </nav>

  {/* 하단 사용자 프로필 */}
  <div className="p-4 border-t border-slate-800">
     <div className="flex items-center gap-3">
       <div className="w-8 h-8 rounded-full bg-slate-700"></div>
       <div className="text-xs">
         <div className="text-white">Admin User</div>
         <div className="text-slate-500">admin@test.com</div>
       </div>
     </div>
  </div>
</aside>`
  },
  {
    id: 'hero',
    name: 'Hero Section (히어로 섹션)',
    category: TermCategory.LAYOUT,
    componentKey: 'hero',
    shortDescription: '메인 페이지 최상단에 위치하여 사용자의 시선을 끄는 큰 배너 영역입니다.',
    fullDescription: 'Hero Section(또는 Jumbotron)은 헤더 바로 아래에 위치하는 크고 눈에 띄는 영역입니다. 사이트의 첫인상을 결정짓는 중요한 요소로, 고화질 이미지나 영상, 강렬한 헤드라인, 그리고 주요 행동 유도 버튼(CTA)을 포함합니다.',
    bestPractices: [
      '가독성을 위해 배경 이미지 위에 텍스트를 올릴 때는 어두운 오버레이를 까세요.',
      '가장 중요한 단 하나의 행동(버튼)만 강조하세요.',
      '페이지 로딩 속도를 저하시키지 않도록 이미지를 최적화하세요.'
    ],
    codeSnippet: `// 실제 LandingScene에 사용된 히어로 섹션 코드
<section className="relative bg-slate-900 text-white py-24 overflow-hidden">
  {/* 배경 이미지와 오버레이 */}
  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/...')] opacity-20 bg-cover bg-center"></div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <span className="inline-block py-1 px-3 rounded-full bg-primary-500/20 border border-primary-500 text-primary-300 text-xs font-bold uppercase tracking-wider mb-6">
      v2.0 Released
    </span>
    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
      Build software <span className="text-primary-400">faster</span><br/> than ever before.
    </h1>
    <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10">
      The ultimate platform for developers to deploy, manage, and scale their applications with ease.
    </p>
    <div className="flex justify-center gap-4">
      <button className="bg-primary-600 text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-primary-500 shadow-lg shadow-primary-900/50 transition-all flex items-center gap-2">
        Start Building <ChevronRight size={20} />
      </button>
    </div>
  </div>
</section>`
  },
  // --- LAYOUT (Basic) ---
  {
    id: 'flexbox',
    name: 'Flexbox (플렉스박스)',
    category: TermCategory.LAYOUT,
    componentKey: 'flexbox',
    shortDescription: '1차원적인 레이아웃 모델로, 아이템 간의 공간 배분과 정렬을 효율적으로 처리합니다.',
    fullDescription: 'Flexbox(Flexible Box)는 행(Row) 또는 열(Column)이라는 하나의 차원에서 아이템들을 정렬하고 공간을 분배하는 레이아웃 모델입니다. 요소들의 크기가 불분명하거나 동적으로 변할 때 유용하며, 수직/수평 중앙 정렬이 매우 간편합니다.',
    bestPractices: [
      '단일 차원(한 줄)의 레이아웃을 잡을 때 주로 사용하세요.',
      'justify-content와 align-items를 사용하여 정렬을 제어하세요.',
      '복잡한 2차원 그리드 구조보다는 네비게이션 바나 버튼 그룹 등에 적합합니다.'
    ],
    codeSnippet: `// DashboardScene의 헤더 레이아웃 (Flexbox 사용 예)
<div className="flex items-center justify-between">
  {/* 왼쪽 그룹: 메뉴 버튼 + 검색창 */}
  <div className="flex items-center gap-4">
    <Menu />
    <SearchInput />
  </div>
  
  {/* 오른쪽 그룹: 알림 아이콘 */}
  <div className="flex items-center gap-4">
    <Bell />
  </div>
</div>`
  },
  {
    id: 'grid',
    name: 'Grid (그리드)',
    category: TermCategory.LAYOUT,
    componentKey: 'grid',
    shortDescription: '2차원 레이아웃 시스템으로, 행과 열을 동시에 제어하여 복잡한 레이아웃을 구성합니다.',
    fullDescription: 'CSS Grid Layout은 웹을 위한 가장 강력한 2차원 레이아웃 시스템입니다. 콘텐츠를 행(Row)과 열(Column)로 배치할 수 있으며, 전체 페이지의 구조를 잡거나 복잡한 대시보드 레이아웃을 구성하는 데 이상적입니다.',
    bestPractices: [
      '전체 페이지 레이아웃이나 복잡한 2차원 구조에 사용하세요.',
      'fr 단위를 사용하여 유연한 공간 분배를 활용하세요.',
      'gap 속성을 사용하여 아이템 간의 간격을 일관되게 유지하세요.'
    ],
    codeSnippet: `// 실제 DashboardScene의 통계 카드 그리드
// 모바일: 1열, 태블릿: 2열, PC: 4열 (반응형 그리드)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <Card label="Total Revenue" value="$45,231" />
  <Card label="Active Users" value="2,345" />
  <Card label="Bounce Rate" value="12.5%" />
  <Card label="Growth" value="+24.5%" />
</div>`
  },
  {
    id: 'container',
    name: 'Container (컨테이너)',
    category: TermCategory.LAYOUT,
    componentKey: 'container',
    shortDescription: '콘텐츠의 폭을 제한하고 중앙에 배치하여 가독성을 높이는 래퍼(Wrapper) 요소입니다.',
    fullDescription: 'Container는 웹사이트의 콘텐츠가 화면 전체 너비로 늘어나는 것을 방지하는 가장 기본적인 레이아웃 요소입니다. 보통 적절한 최대 너비(max-width)를 가지고 있으며 화면 중앙에 위치하여, 사용자가 콘텐츠를 편안하게 읽을 수 있도록 돕습니다.',
    bestPractices: [
      '화면 크기(Breakpoint)에 따라 적절한 패딩(Padding)을 주세요.',
      '텍스트 콘텐츠가 너무 길어지지 않도록 적절한 최대 너비를 설정하세요.',
      '섹션별로 배경색을 다르게 할 때는 컨테이너 바깥에 배경을 둡니다.'
    ],
    codeSnippet: `// 실제 FormScene의 컨테이너 코드
<div className="w-full max-w-2xl px-4">
  <div className="mb-8 text-center">
    <h1 className="text-3xl font-bold text-slate-900">Account Settings</h1>
    <p className="text-slate-500 mt-2">Manage your profile and preferences</p>
  </div>
  {/* ... 폼 콘텐츠 ... */}
</div>`
  },
  {
    id: 'card',
    name: 'Card (카드)',
    category: TermCategory.LAYOUT,
    componentKey: 'card',
    shortDescription: '하나의 주제에 대한 콘텐츠와 액션을 담고 있는 유연하고 확장 가능한 컨테이너입니다.',
    fullDescription: 'Card UI는 정보 덩어리를 직사각형 모양의 컨테이너에 담아 보여주는 패턴입니다. 이미지, 제목, 요약 텍스트, 액션 버튼 등을 포함하며, 모바일과 데스크톱 모두에서 유연하게 배치할 수 있어 매우 인기가 높습니다.',
    bestPractices: [
      '관련된 정보끼리 명확하게 그룹화하세요.',
      '그림자나 테두리를 사용하여 배경과 구분감을 주세요.',
      '카드 전체를 클릭 가능하게 만들 경우, 내부 텍스트 선택이 어려울 수 있으니 주의하세요.'
    ],
    codeSnippet: `// 실제 DashboardScene의 통계 카드
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
  <div className="flex justify-between items-start mb-2">
    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
      <DollarSign size={18} />
    </div>
    <button className="text-slate-300 hover:text-slate-500">
      <MoreVertical size={16} />
    </button>
  </div>
  <div className="text-2xl font-bold text-slate-900">$45,231</div>
  <div className="text-xs text-slate-500 font-medium mt-1">Total Revenue</div>
</div>`
  },
  {
    id: 'accordion',
    name: 'Accordion (아코디언)',
    category: TermCategory.LAYOUT,
    componentKey: 'accordion',
    shortDescription: '제목을 클릭하면 숨겨진 상세 내용이 펼쳐지는 수직 누적 목록입니다.',
    fullDescription: 'Accordion은 제한된 공간에서 많은 양의 정보를 보여주기 위해 사용됩니다. 사용자는 보고 싶은 섹션의 헤더를 클릭하여 내용을 펼치거나 접을 수 있어, 현재 관심 있는 정보에만 집중할 수 있습니다.',
    bestPractices: [
      '각 섹션의 내용은 명확하고 간결한 제목을 가져야 합니다.',
      '화살표나 아이콘(Chevron)을 사용하여 펼침/접힘 상태를 명확히 표시하세요.',
      '너무 많은 섹션을 동시에 열어두면 스크롤이 길어질 수 있습니다.'
    ],
    codeSnippet: `// React Example (Concept)
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
      {isOpen && <div className="p-4">{content}</div>}
    </div>
  );
}`
  },
  // --- DISPLAY ---
  {
    id: 'code-block',
    name: 'Code Block (코드 블록)',
    category: TermCategory.DISPLAY,
    componentKey: 'code-block',
    shortDescription: '소스 코드를 가독성 있게 보여주는 구문 강조된 텍스트 영역입니다.',
    fullDescription: 'Code Block은 기술 문서나 개발자 도구에서 코드를 보여줄 때 사용됩니다. 일반 텍스트와 구분하기 위해 등폭 폰트(Monospace)를 사용하고, 구문 강조(Syntax Highlighting)를 적용하여 가독성을 높입니다.',
    bestPractices: [
      '긴 코드는 스크롤되도록 처리하거나 줄 바꿈을 고려하세요.',
      '복사 버튼을 제공하여 사용자 편의성을 높이세요.',
      '언어별로 적절한 구문 강조 색상을 사용하세요.'
    ],
    codeSnippet: `<pre className="bg-slate-800 text-slate-200 p-4 rounded-lg overflow-x-auto">
  <code>console.log('Hello World');</code>
</pre>`
  },
  {
    id: 'toc',
    name: 'Table of Contents (목차)',
    category: TermCategory.NAVIGATION,
    componentKey: 'toc',
    shortDescription: '문서 내의 섹션으로 빠르게 이동할 수 있는 내부 네비게이션 목록입니다.',
    fullDescription: 'Table of Contents(TOC)는 긴 문서에서 현재 위치를 파악하고 다른 섹션으로 점프할 수 있게 도와줍니다. 주로 화면 오른쪽이나 왼쪽에 고정(Sticky)되어 스크롤을 따라다닙니다.',
    bestPractices: [
      '현재 보고 있는 섹션을 하이라이트하여 위치를 알려주세요.',
      '클릭 시 부드러운 스크롤(Smooth Scroll)로 이동하게 하세요.',
      '너무 깊은 단계(H4, H5)까지 표시하면 오히려 복잡해질 수 있습니다.'
    ],
    codeSnippet: `<aside className="sticky top-20 w-64">
  <h4 className="font-bold mb-2">On this page</h4>
  <ul className="space-y-2 border-l border-slate-200">
    <li className="pl-4 border-l-2 border-primary-500 text-primary-600">Introduction</li>
    <li className="pl-4 text-slate-500 hover:text-slate-800">Installation</li>
  </ul>
</aside>`
  },
  // --- INPUT (Basic Atoms) ---
  {
    id: 'text-field',
    name: 'Text Field (텍스트 필드)',
    category: TermCategory.INPUT,
    componentKey: 'textfield',
    shortDescription: '사용자가 한 줄의 텍스트를 입력할 수 있는 기본적인 입력 창입니다.',
    fullDescription: 'Text Field(또는 Input)는 UI에서 가장 흔한 입력 요소입니다. 이름, 이메일, 주소 등 짧은 텍스트 정보를 받을 때 사용됩니다. 레이블(Label), 플레이스홀더(Placeholder), 도움말 텍스트 등과 함께 쓰여 사용자의 입력을 유도합니다.',
    bestPractices: [
      '항상 입력 필드의 목적을 알리는 레이블(Label)을 함께 표시하세요.',
      '플레이스홀더는 힌트일 뿐, 레이블을 대신할 수 없습니다.',
      '입력 오류가 발생하면 필드 바로 근처에 붉은색 메시지로 알려주세요.'
    ],
    codeSnippet: `// 실제 FormScene의 입력 필드
<div>
  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
  <div className="relative">
    <input 
      type="email" 
      defaultValue="ui.lexicon@example.com" 
      className="w-full border border-slate-300 rounded-lg px-3 py-2 pl-10 focus:ring-2 focus:ring-primary-500 outline-none" 
    />
    <span className="absolute left-3 top-2.5 text-slate-400">@</span>
  </div>
  <p className="mt-1 text-xs text-slate-500">We'll use this for account notifications.</p>
</div>`
  },
  {
    id: 'checkbox',
    name: 'Checkbox (체크박스)',
    category: TermCategory.INPUT,
    componentKey: 'checkbox',
    shortDescription: '여러 개의 옵션 중 하나 이상을 선택하거나, 단일 항목의 On/Off를 설정합니다.',
    fullDescription: 'Checkbox는 사용자가 목록에서 "다수"의 항목을 선택할 수 있게 하거나(예: 관심사 선택), "동의함"과 같은 이진 선택을 할 때 사용됩니다. 라디오 버튼과 달리 여러 개를 동시에 선택할 수 있다는 점이 핵심입니다.',
    bestPractices: [
      '사용자가 여러 개의 옵션을 동시에 선택할 수 있을 때 사용하세요.',
      '클릭 영역을 체크박스 아이콘뿐만 아니라 텍스트 레이블까지 포함시키세요.',
      '설정이 즉시 반영되는 경우에는 체크박스보다 토글 스위치가 더 적합할 수 있습니다.'
    ],
    codeSnippet: `// 실제 FormScene의 체크박스
<div className="flex items-start">
   <input 
     type="checkbox" 
     defaultChecked 
     className="mt-1 w-4 h-4 text-primary-600 rounded border-slate-300" 
   />
   <div className="ml-3">
     <label className="text-sm font-medium text-slate-700">Product Updates</label>
     <p className="text-xs text-slate-500">Receive new features and updates.</p>
   </div>
</div>`
  },
  {
    id: 'radio',
    name: 'Radio Button (라디오 버튼)',
    category: TermCategory.INPUT,
    componentKey: 'radio',
    shortDescription: '여러 옵션 중 "단 하나"만 선택해야 할 때 사용하는 버튼 그룹입니다.',
    fullDescription: '오래된 라디오의 채널 버튼에서 유래된 이름입니다. 한 버튼을 누르면 다른 버튼이 튀어나오는 것처럼, 그룹 내에서 상호 배타적인(Mutually Exclusive) 선택을 강제할 때 사용합니다.',
    bestPractices: [
      '옵션이 2~5개 정도로 적을 때 사용하세요. (너무 많으면 드롭다운 권장)',
      '항상 기본값(Default) 하나를 선택된 상태로 두는 것이 좋습니다.',
      '한 번 선택하면 선택을 취소(모두 선택 안 함)할 수 없는 것이 기본 동작입니다.'
    ],
    codeSnippet: `// 실제 FormScene의 라디오 그룹
<div className="space-y-3">
  <label className="flex items-center">
    <input type="radio" name="visibility" defaultChecked className="w-4 h-4 text-primary-600 border-slate-300" />
    <span className="ml-3 text-sm text-slate-700">Public (Everyone can see)</span>
  </label>
  <label className="flex items-center">
    <input type="radio" name="visibility" className="w-4 h-4 text-primary-600 border-slate-300" />
    <span className="ml-3 text-sm text-slate-700">Private (Only me)</span>
  </label>
</div>`
  },
  {
    id: 'toggle',
    name: 'Toggle / Switch (토글 스위치)',
    category: TermCategory.INPUT,
    componentKey: 'toggle',
    shortDescription: '물리적인 전등 스위치처럼 기능을 켜거나 끄는(On/Off) 조작을 합니다.',
    fullDescription: 'Toggle Switch는 두 가지 상태(주로 On/Off) 중 하나를 선택합니다. 체크박스와 유사하지만, 토글은 보통 누르는 "즉시" 설정이 시스템에 반영되는 느낌을 줄 때(예: Wi-Fi 켜기, 다크 모드 전환) 주로 사용됩니다.',
    bestPractices: [
      '설정 변경이 즉시 적용되는 경우에 사용하세요.',
      '상태 레이블(On/Off)보다는 스위치의 색상이나 위치로 상태를 명확히 보여주세요.',
      '목록 선택보다는 "기능 활성화" 여부에 집중하세요.'
    ],
    codeSnippet: `// 실제 FormScene의 토글 스위치 (Headless UI 패턴)
<button className="bg-primary-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none">
  <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>`
  },
  {
    id: 'dropdown',
    name: 'Dropdown / Select (드롭다운)',
    category: TermCategory.INPUT,
    componentKey: 'dropdown',
    shortDescription: '클릭 시 옵션 목록이 펼쳐져 그중 하나를 선택할 수 있는 메뉴입니다.',
    fullDescription: 'Dropdown(또는 Select Box)은 공간을 절약하면서 사용자가 미리 정의된 목록 중 하나를 선택하게 합니다. 옵션이 5개 이상으로 많아서 라디오 버튼으로 나열하기 힘들 때 유용합니다.',
    bestPractices: [
      '옵션이 너무 적으면(2-3개) 라디오 버튼이나 세그먼트 컨트롤을 고려하세요.',
      '현재 선택된 값이 무엇인지 닫힌 상태에서도 명확히 보여야 합니다.',
      '데스크톱과 모바일(네이티브 피커)에서의 동작 방식 차이를 고려하세요.'
    ],
    codeSnippet: `// 실제 DashboardScene의 드롭다운
<select className="text-xs border-slate-200 rounded-md py-1 px-2 bg-slate-50">
  <option>This Year</option>
  <option>Last Year</option>
</select>`
  },
  {
    id: 'segmented-control',
    name: 'Segmented Control (세그먼티드 컨트롤)',
    category: TermCategory.INPUT,
    componentKey: 'segmented',
    shortDescription: '여러 선택지 중 하나를 선택하게 하는, 서로 연결된 버튼 그룹입니다.',
    fullDescription: 'Segmented Control은 뷰를 전환하거나 데이터를 필터링할 때 사용됩니다. 탭(Tab)과 비슷하지만, 보통 폼(Form) 내부나 더 좁은 범위의 UI 컨텍스트에서 사용되며, 라디오 버튼의 대안으로 쓰이기도 합니다.',
    bestPractices: [
      '세그먼트(선택지)의 개수는 2~5개 정도로 제한하세요.',
      '각 레이블의 길이를 비슷하게 맞추세요.',
      '선택된 상태가 시각적으로 명확히 구분되어야 합니다.'
    ],
    codeSnippet: `// 실제 DashboardScene의 기간 선택 컨트롤
<div className="bg-white p-1 rounded-lg border border-slate-200 flex text-xs">
  <button className="px-3 py-1.5 bg-slate-100 font-medium rounded text-slate-900 shadow-sm">
    Daily
  </button>
  <button className="px-3 py-1.5 text-slate-500 hover:bg-slate-50 rounded">
    Weekly
  </button>
</div>`
  },
  // --- DISPLAY ---
  {
    id: 'modal',
    name: 'Modal (모달)',
    category: TermCategory.DISPLAY,
    componentKey: 'modal',
    shortDescription: '현재 페이지 위에 띄워지는 대화 상자 또는 팝업 창입니다.',
    fullDescription: 'Modal(또는 Modal Dialog)은 사용자가 메인 콘텐츠와 상호작용하는 것을 일시적으로 중단시키고, 특정 작업에 집중하게 만듭니다. 중요한 확인, 간단한 양식 입력, 또는 상세 정보를 보여줄 때 사용됩니다.',
    bestPractices: [
      '사용자의 주의가 반드시 필요한 중요한 작업에 사용하세요.',
      '닫기 버튼(X), 배경 클릭, ESC 키 등으로 쉽게 닫을 수 있어야 합니다.',
      '모달 위에 또 다른 모달을 띄우는 중첩은 피하세요.'
    ],
    codeSnippet: `// React + Tailwind CSS 예시
<div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
  <div className="bg-white p-6 rounded-lg w-96">
    <h2>Modal Title</h2>
    <p>Modal Content...</p>
    <button onClick={closeModal}>Close</button>
  </div>
</div>`
  },
  {
    id: 'lightbox',
    name: 'Lightbox (라이트박스)',
    category: TermCategory.DISPLAY,
    componentKey: 'modal',
    shortDescription: '이미지나 미디어를 화면 중앙에 확대하여 보여주고 배경은 어둡게 처리하는 오버레이입니다.',
    fullDescription: 'Lightbox는 갤러리에서 썸네일을 클릭했을 때 원본 이미지를 자세히 보여주기 위해 사용됩니다. 배경을 어둡게(Dimmed) 처리하여 사용자의 시선을 이미지에만 집중시킵니다. Modal의 일종이지만, 주로 미디어 감상에 특화되어 있습니다.',
    bestPractices: [
      '고해상도 이미지를 로딩할 때는 로딩 인디케이터를 보여주세요.',
      '이전/다음 이미지로 쉽게 이동할 수 있는 네비게이션을 제공하세요.',
      'ESC 키나 배경 클릭으로 쉽게 닫을 수 있어야 합니다.'
    ],
    codeSnippet: `// Lightbox Overlay Example (실제 GalleryScene 코드)
<div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
  <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
    <img 
      src={selectedImage} 
      className="max-w-full max-h-full object-contain rounded-sm shadow-2xl" 
    />
    <button className="absolute top-4 right-4 text-white/70 hover:text-white p-2">
      <X size={32} />
    </button>
  </div>
</div>`
  },
  {
    id: 'tooltip',
    name: 'Tooltip (툴팁)',
    category: TermCategory.DISPLAY,
    componentKey: 'tooltip',
    shortDescription: '요소 위에 마우스를 올렸을 때 나타나는 작은 설명 레이블입니다.',
    fullDescription: 'Tooltip은 아이콘이나 버튼 등 화면 공간상 자세한 텍스트를 넣기 힘든 요소에 대한 추가 설명을 제공합니다. 주로 마우스 호버(Hover)나 포커스 시에 나타납니다.',
    bestPractices: [
      '중요한 정보를 툴팁 안에 숨기지 마세요.',
      '텍스트는 아주 짧고 간결해야 합니다.',
      '마우스뿐만 아니라 키보드 사용자도 접근할 수 있어야 합니다.'
    ],
    codeSnippet: `// DashboardScene의 알림 아이콘 (Badge 패턴 포함)
<button className="p-2 text-slate-400 hover:bg-slate-100 rounded-full relative group">
  <Bell size={20} />
  {/* 알림 뱃지 */}
  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
  
  {/* (옵션) 툴팁 요소 */}
  <span className="absolute top-full mt-2 hidden group-hover:block bg-slate-800 text-white text-xs px-2 py-1 rounded">
    Notifications
  </span>
</button>`
  },
  // --- FEEDBACK ---
  {
    id: 'motion',
    name: 'Motion / Animation (모션)',
    category: TermCategory.FEEDBACK,
    componentKey: 'card', 
    shortDescription: 'UI 요소의 움직임을 통해 상태 변화나 물리적 상호작용을 시각적으로 표현합니다.',
    fullDescription: 'Motion Design은 정적인 화면에 생명력을 불어넣습니다. 단순히 화려함을 위한 것이 아니라, 사용자의 행동에 대한 즉각적인 피드백을 주거나, 화면 전환의 문맥(Context)을 이해시키는 데 중요한 역할을 합니다. 물리 기반 애니메이션(스프링 등)은 더욱 자연스러운 느낌을 줍니다.',
    bestPractices: [
      '애니메이션은 빠르고 부드러워야 합니다 (보통 200ms~400ms).',
      '사용자의 시선을 유도하거나 중요한 변화를 알릴 때 사용하세요.',
      '너무 과한 움직임은 멀미(Motion Sickness)를 유발할 수 있으므로 주의하세요.'
    ],
    codeSnippet: `// CSS Transition (실제 AnimationScene 코드)
<div className="transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 active:scale-90 shadow-xl hover:shadow-2xl">
  Springy Card
</div>

// Animation Keyframes (Tailwind)
// animate-bounce: { 0%, 100%: { transform: 'translateY(-25%)' }, 50%: { transform: 'translateY(0)' } }`
  },
  {
    id: 'toast',
    name: 'Toast (토스트)',
    category: TermCategory.FEEDBACK,
    componentKey: 'toast',
    shortDescription: '작업 결과를 알려주는 짧고 비침해적인 알림 메시지입니다.',
    fullDescription: 'Toast는 사용자의 작업에 대한 피드백(성공, 에러 등)을 화면 구석에 잠깐 보여줍니다. 모달과 달리 사용자의 작업을 방해하지 않고 자동으로 사라집니다.',
    bestPractices: [
      '내용을 간결하게 작성하세요.',
      '사용자가 즉시 해결해야 하는 치명적인 오류에는 사용하지 마세요.',
      '메시지가 길다면 사용자가 수동으로 닫을 수 있게 하세요.'
    ],
    codeSnippet: `// FormScene의 저장 버튼 (Toast 트리거 예시)
<button 
  onClick={() => toast.success('Saved!')}
  className="px-4 py-2 bg-primary-600 rounded-lg text-sm font-medium text-white hover:bg-primary-700 flex items-center gap-2 shadow-sm"
>
  <Save size={16} /> Save Changes
</button>`
  },
  {
    id: 'skeleton',
    name: 'Skeleton Loader (스켈레톤)',
    category: TermCategory.FEEDBACK,
    componentKey: 'skeleton',
    shortDescription: '데이터 로딩 중에 보여주는 콘텐츠의 윤곽선 형태의 플레이스홀더입니다.',
    fullDescription: 'Skeleton Screen은 실제 콘텐츠가 로드되기 전에 그 자리에 회색 박스나 흐릿한 형태를 보여줍니다. 이는 단순한 로딩 스피너보다 체감 대기 시간을 줄여주고, 곧 콘텐츠가 뜰 것이라는 기대감을 줍니다.',
    bestPractices: [
      '실제 로드될 콘텐츠의 크기 및 레이아웃과 비슷하게 만드세요.',
      '은은한 애니메이션(펄스 효과 등)을 넣어 진행 중임을 알리세요.',
      '데이터가 준비되면 즉시 실제 콘텐츠로 교체하세요.'
    ],
    codeSnippet: `// 실제 DashboardScene의 로딩 스켈레톤
<div className="flex items-center gap-3 animate-pulse">
  {/* 아바타 스켈레톤 */}
  <div className="w-8 h-8 rounded-full bg-slate-200"></div>
  {/* 텍스트 라인 스켈레톤 */}
  <div className="flex-1 space-y-2">
    <div className="h-2 bg-slate-200 rounded w-3/4"></div>
    <div className="h-2 bg-slate-100 rounded w-1/2"></div>
  </div>
</div>`
  },
  // --- NAVIGATION ---
  {
    id: 'breadcrumbs',
    name: 'Breadcrumbs (브레드크럼)',
    category: TermCategory.NAVIGATION,
    componentKey: 'breadcrumbs',
    shortDescription: '현재 페이지의 위치를 계층 구조로 보여주는 네비게이션 경로입니다.',
    fullDescription: 'Breadcrumbs("헨젤과 그레텔"의 빵부스러기)는 홈에서부터 현재 페이지까지의 경로를 보여줍니다. 사용자가 사이트 구조를 이해하고 상위 카테고리로 쉽게 이동할 수 있게 돕습니다.',
    bestPractices: [
      '주로 페이지 상단, 메인 콘텐츠 바로 위에 배치하세요.',
      '구분 기호로 화살표(>)나 슬래시(/)를 사용하세요.',
      '현재 보고 있는 마지막 항목은 클릭되지 않게 하세요.'
    ],
    codeSnippet: `// 실제 DashboardScene의 브레드크럼
<div className="flex items-center text-xs text-slate-500 gap-2">
  <span>Home</span> 
  <span>/</span> 
  <span className="text-primary-600 font-medium">Dashboard</span>
</div>`
  },
  {
    id: 'scrollbar',
    name: 'Scrollbar (스크롤바)',
    category: TermCategory.NAVIGATION,
    componentKey: 'scrollbar',
    shortDescription: '화면보다 긴 콘텐츠를 볼 수 있도록 이동시켜주는 뷰포트 제어 요소입니다.',
    fullDescription: 'Scrollbar는 현재 보고 있는 화면이 전체 콘텐츠 중 어디에 위치하는지 시각적으로 알려주고, 이동할 수 있게 해줍니다. 최근에는 모바일의 영향으로 평소에는 숨겨져 있다가 스크롤 할 때만 나타나는 오버레이 스타일이 유행입니다.',
    bestPractices: [
      '스크롤 가능한 영역임을 명확히 인지할 수 있게 하세요.',
      '너무 얇아서 마우스로 잡기 힘들게 만들지 마세요.',
      '가로 스크롤은 마우스 휠로 조작하기 어려우므로 신중하게 사용하세요.'
    ],
    codeSnippet: `/* CSS Custom Scrollbar (Webkit) */
.custom-scroll::-webkit-scrollbar {
  width: 8px;
}
.custom-scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}
.custom-scroll::-webkit-scrollbar-thumb:hover {
  background: #555;
}`
  }
];