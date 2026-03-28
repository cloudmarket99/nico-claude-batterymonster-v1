export interface BusinessHours {
  days: string;
  hours: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Business {
  name: string;
  legalName: string;
  owner: string;
  phone: string;
  phoneHref: string;
  email: string;
  website: string;
  address: Address;
  coordinates: Coordinates;
  hours: BusinessHours[];
  license: string;
  yearEstablished: number;
  serviceRadius: string;
  schemaType: string;
  description: string;
  tagline: string;
}

export const business: Business = {
  name: '밧데리몬스터 max',
  legalName: '밧데리몬스터맥스',
  owner: '대표 김정배',
  phone: '010-3700-3859',
  phoneHref: 'tel:+821037003859',
  email: 'maxdm8404@daum.net',
  website: 'https://batterymonstermax.co.kr',
  address: {
    street: '금포로 1517',
    city: '김포시',
    state: '경기도',
    zip: '10018',
  },
  coordinates: { lat: 37.6152, lng: 126.7153 },
  hours: [
    { days: '월요일 - 금요일', hours: '08:00 - 18:00' },
    { days: '토요일', hours: '09:00 - 14:00' },
    { days: '일요일', hours: '긴급출동 가능' },
  ],
  license: '전기공사업 면허 보유 | ISO 9001 인증',
  yearEstablished: 2010,
  serviceRadius: '전국 (서울, 경기, 인천, 부산, 대구, 광주, 대전, 울산 등)',
  schemaType: 'ElectricalContractor',
  description:
    '밧데리몬스터 max는 전국 산업용 배터리 설치 전문 기업으로, 지게차 배터리, UPS, 태양광 ESS, 비상발전기 배터리 등 다양한 산업용 배터리 솔루션을 제공합니다. 15년 이상의 경험과 전기공사업 면허를 바탕으로 신속하고 안전한 배터리 설치 서비스를 전국 어디서나 제공합니다.',
  tagline: '전국 산업용 배터리 설치 전문 기업. 신속하고 안전하게',
};

export function yearsInBusiness(): number {
  return new Date().getFullYear() - business.yearEstablished;
}
