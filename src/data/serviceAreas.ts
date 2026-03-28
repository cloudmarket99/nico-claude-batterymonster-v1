export interface ServiceArea {
  slug: string;
  name: string;
  county: string;
  population: number;
  priority: 'primary' | 'secondary' | 'tertiary';
  lat: number;
  lng: number;
  nearby: string[];
  description: string;
  zipCodes: string[];
  responseTime: string;
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'seoul',
    name: '서울',
    county: '서울특별시',
    population: 9700000,
    priority: 'primary',
    lat: 37.5665,
    lng: 126.9780,
    nearby: ['gyeonggi', 'incheon', 'seongnam'],
    description:
      '서울특별시는 대한민국 최대 산업 밀집 지역으로, 물류창고, 제조업체, 데이터센터 등 산업용 배터리 수요가 매우 높습니다. 밧데리몬스터 max는 서울 전 지역에 빠른 출동 서비스를 제공합니다.',
    zipCodes: ['01000', '02000', '03000', '04000', '05000', '06000'],
    responseTime: '1-2시간 이내',
  },
  {
    slug: 'gyeonggi',
    name: '경기',
    county: '경기도',
    population: 13600000,
    priority: 'primary',
    lat: 37.4138,
    lng: 127.5183,
    nearby: ['seoul', 'incheon', 'seongnam', 'ansan'],
    description:
      '경기도는 국내 최대 산업단지가 집중된 지역으로, 시화, 반월, 평택 등 대규모 공단에서 지게차 배터리 및 산업용 배터리 교체 수요가 지속적으로 발생합니다.',
    zipCodes: ['10000', '11000', '12000', '13000', '14000'],
    responseTime: '1-3시간 이내',
  },
  {
    slug: 'incheon',
    name: '인천',
    county: '인천광역시',
    population: 3000000,
    priority: 'primary',
    lat: 37.4563,
    lng: 126.7052,
    nearby: ['seoul', 'gyeonggi'],
    description:
      '인천광역시는 국제공항과 항구를 중심으로 물류 산업이 발달해 있어 전기지게차와 산업용 배터리 수요가 높습니다. 인천항 물류센터와 공단 지역에 특화된 배터리 서비스를 제공합니다.',
    zipCodes: ['21000', '22000', '23000', '24000'],
    responseTime: '1-2시간 이내',
  },
  {
    slug: 'seongnam',
    name: '성남',
    county: '경기도 성남시',
    population: 930000,
    priority: 'primary',
    lat: 37.4449,
    lng: 127.1388,
    nearby: ['seoul', 'gyeonggi'],
    description:
      '성남시는 판교 테크노밸리와 다수의 물류센터가 위치해 있어 UPS 배터리와 전기지게차 배터리 수요가 꾸준히 증가하고 있습니다.',
    zipCodes: ['13200', '13300', '13400', '13500'],
    responseTime: '1-2시간 이내',
  },
  {
    slug: 'busan',
    name: '부산',
    county: '부산광역시',
    population: 3400000,
    priority: 'secondary',
    lat: 35.1796,
    lng: 129.0756,
    nearby: ['ulsan'],
    description:
      '부산광역시는 국내 최대 항만 도시로 항만 물류, 수산업, 제조업 분야에서 산업용 배터리 수요가 높습니다. 부산항 주변 물류창고와 공단 지역에 배터리 설치 서비스를 제공합니다.',
    zipCodes: ['46000', '47000', '48000', '49000'],
    responseTime: '2-4시간 이내',
  },
  {
    slug: 'daegu',
    name: '대구',
    county: '대구광역시',
    population: 2400000,
    priority: 'secondary',
    lat: 35.8714,
    lng: 128.6014,
    nearby: ['ulsan'],
    description:
      '대구광역시는 섬유, 기계, 자동차 부품 산업이 발달해 있어 지게차 배터리와 산업용 배터리 교체 수요가 지속적으로 발생합니다.',
    zipCodes: ['41000', '42000', '43000'],
    responseTime: '2-4시간 이내',
  },
  {
    slug: 'gwangju',
    name: '광주',
    county: '광주광역시',
    population: 1500000,
    priority: 'secondary',
    lat: 35.1595,
    lng: 126.8526,
    nearby: ['daejeon'],
    description:
      '광주광역시는 자동차 및 가전 제조 산업 중심지로 생산 현장의 지게차 및 산업용 배터리 설치 수요가 높습니다.',
    zipCodes: ['61000', '62000'],
    responseTime: '2-4시간 이내',
  },
  {
    slug: 'daejeon',
    name: '대전',
    county: '대전광역시',
    population: 1500000,
    priority: 'secondary',
    lat: 36.3504,
    lng: 127.3845,
    nearby: ['gwangju'],
    description:
      '대전광역시는 대덕연구단지와 유성 산업단지를 중심으로 첨단 산업이 발달해 있어 UPS 배터리와 비상발전기 배터리 수요가 높습니다.',
    zipCodes: ['34000', '35000'],
    responseTime: '2-4시간 이내',
  },
  {
    slug: 'ulsan',
    name: '울산',
    county: '울산광역시',
    population: 1100000,
    priority: 'secondary',
    lat: 35.5384,
    lng: 129.3114,
    nearby: ['busan', 'daegu'],
    description:
      '울산광역시는 현대자동차, 현대중공업 등 대형 제조업체가 집중된 산업 도시로, 산업용 배터리와 지게차 배터리 교체 수요가 매우 높습니다.',
    zipCodes: ['44000', '45000'],
    responseTime: '2-4시간 이내',
  },
  {
    slug: 'ansan',
    name: '안산',
    county: '경기도 안산시',
    population: 660000,
    priority: 'secondary',
    lat: 37.3219,
    lng: 126.8309,
    nearby: ['gyeonggi', 'incheon'],
    description:
      '안산시 시화·반월 국가산업단지는 국내 최대 규모 공단 중 하나로, 수천 개의 제조업체에서 지게차 배터리와 산업용 배터리 교체 수요가 끊이지 않습니다.',
    zipCodes: ['15000', '15100', '15200'],
    responseTime: '1-3시간 이내',
  },
];

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}

export function getNearbyAreas(area: ServiceArea): ServiceArea[] {
  return area.nearby
    .map((slug) => getAreaBySlug(slug))
    .filter((a): a is ServiceArea => a !== undefined);
}

export function getAreaName(slug: string): string {
  return getAreaBySlug(slug)?.name ?? slug;
}
