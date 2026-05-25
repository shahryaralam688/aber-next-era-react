export const WA_NUMBER = '97126721320'
export const SUPPORTED_LANGUAGES = ['en', 'ar']

export const siteContent = {
  en: {
    meta: {
      lang: 'en',
      dir: 'ltr',
      title: 'Aber Travel & Tourism Agency | Premium Gulf Travel',
      description: 'Aber Travel & Tourism Agency offers luxury, family, corporate, and Umrah-focused travel planning across the Gulf.'
    },
    header: {
      logoAria: 'Aber Travel home',
      primaryNavAria: 'Primary navigation',
      logoText: 'Aber Travel & Tourism Agency',
      planButton: 'Plan My Trip',
      menuToggleText: 'Menu',
      menuToggleAria: 'Toggle menu',
      languageSwitcherLabel: 'Language switcher',
      navItems: [
        { id: 'destinations', label: 'Destinations', links: ['Riyadh', 'Jeddah', 'AlUla', 'Makkah', 'Madinah', 'Tabuk'] },
        { id: 'packages', label: 'Packages', links: ['Family Deals', 'Luxury Escapes', 'Corporate Trips', 'Weekend Plans'] },
        { id: 'umrah', label: 'Umrah & Religious Tours', links: ['Umrah Essentials', 'Group Support', 'Scholars Access', 'Transport Help'] },
        { id: 'experiences', label: 'Experiences', links: ['Desert', 'Heritage', 'Beach', 'Adventure'] },
        { id: 'about', label: 'About', links: ['Our Story', 'Service Promise', 'Travel Advisors', 'Partners'] },
        { id: 'contact', label: 'Contact', links: ['Call Us', 'WhatsApp', 'Email', 'Visit Office'] }
      ]
    },
    hero: {
      ariaLabel: 'Aber Travel premium hero',
      pauseAria: 'Pause background video',
      feedbackAria: 'Open feedback',
      feedback: 'Feedback',
      eyebrow: 'Aber Travel & Tourism Agency',
      title: 'Summer Our Way',
      lead: 'Discover summer offers and premium Gulf experiences your way, from the Red Sea to Aseer and beyond.',
      bookNow: 'Book Now',
      campaignsLabel: 'Featured campaigns',
      campaigns: ['Summer Our Way', 'Water Fun Awaits!', 'Join Aber Rewards']
    },
    sections: {
      destinations: { label: 'Featured Destinations', title: 'Handpicked places for every travel mood' },
      offers: { label: 'Seasonal Campaigns', title: 'Limited-time offers designed for smart travelers', dotAriaLabel: 'View offer' },
      experiences: { label: 'Curated Experiences', title: 'Choose the style of travel that fits your pace' },
      packages: { label: 'Top Packages', title: 'Transparent pricing, premium support, and flexible options' },
      testimonials: { label: 'Traveler Voices', title: 'What clients say after traveling with Aber' },
      gallery: { label: 'Visual Gallery', title: 'Instagram-style snapshots from our destination moodboard', imageAlt: 'Aber travel gallery' },
      faq: { label: 'FAQ', title: 'Answers before you book' }
    },
    shared: {
      offerCodeLabel: 'Use code:'
    },
    destinations: [
      { id: 'riyadh', name: 'Riyadh', tag: 'City Pulse', description: 'Skyline dining, cultural districts, and premium shopping with curated private transfers.', image: '/assets/images/img_345_riyadh-banner-new.jpg' },
      { id: 'jeddah', name: 'Jeddah', tag: 'Coastal Culture', description: 'Red Sea waterfront, old town stories, and modern lifestyle escapes.', image: '/assets/images/img_336_jeddah-banner.jpg' },
      { id: 'alula', name: 'AlUla', tag: 'Desert Wonder', description: 'Epic canyon landscapes, stargazing camps, and luxury retreat experiences.', image: '/assets/images/img_331_alula-banner-new.jpg' },
      { id: 'makkah', name: 'Makkah', tag: 'Spiritual Journey', description: 'Trusted support for religious travel planning with respectful guidance.', image: '/assets/images/img_340_New-makkah-view-homepage.jpg' },
      { id: 'madinah', name: 'Madinah', tag: 'Faith & Calm', description: 'Comfort-first itineraries, smooth transfers, and family-focused stays.', image: '/assets/images/img_339_madinah-banner-promotion.jpg' },
      { id: 'tabuk', name: 'Tabuk', tag: 'Mountain Routes', description: 'Cooler weather, scenic drives, and adventure-led weekend itineraries.', image: '/assets/images/img_346_New-Tabuk_Image-Banner.jpg' }
    ],
    offers: [
      { id: 'offer-summer', title: 'Summer Family Sale', description: 'Kids stay perks + airport pickup on selected summer dates.', code: 'ABER-SUMMER', image: '/assets/images/img_397_homepage-summer.jpg' },
      { id: 'offer-spiritual', title: 'Early Umrah Window', description: 'Priority support for documentation and preferred hotel zones.', code: 'ABER-UMRAH', image: '/assets/images/img_340_New-makkah-view-homepage.jpg' },
      { id: 'offer-corporate', title: 'Corporate Shuttle Bundle', description: 'Business travel setup with invoicing, airport meet, and quick rebooking.', code: 'ABER-BIZ', image: '/assets/images/img_352_crowne-plaza-riyadh.jpg' }
    ],
    experiences: [
      { name: 'Desert Adventures', image: '/assets/images/img_343_4-days-in-the-red-sea-banner.jpg' },
      { name: 'Heritage Discovery', image: '/assets/images/img_333_diriyah-hero-banner.jpg' },
      { name: 'Beach Leisure', image: '/assets/images/img_253_the-red-sea-luxury.jpg' },
      { name: 'Luxury Retreats', image: '/assets/images/img_357_our-habitas.jpg' },
      { name: 'Adventure Trails', image: '/assets/images/img_395_aseer-hiking-guide-banner.jpg' }
    ],
    trust: {
      umrah: {
        label: 'Umrah & Hajj Support',
        title: 'Faith-focused assistance with complete peace of mind',
        points: [
          'Document and visa guidance from dedicated specialists',
          'Women, elderly, and family-friendly travel options',
          'Clear transport, hotel, and support-line coordination'
        ],
        cta: 'Speak to Umrah Desk'
      },
      why: {
        label: 'Why Choose Aber',
        title: 'Designed for trust, speed, and premium outcomes',
        metrics: [
          { k: '24h', v: 'Advisor Response' },
          { k: '500+', v: 'Trips Designed' },
          { k: '4.9/5', v: 'Client Satisfaction' },
          { k: '7', v: 'Gulf Hubs Covered' }
        ]
      }
    },
    packages: [
      {
        id: 'pkg-umrah',
        title: 'Umrah Comfort Plan',
        duration: '7 Days',
        price: 'From SAR 3,950',
        badge: 'Most Requested',
        image: '/assets/images/img_339_madinah-banner-promotion.jpg',
        highlights: ['Visa documentation help', 'Makkah + Madinah stays', 'Dedicated advisor'],
        cta: 'Request Umrah Plan'
      },
      {
        id: 'pkg-redsea',
        title: 'Red Sea Luxury Escape',
        duration: '5 Days',
        price: 'From SAR 4,800',
        badge: 'Premium',
        image: '/assets/images/img_344_the-red-sea-luxury.jpg',
        highlights: ['Beachfront resort', 'Private airport transfer', 'Water activity add-ons'],
        cta: 'Reserve This Escape'
      },
      {
        id: 'pkg-city',
        title: 'Riyadh + Jeddah Twin City',
        duration: '6 Days',
        price: 'From SAR 3,300',
        badge: 'Best Value',
        image: '/assets/images/img_359_saudi-getaway-from-jeddah-riyadh.jpg',
        highlights: ['City tours', '4-star hotel options', 'Family-friendly pacing'],
        cta: 'Get Full Itinerary'
      },
      {
        id: 'pkg-adventure',
        title: 'Aseer & Taif Adventure',
        duration: '4 Days',
        price: 'From SAR 2,750',
        badge: 'Adventure',
        image: '/assets/images/img_347_Taif-banner-new.jpg',
        highlights: ['Mountain viewpoints', 'Local experiences', 'Guided transport'],
        cta: 'Plan Adventure'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Hina A.',
        segment: 'Family Traveler',
        quote: 'Aber handled flights, hotel, and local transport perfectly. We felt looked after from day one.'
      },
      {
        id: 't2',
        name: 'Faisal M.',
        segment: 'Corporate Client',
        quote: 'Fast response, clear costing, and reliable execution. Their advisor model is excellent.'
      },
      {
        id: 't3',
        name: 'Sara & Hamza',
        segment: 'Couple Escape',
        quote: 'Our AlUla + Red Sea route was beautifully planned with the right mix of luxury and adventure.'
      }
    ],
    faqLead: {
      faqs: [
        { q: 'Do you provide Umrah-only packages?', a: 'Yes. We offer tailored Umrah plans with hotel, transport, and advisory support.' },
        { q: 'Can I customize a family itinerary?', a: 'Absolutely. We adjust route pace, hotel class, and activities around your family profile.' },
        { q: 'Do you support corporate bookings?', a: 'Yes, including invoice-ready bookings, airport coordination, and fast rescheduling.' },
        { q: 'Is WhatsApp support available?', a: 'Yes, our advisor desk is active for quick package consultation and follow-up.' }
      ],
      heading: 'Ready to plan your next journey?',
      description: 'Share your destination and dates. Our advisor replies with options in under 24 hours.',
      form: {
        fullName: 'Full Name',
        phone: 'Phone / WhatsApp',
        destination: 'Preferred Destination',
        submit: 'Submit Inquiry',
        chat: 'Chat on WhatsApp'
      }
    },
    footer: {
      aboutTitle: 'Aber Travel & Tourism Agency',
      aboutText: 'Luxury, trust-first travel planning for Gulf destinations.',
      quickLinksTitle: 'Quick Links',
      quickLinks: [
        { href: '#destinations', label: 'Destinations' },
        { href: '#packages', label: 'Packages' },
        { href: '#umrah', label: 'Umrah' },
        { href: '#contact', label: 'Contact' }
      ],
      legalTitle: 'Legal',
      legalLinks: [
        { href: '#', label: 'Privacy' },
        { href: '#', label: 'Terms' },
        { href: '#', label: 'Licensing' }
      ],
      newsletterTitle: 'Newsletter',
      newsletterPlaceholder: 'Email address',
      newsletterButton: 'Join'
    }
  },
  ar: {
    meta: {
      lang: 'ar',
      dir: 'rtl',
      title: 'وكالة أبير للسفر والسياحة | رحلات خليجية فاخرة',
      description: 'وكالة أبير للسفر والسياحة تقدم تخطيط رحلات فاخر وعائلي وشركات ورحلات عمرة عبر الخليج.'
    },
    header: {
      logoAria: 'الصفحة الرئيسية لأبير ترافل',
      primaryNavAria: 'التنقل الرئيسي',
      logoText: 'وكالة أبير للسفر والسياحة',
      planButton: 'خطط رحلتك',
      menuToggleText: 'القائمة',
      menuToggleAria: 'تبديل القائمة',
      languageSwitcherLabel: 'اختيار اللغة',
      navItems: [
        { id: 'destinations', label: 'الوجهات', links: ['الرياض', 'جدة', 'العلا', 'مكة', 'المدينة', 'تبوك'] },
        { id: 'packages', label: 'الباقات', links: ['عروض العائلات', 'عطلات فاخرة', 'رحلات الشركات', 'خطط نهاية الأسبوع'] },
        { id: 'umrah', label: 'العمرة والجولات الدينية', links: ['أساسيات العمرة', 'دعم المجموعات', 'تنسيق خاص', 'خدمات النقل'] },
        { id: 'experiences', label: 'التجارب', links: ['الصحارى', 'التراث', 'الشواطئ', 'المغامرات'] },
        { id: 'about', label: 'من نحن', links: ['قصتنا', 'وعد الخدمة', 'مستشارو السفر', 'شركاؤنا'] },
        { id: 'contact', label: 'تواصل', links: ['اتصل بنا', 'واتساب', 'البريد الإلكتروني', 'زيارة المكتب'] }
      ]
    },
    hero: {
      ariaLabel: 'قسم أبير ترافل الرئيسي',
      pauseAria: 'إيقاف فيديو الخلفية',
      feedbackAria: 'فتح الملاحظات',
      feedback: 'ملاحظات',
      eyebrow: 'وكالة أبير للسفر والسياحة',
      title: 'صيفنا بطريقتك',
      lead: 'اكتشف عروض الصيف وتجارب الخليج الفاخرة كما تحب، من البحر الأحمر إلى عسير وما بعدها.',
      bookNow: 'احجز الآن',
      campaignsLabel: 'الحملات المميزة',
      campaigns: ['صيفنا بطريقتك', 'المتعة المائية بانتظارك', 'انضم إلى مكافآت أبير']
    },
    sections: {
      destinations: { label: 'وجهات مميزة', title: 'أماكن منتقاة لكل مزاج سفر' },
      offers: { label: 'عروض موسمية', title: 'عروض محدودة مصممة للمسافر الذكي', dotAriaLabel: 'عرض الحملة' },
      experiences: { label: 'تجارب منتقاة', title: 'اختر أسلوب السفر الذي يناسب إيقاعك' },
      packages: { label: 'أهم الباقات', title: 'أسعار واضحة وخدمة مميزة وخيارات مرنة' },
      testimonials: { label: 'آراء المسافرين', title: 'ماذا يقول عملاؤنا بعد السفر مع أبير' },
      gallery: { label: 'معرض بصري', title: 'لقطات على نمط إنستغرام من وجهاتنا', imageAlt: 'معرض سفر أبير' },
      faq: { label: 'الأسئلة الشائعة', title: 'إجابات قبل الحجز' }
    },
    shared: {
      offerCodeLabel: 'استخدم الكود:'
    },
    destinations: [
      { id: 'riyadh', name: 'الرياض', tag: 'نبض المدينة', description: 'مطاعم بإطلالات رائعة وأحياء ثقافية وتسوق فاخر مع تنقلات خاصة منسقة.', image: '/assets/images/img_345_riyadh-banner-new.jpg' },
      { id: 'jeddah', name: 'جدة', tag: 'ثقافة ساحلية', description: 'واجهة البحر الأحمر، حكايات البلد التاريخية، وهروب عصري أنيق.', image: '/assets/images/img_336_jeddah-banner.jpg' },
      { id: 'alula', name: 'العلا', tag: 'سحر الصحراء', description: 'وديان مهيبة، مخيمات رصد النجوم، وتجارب إقامة فاخرة.', image: '/assets/images/img_331_alula-banner-new.jpg' },
      { id: 'makkah', name: 'مكة', tag: 'رحلة روحانية', description: 'دعم موثوق لتخطيط السفر الديني بإرشاد محترف.', image: '/assets/images/img_340_New-makkah-view-homepage.jpg' },
      { id: 'madinah', name: 'المدينة', tag: 'إيمان وطمأنينة', description: 'خطط مريحة، انتقالات سلسة، وإقامات مناسبة للعائلات.', image: '/assets/images/img_339_madinah-banner-promotion.jpg' },
      { id: 'tabuk', name: 'تبوك', tag: 'مسارات جبلية', description: 'أجواء ألطف، طرقات خلابة، ومغامرات نهاية أسبوع مميزة.', image: '/assets/images/img_346_New-Tabuk_Image-Banner.jpg' }
    ],
    offers: [
      { id: 'offer-summer', title: 'تخفيضات صيف العائلة', description: 'مزايا إقامة للأطفال مع استقبال من المطار في تواريخ صيفية محددة.', code: 'ABER-SUMMER', image: '/assets/images/img_397_homepage-summer.jpg' },
      { id: 'offer-spiritual', title: 'موعد عمرة مبكر', description: 'أولوية في دعم المستندات ومناطق الفنادق المفضلة.', code: 'ABER-UMRAH', image: '/assets/images/img_340_New-makkah-view-homepage.jpg' },
      { id: 'offer-corporate', title: 'باقة تنقلات الشركات', description: 'تجهيز سفر الأعمال مع فواتير، استقبال مطار، وإعادة حجز سريعة.', code: 'ABER-BIZ', image: '/assets/images/img_352_crowne-plaza-riyadh.jpg' }
    ],
    experiences: [
      { name: 'مغامرات الصحراء', image: '/assets/images/img_343_4-days-in-the-red-sea-banner.jpg' },
      { name: 'اكتشاف التراث', image: '/assets/images/img_333_diriyah-hero-banner.jpg' },
      { name: 'استجمام الشواطئ', image: '/assets/images/img_253_the-red-sea-luxury.jpg' },
      { name: 'ملاذات فاخرة', image: '/assets/images/img_357_our-habitas.jpg' },
      { name: 'مسارات المغامرة', image: '/assets/images/img_395_aseer-hiking-guide-banner.jpg' }
    ],
    trust: {
      umrah: {
        label: 'دعم العمرة والحج',
        title: 'مساندة إيمانية تمنحك راحة بال كاملة',
        points: [
          'إرشاد المستندات والتأشيرات عبر مختصين',
          'خيارات مناسبة للنساء وكبار السن والعائلات',
          'تنسيق واضح للنقل والفنادق وخطوط الدعم'
        ],
        cta: 'تحدث مع مكتب العمرة'
      },
      why: {
        label: 'لماذا أبير',
        title: 'مبني على الثقة والسرعة والنتائج الفاخرة',
        metrics: [
          { k: '24h', v: 'وقت رد المستشار' },
          { k: '500+', v: 'رحلة مصممة' },
          { k: '4.9/5', v: 'رضا العملاء' },
          { k: '7', v: 'مراكز خليجية مغطاة' }
        ]
      }
    },
    packages: [
      {
        id: 'pkg-umrah',
        title: 'خطة عمرة مريحة',
        duration: '7 أيام',
        price: 'ابتداءً من 3,950 ر.س',
        badge: 'الأكثر طلبًا',
        image: '/assets/images/img_339_madinah-banner-promotion.jpg',
        highlights: ['مساعدة في مستندات التأشيرة', 'إقامة في مكة والمدينة', 'مستشار مخصص'],
        cta: 'اطلب خطة عمرة'
      },
      {
        id: 'pkg-redsea',
        title: 'ملاذ البحر الأحمر الفاخر',
        duration: '5 أيام',
        price: 'ابتداءً من 4,800 ر.س',
        badge: 'فاخر',
        image: '/assets/images/img_344_the-red-sea-luxury.jpg',
        highlights: ['منتجع شاطئي', 'تنقل خاص من المطار', 'إضافات أنشطة مائية'],
        cta: 'احجز هذه الرحلة'
      },
      {
        id: 'pkg-city',
        title: 'الرياض + جدة المدينتان',
        duration: '6 أيام',
        price: 'ابتداءً من 3,300 ر.س',
        badge: 'أفضل قيمة',
        image: '/assets/images/img_359_saudi-getaway-from-jeddah-riyadh.jpg',
        highlights: ['جولات مدينة', 'خيارات فنادق 4 نجوم', 'وتيرة مناسبة للعائلة'],
        cta: 'احصل على البرنامج الكامل'
      },
      {
        id: 'pkg-adventure',
        title: 'مغامرة عسير والطائف',
        duration: '4 أيام',
        price: 'ابتداءً من 2,750 ر.س',
        badge: 'مغامرة',
        image: '/assets/images/img_347_Taif-banner-new.jpg',
        highlights: ['إطلالات جبلية', 'تجارب محلية', 'نقل موجه'],
        cta: 'خطط مغامرتك'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Hina A.',
        segment: 'مسافرة مع العائلة',
        quote: 'أبير اهتمت بالرحلات والفندق والتنقل المحلي بشكل ممتاز. شعرنا بالعناية من أول يوم.'
      },
      {
        id: 't2',
        name: 'Faisal M.',
        segment: 'عميل شركات',
        quote: 'استجابة سريعة وتكلفة واضحة وتنفيذ موثوق. نموذج المستشار لديهم ممتاز.'
      },
      {
        id: 't3',
        name: 'Sara & Hamza',
        segment: 'رحلة للأزواج',
        quote: 'مسار العلا والبحر الأحمر كان مخططًا باحتراف مع توازن رائع بين الفخامة والمغامرة.'
      }
    ],
    faqLead: {
      faqs: [
        { q: 'هل توفرون باقات عمرة فقط؟', a: 'نعم. نقدم خطط عمرة مخصصة تشمل الفنادق والنقل والدعم الاستشاري.' },
        { q: 'هل يمكن تخصيص برنامج عائلي؟', a: 'بالتأكيد. نضبط وتيرة الرحلة وفئة الفندق والأنشطة حسب احتياج العائلة.' },
        { q: 'هل تدعمون حجوزات الشركات؟', a: 'نعم، مع حجوزات جاهزة للفوترة وتنسيق المطار وإعادة الجدولة السريعة.' },
        { q: 'هل دعم واتساب متاح؟', a: 'نعم، فريق المستشارين متاح لاستشارات سريعة ومتابعة مستمرة.' }
      ],
      heading: 'جاهز لتخطيط رحلتك القادمة؟',
      description: 'شاركنا وجهتك وتواريخك. سيرد عليك مستشارنا بخيارات مناسبة خلال أقل من 24 ساعة.',
      form: {
        fullName: 'الاسم الكامل',
        phone: 'الهاتف / واتساب',
        destination: 'الوجهة المفضلة',
        submit: 'إرسال الطلب',
        chat: 'تواصل عبر واتساب'
      }
    },
    footer: {
      aboutTitle: 'وكالة أبير للسفر والسياحة',
      aboutText: 'تخطيط رحلات فاخر قائم على الثقة لوجهات الخليج.',
      quickLinksTitle: 'روابط سريعة',
      quickLinks: [
        { href: '#destinations', label: 'الوجهات' },
        { href: '#packages', label: 'الباقات' },
        { href: '#umrah', label: 'العمرة' },
        { href: '#contact', label: 'تواصل' }
      ],
      legalTitle: 'القانونية',
      legalLinks: [
        { href: '#', label: 'الخصوصية' },
        { href: '#', label: 'الشروط' },
        { href: '#', label: 'التراخيص' }
      ],
      newsletterTitle: 'النشرة البريدية',
      newsletterPlaceholder: 'البريد الإلكتروني',
      newsletterButton: 'اشترك'
    }
  }
}

export function getLocaleContent(language = 'en') {
  return siteContent[language] || siteContent.en
}
