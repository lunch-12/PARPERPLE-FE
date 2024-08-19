import NewsContent from './NewsContent';
import NewsFooter from './NewsFooter';
import NewsHeader from './NewsHeader';

const NewsList = () => {
  // TO DO - api를 통해 data fetch
  const newsData = [
    {
      id: 1,
      isHotArticleBanner: true,
      title: 'CJ제일제당, 파리 ‘비비고 시장’에서 K푸드로 세계인 홀렸다',
      image:
        'https://www.journalist.or.kr/data/photos/20171044/art_1509452169.jpg',
      summaries: [
        "CJ 제일제당은 파리 올림픽 기간 동안 '비비고 시장' 행사를 통해 K-푸드를 알리며 큰 호응을 얻었다.",
        "'비비고 시장'에서 매일 500인분의 메뉴가 4시간 만에 품절되었고, 유럽 내 여러 유통채널로의 입점 기회가 확대되었다.",
        'CJ제일제당은 프랑스를 비롯한 유럽 전역으로 K-푸드 사업을 확장할 계획이다.',
      ],
      tags: ['IT/과학', '반도체'],
      date: '2023년 12월 28일',
      sector: 'CJ제일제당',
    },
    {
      id: 2,
      isHotArticleBanner: false,
      title: 'Another News Title',
      image: 'https://example.com/another-image.jpg',
      summaries: [
        'Another summary point 1',
        'Another summary point 2',
        'Another summary point 3',
      ],
      tags: ['경제', '정치'],
      date: '2023년 12월 29일',
      sector: 'CJ제일제당',
    },
    {
      id: 3,
      isHotArticleBanner: true,
      title: 'Another News Title',
      image: 'https://example.com/another-image.jpg',
      summaries: [
        'Another summary point 1',
        'Another summary point 2',
        'Another summary point 3',
      ],
      tags: ['경제', '정치'],
      date: '2023년 12월 29일',
      sector: 'CJ제일제당',
    },
    {
      id: 4,
      isHotArticleBanner: true,
      title: 'CJ제일제당, 파리 ‘비비고 시장’에서 K푸드로 세계인 홀렸다',
      image:
        'https://www.journalist.or.kr/data/photos/20171044/art_1509452169.jpg',
      summaries: [
        "CJ 제일제당은 파리 올림픽 기간 동안 '비비고 시장' 행사를 통해 K-푸드를 알리며 큰 호응을 얻었다.",
        "'비비고 시장'에서 매일 500인분의 메뉴가 4시간 만에 품절되었고, 유럽 내 여러 유통채널로의 입점 기회가 확대되었다.",
        'CJ제일제당은 프랑스를 비롯한 유럽 전역으로 K-푸드 사업을 확장할 계획이다.',
      ],
      tags: ['IT/과학', '반도체'],
      date: '2023년 12월 28일',
      sector: 'CJ제일제당',
    },
    {
      id: 5,
      isHotArticleBanner: false,
      title: 'Another News Title',
      image: 'https://example.com/another-image.jpg',
      summaries: [
        'Another summary point 1',
        'Another summary point 2',
        'Another summary point 3',
      ],
      tags: ['경제', '정치'],
      date: '2023년 12월 29일',
      sector: 'CJ제일제당',
    },
    {
      id: 6,
      isHotArticleBanner: true,
      title: 'Another News Title',
      image: 'https://example.com/another-image.jpg',
      summaries: [
        'Another summary point 1',
        'Another summary point 2',
        'Another summary point 3',
      ],
      tags: ['경제', '정치'],
      date: '2023년 12월 29일',
      sector: 'CJ제일제당',
    },
  ];

  return (
    <section className="w-full">
      <ul>
        {newsData.map((news, index) => (
          <li
            key={news.title}
            className={`py-[16px] ${index != newsData.length - 1 ? 'border-b' : ''}`}
          >
            <NewsHeader
              isHotArticleBanner={news.isHotArticleBanner}
              sector={news.sector}
            />
            <NewsContent title={news.title} summaries={news.summaries} />
            <NewsFooter tags={news.tags} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsList;
