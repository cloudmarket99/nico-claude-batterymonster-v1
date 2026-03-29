import type { ServiceArea } from './serviceAreas';
import type { ServiceType } from './serviceTypes';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Review {
  author: string;
  date: string;
  rating: number;
  text: string;
  area?: string;
  service?: string;
}

// Local constants (duplicated from business.ts to avoid circular imports)
const BUSINESS_NAME = '밧데리몬스터 max';
const OWNER_NAME = '대표 김철수';
const PHONE = '010-3700-3859';
const LICENSE = '전기공사업 면허 보유 | ISO 9001 인증';
const YEAR_ESTABLISHED = 2010;

function yearsInBusiness(): number {
  return new Date().getFullYear() - YEAR_ESTABLISHED;
}

export function generateFaqs(area: ServiceArea, service?: ServiceType): FaqItem[] {
  const nearbyStr = area.nearby.length > 0
    ? ` 인근 지역인 ${area.nearby.slice(0, 3).join(', ')} 등도 서비스 범위에 포함됩니다.`
    : '';

  if (service) {
    return [
      {
        question: `${area.name} 지역 ${service.name} 비용은 얼마인가요?`,
        answer: `${area.name} 지역 ${service.name} 비용은 작업 규모와 배터리 사양에 따라 ${service.priceRange.min.toLocaleString()}원부터 ${service.priceRange.max.toLocaleString()}원 사이입니다. 정확한 견적은 현장 방문 후 제공해드립니다. ${BUSINESS_NAME}(${PHONE})으로 연락주시면 무료 견적을 안내해드립니다.`,
      },
      {
        question: `${area.name}에서 ${service.name} 출동까지 얼마나 걸리나요?`,
        answer: `${area.name} 지역은 ${area.responseTime} 내 출동이 가능합니다.${service.emergency ? ' 긴급 출동 서비스도 제공하므로 24시간 언제든지 연락주세요.' : ' 미리 예약하시면 원하시는 시간에 방문해드립니다.'} ${BUSINESS_NAME} 고객센터(${PHONE})로 연락주시면 빠르게 일정을 잡아드립니다.`,
      },
      {
        question: `${BUSINESS_NAME}의 ${area.name} 서비스 자격과 보증은 어떻게 되나요?`,
        answer: `${BUSINESS_NAME}은 ${LICENSE}을 보유하고 있으며, ${YEAR_ESTABLISHED}년부터 ${yearsInBusiness()}년 이상의 산업용 배터리 설치 경험을 갖추고 있습니다. 모든 작업은 전문 자격 기사가 진행하며, ${service.name} 서비스에는 6개월 무상 A/S를 제공합니다.`,
      },
      {
        question: `${area.name}에서 ${service.name} 긴급 출동이 가능한가요?`,
        answer: `${service.emergency ? `네, ${area.name} 지역 긴급 출동 서비스를 24시간 운영하고 있습니다. ${area.responseTime} 내 도착을 목표로 합니다. 긴급 상황에서는 ${PHONE}으로 즉시 연락주세요.` : `${area.name} 지역 ${service.name}은 사전 예약 방식으로 운영됩니다. 당일 예약도 가능하오니 ${PHONE}으로 문의해주세요. 긴급 배터리 관련 문제는 별도 긴급 서비스를 이용하실 수 있습니다.`}`,
      },
      {
        question: `${area.name} 외에 어느 지역까지 서비스가 가능한가요?`,
        answer: `${area.name}(${area.county}) 전 지역에 서비스를 제공하며,${nearbyStr} 전국 모든 지역에 출장 서비스가 가능합니다. 원거리 지역의 경우 출장비가 추가될 수 있으니 ${PHONE}으로 문의해주세요.`,
      },
    ];
  }

  return [
    {
      question: `${area.name} 지역 산업용 배터리 설치 비용은 얼마인가요?`,
      answer: `${area.name} 지역 산업용 배터리 설치 비용은 배터리 종류와 용량에 따라 다양하게 책정됩니다. 지게차 배터리는 30만원부터, UPS 배터리는 10만원부터, 대용량 산업용 배터리는 50만원부터 시작합니다. 정확한 견적은 ${BUSINESS_NAME}(${PHONE})으로 연락주시면 무료로 안내해드립니다.`,
    },
    {
      question: `${area.name}에서 배터리 교체 출동까지 얼마나 걸리나요?`,
      answer: `${area.name} 지역은 ${area.responseTime} 내 출동이 가능합니다.${nearbyStr} 긴급 출동 서비스도 운영 중이므로 ${PHONE}으로 연락주시면 최대한 빠르게 출동하겠습니다.`,
    },
    {
      question: `${BUSINESS_NAME}은 어떤 자격과 인증을 보유하고 있나요?`,
      answer: `${BUSINESS_NAME}은 ${LICENSE}을 보유하고 있습니다. ${YEAR_ESTABLISHED}년 설립 이후 ${yearsInBusiness()}년간 전국 산업용 배터리 설치 전문 기업으로 운영되고 있으며, 모든 작업은 전문 자격 기사가 안전하게 진행합니다. ${OWNER_NAME}이 직접 품질을 관리합니다.`,
    },
    {
      question: `${area.name}에서 24시간 긴급 배터리 교체 서비스가 가능한가요?`,
      answer: `네, ${area.name} 지역을 포함한 전국에 24시간 긴급 출동 서비스를 운영하고 있습니다. 지게차 배터리 방전, 비상발전기 배터리 불량, UPS 배터리 경보 등 긴급 상황 발생 시 ${PHONE}으로 즉시 연락주시면 ${area.responseTime} 내 출동하겠습니다.`,
    },
    {
      question: `${area.name} 외 다른 지역도 서비스가 가능한가요?`,
      answer: `${area.name}(${area.county}) 전 지역은 물론,${nearbyStr} 서울, 경기, 인천, 부산, 대구, 광주, 대전, 울산 등 전국 모든 지역에 출장 서비스를 제공합니다. 원거리 지역의 경우 출장비 관련 내용은 ${PHONE}으로 문의해주세요.`,
    },
  ];
}

