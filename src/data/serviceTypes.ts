export interface ProcessStep {
  title: string;
  description: string;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface ServiceType {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  priceRange: PriceRange;
  emergency: boolean;
  icon: string;
  image: string;
  processSteps: ProcessStep[];
}

export const serviceTypes: ServiceType[] = [
  {
    slug: 'forklift-battery',
    name: '지게차 배터리 교체',
    shortDescription: '전기지게차 전용 산업용 납축전지 및 리튬이온 배터리를 전국 현장에 신속하게 교체합니다.',
    description:
      '밧데리몬스터 max는 전기지게차에 사용되는 산업용 배터리 교체 전문 서비스를 제공합니다. 납축전지(납산), 리튬이온(Li-ion), AGM 등 모든 종류의 지게차 배터리를 취급하며, 현장 방문 교체부터 배터리 재생까지 원스톱으로 처리합니다. 전국 당일 출동 가능합니다.',
    priceRange: { min: 300000, max: 3000000 },
    emergency: true,
    icon: 'lucide:truck',
    image: '/images/forklift-battery.webp',
    processSteps: [
      {
        title: '배터리 상태 진단',
        description: '전문 장비로 현재 배터리 용량, 셀 전압, 내부 저항을 측정해 교체 필요 여부와 최적 배터리 스펙을 확인합니다.',
      },
      {
        title: '배터리 선정 및 견적',
        description: '지게차 모델, 사용 환경, 운행 시간 등을 분석해 최적의 배터리를 선정하고 투명한 가격으로 견적을 제공합니다.',
      },
      {
        title: '현장 배터리 교체',
        description: '전문 기사가 현장에 방문해 안전하게 구형 배터리를 분리하고 신형 배터리를 장착합니다. 충전기 호환성도 동시에 확인합니다.',
      },
      {
        title: '성능 테스트 및 교육',
        description: '교체 후 충방전 테스트를 실시하고 올바른 배터리 관리 방법을 담당자에게 교육합니다. 6개월 무상 A/S를 보증합니다.',
      },
    ],
  },
  {
    slug: 'industrial-battery',
    name: '산업용 배터리 설치',
    shortDescription: '공장, 창고, 물류센터에 필요한 대용량 산업용 배터리 시스템을 설계부터 설치까지 책임집니다.',
    description:
      '산업 현장에 특화된 대용량 배터리 시스템 설치 서비스입니다. 물류센터, 제조 공장, 대형 창고 등 다양한 산업 환경에 맞는 배터리 솔루션을 제공합니다. 전기공사업 면허를 보유한 전문 기사가 안전기준에 맞게 설치하며, 정기 유지보수 계약도 가능합니다.',
    priceRange: { min: 500000, max: 10000000 },
    emergency: false,
    icon: 'lucide:battery-charging',
    image: '/images/industrial-battery.webp',
    processSteps: [
      {
        title: '현장 조사 및 수요 분석',
        description: '현장을 방문해 전력 사용 패턴, 설치 환경, 안전 요구사항을 분석하고 최적의 배터리 시스템 사양을 결정합니다.',
      },
      {
        title: '배터리 시스템 설계',
        description: '분석 결과를 바탕으로 배터리 용량, 충전기 사양, 배터리 랙 배치 등 상세 설계 도면을 작성하고 고객 승인을 받습니다.',
      },
      {
        title: '전문 설치 및 배선',
        description: '전기공사업 면허 기사가 안전기준에 따라 배터리 랙 설치, 전기 배선, 충전기 연결을 진행합니다.',
      },
      {
        title: '시운전 및 인수인계',
        description: '시스템 전체 시운전 후 BMS(배터리 관리 시스템) 설정을 완료하고, 운영 매뉴얼과 함께 담당자에게 인수인계합니다.',
      },
    ],
  },
  {
    slug: 'ups-battery',
    name: 'UPS 배터리 설치',
    shortDescription: '무정전전원장치(UPS)용 배터리를 신속하게 교체하여 서버실과 중요 장비를 안전하게 보호합니다.',
    description:
      'UPS(무정전전원장치) 배터리 교체 및 설치 전문 서비스입니다. 데이터센터, 서버실, 병원, 금융기관 등 전력 중단이 허용되지 않는 환경에서 안전하게 배터리를 교체합니다. APC, Eaton, Schneider, PowerWare 등 모든 브랜드 호환 가능합니다.',
    priceRange: { min: 100000, max: 2000000 },
    emergency: true,
    icon: 'lucide:shield',
    image: '/images/ups-battery.webp',
    processSteps: [
      {
        title: 'UPS 배터리 상태 점검',
        description: 'UPS 시스템 배터리 상태를 점검하고 교체 필요 여부를 확인합니다. 배터리 수명, 용량, 백업 시간을 측정합니다.',
      },
      {
        title: '적합 배터리 선정',
        description: 'UPS 모델, 부하 용량, 백업 시간 요구사항에 맞는 OEM 동등 또는 상위 사양의 배터리를 선정합니다.',
      },
      {
        title: '무중단 배터리 교체',
        description: '운영 중인 시스템을 중단하지 않고 안전하게 배터리를 교체합니다. 필요시 바이패스 운전 방식으로 진행합니다.',
      },
      {
        title: '부하 테스트 및 기록',
        description: '교체 완료 후 실제 부하 조건에서 백업 시간을 테스트하고 결과를 기록합니다. 다음 교체 예정일도 함께 안내합니다.',
      },
    ],
  },
  {
    slug: 'solar-ess',
    name: '태양광 ESS 배터리',
    shortDescription: '태양광 발전 시스템과 연계한 에너지저장장치(ESS) 배터리 설치 및 유지보수 서비스입니다.',
    description:
      '태양광 발전 연계 에너지저장장치(ESS) 배터리 설치 전문 서비스입니다. 가정용, 상업용, 산업용 ESS 시스템에 사용되는 리튬이온 배터리 설치와 교체를 담당합니다. 정부 보조금 신청 지원과 한전 연계 작업도 함께 처리합니다.',
    priceRange: { min: 2000000, max: 50000000 },
    emergency: false,
    icon: 'lucide:sun',
    image: '/images/solar-ess.webp',
    processSteps: [
      {
        title: '발전량 및 부하 분석',
        description: '태양광 발전량 데이터와 전력 사용 패턴을 분석해 최적의 ESS 배터리 용량을 산출합니다.',
      },
      {
        title: 'ESS 배터리 시스템 설계',
        description: '분석 결과를 바탕으로 배터리 모듈 구성, PCS 연계, BMS 설정 등 상세 설계를 진행합니다.',
      },
      {
        title: 'ESS 배터리 설치 및 연계',
        description: '전기공사업 면허 기사가 ESS 배터리를 안전하게 설치하고 태양광 인버터 및 한전 계통과 연계합니다.',
      },
      {
        title: '모니터링 시스템 구축',
        description: '원격 모니터링 시스템을 구축해 배터리 상태를 실시간으로 확인할 수 있도록 하고, 운영 방법을 교육합니다.',
      },
    ],
  },
  {
    slug: 'ev-charger',
    name: '전기지게차 충전기 설치',
    shortDescription: '전기지게차 전용 산업용 충전기를 설치하고 기존 충전기를 고효율 모델로 업그레이드합니다.',
    description:
      '전기지게차용 산업용 충전기 설치 및 교체 서비스입니다. 단상, 3상 충전기부터 스마트 자동 충전기까지 다양한 모델을 취급합니다. 충전기 용량 계산, 전기 배선 공사, 설치 후 배터리 충전 테스트까지 원스톱으로 처리합니다.',
    priceRange: { min: 500000, max: 5000000 },
    emergency: false,
    icon: 'lucide:zap',
    image: '/images/ev-charger.webp',
    processSteps: [
      {
        title: '충전기 용량 및 사양 결정',
        description: '지게차 배터리 용량과 충전 시간 요구사항을 분석해 최적의 충전기 사양(전압, 전류, 충전 방식)을 결정합니다.',
      },
      {
        title: '전기 배선 및 분전반 작업',
        description: '충전기에 필요한 전기 용량을 확보하기 위해 분전반 증설 또는 전용 회로 추가 공사를 진행합니다.',
      },
      {
        title: '충전기 설치 및 배선',
        description: '충전기를 최적의 위치에 고정 설치하고 배터리 커넥터 연결, 접지 공사 등 안전 시공을 완료합니다.',
      },
      {
        title: '충전 테스트 및 최적화',
        description: '실제 배터리로 충전 테스트를 실시하고 충전기 파라미터를 최적화합니다. 충전기 사용 방법도 안내합니다.',
      },
    ],
  },
  {
    slug: 'battery-maintenance',
    name: '배터리 정기 유지보수',
    shortDescription: '산업용 배터리 수명을 극대화하는 정기 점검, 세정, 균등충전, 재생 서비스를 제공합니다.',
    description:
      '산업용 배터리의 성능을 최상으로 유지하기 위한 정기 유지보수 서비스입니다. 배터리 점검, 단자 세정, 전해액 보충, 균등충전, 배터리 재생 처리 등을 통해 배터리 수명을 최대 30% 연장할 수 있습니다. 정기 방문 계약을 통해 비용을 절감하세요.',
    priceRange: { min: 50000, max: 500000 },
    emergency: false,
    icon: 'lucide:wrench',
    image: '/images/battery-maintenance.webp',
    processSteps: [
      {
        title: '배터리 전체 점검',
        description: '각 셀 전압, 비중, 온도를 측정하고 케이블 및 커넥터 상태, 배터리 케이스 손상 여부를 확인합니다.',
      },
      {
        title: '세정 및 접점 처리',
        description: '배터리 표면, 단자, 커넥터를 세정하고 부식 방지 처리를 합니다. 케이블 조임 상태도 점검합니다.',
      },
      {
        title: '전해액 보충 및 균등충전',
        description: '납축전지의 경우 증류수를 보충하고 균등충전을 통해 셀 간 불균형을 해소합니다.',
      },
      {
        title: '점검 보고서 제출',
        description: '점검 결과를 보고서로 제출하고 배터리 교체 예상 시기와 관리 권고 사항을 안내합니다.',
      },
    ],
  },
  {
    slug: 'generator-battery',
    name: '비상발전기 배터리',
    shortDescription: '비상발전기 시동용 배터리를 교체하여 정전 시에도 안정적인 전력 공급을 보장합니다.',
    description:
      '비상발전기 시동용 납축전지 교체 및 유지보수 서비스입니다. 공장, 병원, 빌딩, 데이터센터 등에 설치된 비상발전기의 시동 배터리 교체를 전문으로 합니다. 정기 점검을 통해 비상 시 발전기가 즉시 가동될 수 있도록 관리합니다.',
    priceRange: { min: 100000, max: 800000 },
    emergency: true,
    icon: 'lucide:power',
    image: '/images/generator-battery.webp',
    processSteps: [
      {
        title: '발전기 배터리 상태 진단',
        description: '비상발전기 시동 배터리의 전압, 용량, 내부 저항을 측정해 교체 필요 여부와 최적 교체 시기를 판단합니다.',
      },
      {
        title: '적합 배터리 선정',
        description: '발전기 제조사 사양에 맞는 CCA(냉간시동전류), 용량, 크기의 배터리를 선정합니다.',
      },
      {
        title: '현장 배터리 교체',
        description: '발전기를 정지하지 않고 안전하게 배터리를 교체하거나, 필요시 계획된 중단 절차에 따라 교체합니다.',
      },
      {
        title: '시동 테스트 및 기록',
        description: '배터리 교체 후 발전기 시동 테스트를 실시하고 결과를 기록합니다. 다음 점검 일정도 함께 안내합니다.',
      },
    ],
  },
  {
    slug: 'battery-charger',
    name: '배터리 충전기 수리',
    shortDescription: '산업용 배터리 충전기 고장 수리 및 정밀 점검 서비스로 충전 시스템을 최적화합니다.',
    description:
      '산업용 배터리 충전기 고장 진단 및 수리 서비스입니다. 지게차 충전기, UPS 충전 모듈, 산업용 배터리 충전기 등 모든 종류의 충전기 수리를 전문으로 합니다. 현장 방문 수리 또는 수거 후 수리 방식으로 빠르게 처리합니다.',
    priceRange: { min: 80000, max: 600000 },
    emergency: true,
    icon: 'lucide:settings',
    image: '/images/battery-charger.webp',
    processSteps: [
      {
        title: '충전기 고장 진단',
        description: '충전기 내부 회로, IGBT, 트랜스포머, 제어 보드 등 각 부품을 점검해 고장 원인을 정확히 진단합니다.',
      },
      {
        title: '수리 방안 및 비용 안내',
        description: '진단 결과를 바탕으로 수리 방안과 예상 비용을 안내합니다. 수리 vs 교체 여부를 고객과 협의합니다.',
      },
      {
        title: '부품 교체 및 수리',
        description: '고장 부품을 정품 또는 동등 사양의 부품으로 교체하고 회로를 수리합니다. 납땜, 코팅 처리까지 마무리합니다.',
      },
      {
        title: '출력 테스트 및 반납',
        description: '수리 완료 후 실제 배터리와 연결해 충전 테스트를 실시하고 정상 동작을 확인한 후 반납합니다.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceType | undefined {
  return serviceTypes.find((service) => service.slug === slug);
}

export function getServiceName(slug: string): string {
  return getServiceBySlug(slug)?.name ?? slug;
}

export function getEmergencyServices(): ServiceType[] {
  return serviceTypes.filter((service) => service.emergency);
}