export const reviews: Review[] = [
  {
    author: '박민준',
    date: '2025-11-15',
    rating: 5,
    text: '서울 물류창고 지게차 배터리 5대를 한꺼번에 교체했는데, 당일 출동해서 빠르게 처리해줬습니다. 기사님이 친절하고 전문적이었으며, 교체 후 충방전 테스트까지 꼼꼼하게 해주셨습니다. 다음에도 꼭 이용하겠습니다.',
    area: 'seoul',
    service: 'forklift-battery',
  },
  {
    author: '이수진',
    date: '2025-10-20',
    rating: 5,
    text: '경기 시화공단 공장 UPS 배터리를 긴급 교체해야 했는데, 연락 후 2시간 만에 도착해서 서버 다운 없이 교체를 완료했습니다. 전문 장비로 꼼꼼하게 작업해주셔서 매우 만족합니다.',
    area: 'gyeonggi',
    service: 'ups-battery',
  },
  {
    author: '최동현',
    date: '2025-09-10',
    rating: 5,
    text: '부산 항만 물류센터 산업용 배터리 시스템 구축을 맡겼습니다. 현장 조사부터 설계, 설치까지 전 과정이 체계적으로 진행됐습니다. 납기일도 정확히 지켜주셨고, 사후 관리도 훌륭합니다.',
    area: 'busan',
    service: 'industrial-battery',
  },
  {
    author: '김태영',
    date: '2025-08-05',
    rating: 5,
    text: '인천 공단 전기지게차 충전기 3대 교체 작업입니다. 기존 충전기보다 훨씬 효율적인 모델로 교체해주셨고, 전기 공사까지 깔끔하게 처리해주셨습니다. 전기비 절감 효과도 체감되고 있습니다.',
    area: 'incheon',
    service: 'ev-charger',
  },
  {
    author: '정현수',
    date: '2026-01-08',
    rating: 5,
    text: '울산 공장 비상발전기 배터리가 방전되어 긴급으로 연락했는데, 3시간 만에 오셔서 바로 교체해주셨습니다. 전문적인 진단으로 다른 문제도 미리 발견해 큰 손해를 막을 수 있었습니다.',
    area: 'ulsan',
    service: 'generator-battery',
  },
  {
    author: '윤상호',
    date: '2026-02-14',
    rating: 5,
    text: '대구 공장 지게차 배터리 정기 유지보수 계약을 맺었습니다. 정기 방문 점검을 통해 배터리 수명이 눈에 띄게 늘었고, 갑작스러운 배터리 교체 비용도 크게 줄었습니다. 계약한 게 정말 잘한 결정이었습니다.',
    area: 'daegu',
    service: 'battery-maintenance',
  },
  {
    author: '한미래',
    date: '2025-12-20',
    rating: 5,
    text: '성남 물류센터 태양광 ESS 배터리 설치를 의뢰했습니다. 복잡한 설계부터 한전 연계까지 모든 행정 절차를 대신 처리해주셨고, 설치 후 모니터링 시스템까지 구축해주셔서 관리가 편해졌습니다.',
    area: 'seongnam',
    service: 'solar-ess',
  },
  {
    author: '오지훈',
    date: '2026-03-01',
    rating: 5,
    text: '충전기 수리를 맡겼는데, 다른 업체에서 불가능하다고 했던 수리를 완벽하게 해결해주셨습니다. 진단도 정확하고 수리 비용도 합리적이었습니다. 믿을 수 있는 전문업체입니다.',
    area: 'gyeonggi',
    service: 'battery-charger',
  },
];

export function getReviewsForPage(
  areaSlug?: string,
  serviceSlug?: string,
  count: number = 3,
): Review[] {
  let sorted = [...reviews];

  // Prioritize reviews matching both area and service
  sorted.sort((a, b) => {
    const aScore =
      (a.area === areaSlug ? 2 : 0) + (a.service === serviceSlug ? 1 : 0);
    const bScore =
      (b.area === areaSlug ? 2 : 0) + (b.service === serviceSlug ? 1 : 0);
    return bScore - aScore;
  });

  return sorted.slice(0, count);
}
