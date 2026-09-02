/* Mohamed Baraa Lafi — app.js
   Light/dark theme + EN/AR languages + mobile navigation.
   Preferences are propagated via URL parameters (?theme=&lang=) so they
   persist from one page to another without using browser storage. */

const I18N = {
  en: {
    nav_home: "Home", nav_about: "About", nav_research: "Research",
    nav_publications: "Publications", nav_articles: "Articles", nav_cv: "CV", nav_contact: "Contact",
    hero_eyebrow: "Economist",
    hero_role: "Young economics researcher",
    hero_title_1: "Mohamed Baraa", hero_title_2: "Lafi",
    hero_lead: "Young economics researcher, currently studying at the Paris School of Economics. My work focuses on economic growth, institutions and development.",
    hero_cta_1: "View my publications", hero_cta_2: "Get in touch",
    quote_text: "“The difficulty lies not so much in developing new ideas as in escaping from old ones.”",
    quote_cite: "John Maynard Keynes",
    stat_1: "Publications & working papers", stat_2: "Published articles", stat_3: "Years of research", stat_4: "Languages spoken",
    about_eyebrow: "About", about_title: "Who am I?",
    about_p1: "Master's student in Analysis and Policy in Economics at the Paris School of Economics, with a background in applied economics, quantitative analysis and empirical research — working with economic data, econometric methods and causal inference tools to answer policy-relevant questions.",
    about_p2: "My research centers on macroeconomics and public policy evaluation, applying rigorous econometric methods to questions that matter for institutions and firms alike — from policy design to strategic decision-making. I aim to produce research at the intersection of analysis and real-world impact.",
    about_more: "Learn more",
    recherche_eyebrow: "Research", recherche_title: "Areas of interest",
    recherche_lead: "Three axes where rigorous economic analysis meets policy and strategy.",
    card1_tag: "01", card1_title: "Applied Econometrics & Policy Evaluation", card1_desc: "Causal inference (IV, DiD, RDD, Synthetic Control) applied to public-policy questions, the core toolkit behind economic consulting and policy evaluation.",
    card2_tag: "02", card2_title: "Macroeconomics & Country Risk", card2_desc: "Macro and sovereign-risk analysis: inflation, fiscal sustainability, country risk, public finance, regulation.",
    card3_tag: "03", card3_title: "Productivity, Development & Growth Strategy", card3_desc: "Long-run productivity, development and growth strategy at the macro and state level.",
    info_edu_t: "Education", info_edu_s: "Paris School of Economics",
    info_res_t: "Research", info_res_s: "Growth, institutions, development",
    info_pass_t: "Passion", info_pass_s: "Applied economics and public policy",
    work_eyebrow: "Recent work", work_title: "Recent publications & articles", work_view: "View all",
    sections_title: "Explore the site",
    footer_quick: "Quick links", footer_contact: "Contact", footer_stay: "Stay in touch",
    footer_stay_p: "For any academic collaboration or question about my work.",
    footer_rights: "All rights reserved.",
    page_pub_title: "Publications", page_pub_sub: "Peer-reviewed articles, working papers and research notes  .",
    page_art_title: "Articles & posts", page_art_sub: "Opinion Articles & Blog Posts.",
    page_cv_title: "Curriculum Vitae", page_cv_sub: "Education, experience and skills.",
    page_contact_title: "Contact", page_contact_sub: "For any question about my work, a collaboration or a request for replication data, feel free to write to me.",
    cv_edu: "Education", cv_pos: "Experience", cv_skills: "Skills", cv_lang: "Languages", cv_download: "Download CV (PDF) ↓",
    cv_hero_title: "Full CV, one document.",
    cv_hero_sub: "Education, appointments, publications, working papers and skills — the complete record, kept current.",
    cv_research: "Research Experience", cv_teaching: "Teaching", cv_fields: "Fields",
    cv_fact_edu: "Paris School of Economics — Master's in Analysis and Policy in Economics (APE)",
    cv_fact_research: "Research Assistant, CY Cergy Paris University",
    cv_fact_teaching: "Teaching Assistant (Microeconomics), Université Paris 2 Panthéon-Assas",
    cv_fact_fields: "Public Economics (Public Finance), Political Economy, Macroeconomics, Institutions",
    contact_send: "Send", contact_name: "Name", contact_email: "Email", contact_msg: "Message",
    lang_native: "French (fluent)", lang_ar: "Arabic (native)", lang_en: "English (fluent)", lang_de: "German (basic)",

    edu1_yr: "Sept 2025 — Present", edu1_title: "Master's in Analysis and Policy in Economics (APE)", edu1_sub: "Paris School of Economics",
    edu2_yr: "Sept 2022 — Jun 2025", edu2_title: "Bachelor's in Economics, minor in Computer Science — Thesis: 18/20", edu2_sub: "Université Paris 1 Panthéon-Sorbonne",
    edu3_yr: "2022", edu3_title: "Baccalauréat, Mathematics track — 18.60/20, ranked 91st/6,482 nationally", edu3_sub: "Lycée de Médenine, Tunisia",

    pos1_yr: "Jun 2026 — Present", pos1_title: "Research Assistant — Internship", pos1_sub: "CY Cergy Paris University — under the supervision of Pamela Bombarda",
    pos2_yr: "Mar 2023 – Present", pos2_title: "Part-time jobs in the hospitality industry", pos2_sub: "Held alongside my studies to help finance my university education",
    pos3_yr: "Sept 2023 — Jan 2024", pos3_title: "Mathematics and Statistics Tutor", pos3_sub: "L1ECO+",

    cv_skill_1: "Econometrics & causal inference", cv_skill_2: "RCT, IV, DiD, RDD, Synthetic Control",
    cv_skill_3: "Python, R, SQL, VBA", cv_skill_4: "LaTeX",

    pub1_date: "March 2026", pub1_type: "Working Paper", pub1_status: "Draft available",
    pub1_venue: "Paris School of Economics — Synthetic Control Method", pub1_authors: "sole author",
    pub1_title: "What Would Saudi Arabia Look Like Without Vision 2030? Early Evidence from Synthetic Controls",

    pub7_date: "August 2026", pub7_type: "Replication & Extension", pub7_status: "Draft available",
    pub7_venue: "Paris School of Economics (PSE)", pub7_authors: "sole author",
    pub7_title: "Replicating and Extending the Economic Impact of Political Shocks in Tunisia: From the Arab Spring to the July 2021 Exceptional Measures",

    pub2_date: "May 2026", pub2_type: "Replication", pub2_status: "Draft available",
    pub2_venue: "Paris School of Economics", pub2_authors: "with D. Agafiev Macambira, P.-A. Etienne",
    pub2_title: "Replication of Forbes and Warnock (2012): Capital Flow Waves",

    pub3_date: "Ongoing — 2026", pub3_type: "Research Project", pub3_status: "Work in progress",
    pub3_title: "FDI and Growth: Evidence from Tunisia, Egypt, Jordan and Morocco", pub3_authors: "with Mosbah Lafi",

    pub4_date: "August 2026", pub4_type: "Working Paper", pub4_status: "Draft available",
    pub4_venue: "Paris School of Economics (PSE)",
    pub4_title: "Who Benefits from Food and Energy Subsidies in Tunisia? Incidence and Distributional Effects of Consumer Subsidies, Evidence from the 2021 Household Budget Survey", pub4_authors: "sole author",

    pub5_date: "July 2026", pub5_type: "Working Paper", pub5_status: "Draft available",
    pub5_venue: "Paris School of Economics — Political Economy of Public Enterprises",
    pub5_title: "Public Enterprises in Tunisia: An Economic and Financial Assessment of Eleven Enterprises and Reform Options", pub5_authors: "sole author",

    pub6_date: "Ongoing — 2026", pub6_type: "Research Project", pub6_status: "Work in progress",
    pub6_title: "Minimum Wage in Tunisia: Employment, Productivity and Labor Market Outcomes", pub6_authors: "sole author",

    pub_soon: "Draft coming soon",

    read_more: "Read →",
    coming_soon: "Coming soon",
    brand_name: "Mohamed Baraa Lafi",
    showcase_pub_desc: "Working papers & articles", showcase_art_desc: "Research notes & commentary",
    showcase_cv_desc: "Education & experience", showcase_contact_desc: "Write to me",
    contact_success: "Thank you! Message sent (demo).",
    compose_eyebrow: "Reach out",
    contact_need_prefix: "Need",
    contact_need_suffix: "I'd love to hear from you.",
    contact_words: "data,a collaboration,an interview,to say hello,feedback",
    qmark: "?",
    email_copy_label: "Copied!",
    topic_eco: "Economy", topic_politique: "Politics", topic_social: "Society",
    art1_date: "July 2026", art1_title: "STEG: Public Governance, Pricing and Paths to Reform",
    steg_lede: "A look at the recurring power-outage crisis, between the company's internal governance and the broader economic model within which it has operated since independence.",
    share_label: "Share:", share_copied: "Link copied!",
    cite_apa: "Cite (APA)", cite_copied: "Citation copied!",
    art2_lede: "Is it time to rethink Tunisia's food subsidy policy?",
    art5_lede: "Is the Democratic Party still the party of the poor?",
    art3_lede: "Lessons from Morocco's experience: why development needs a long-term vision.",
    art4_lede: "A cost-of-living comparison across 9 African countries, beyond the nominal exchange rate.",
    art6_lede: "Can Tunisia keep expanding public employment?",
    art7_lede: "After every war... who rebuilds what wars destroy in the Middle East?",
    art9_lede: "What do Tunisia's population census results tell us?",
    art10_lede: "An economic relationship often framed as unbalanced — what do foreign direct investment figures really show?",
    art2_date: "December 2025", art2_title: "Food Subsidies in Tunisia: Between Social Protection and Public Health Concerns",
    art3_date: "December 2025", art3_title: "Morocco's Development Model: Investment, Infrastructure and Competitiveness",
    art4_date: "November 2025", art4_title: "The Tunisian Dinar in Africa: Is the Exchange Rate Enough to Measure Currency Strength?",
    art5_date: "November 2025", art5_title: "Voting in the United States: Beyond Common Assumptions About Political Parties",
    art6_date: "October 2025", art6_title: "2026 Tunisian Finance Law: Public Employment and Fiscal Sustainability",
    art7_date: "September 2025", art7_title: "Reconstruction in the Middle East: A comparison between regional contributions",
    art8_date: "September 2025", art8_title: "Lebanon: Two Lost Decades of Economic Growth?",
    art8_lede: "How did Lebanon lose twenty years of economic development?",
    art9_date: "May 2025", art9_title: "Tunisia's Population Census: Key Demographic and Economic Insights",
    art10_date: "May 2025", art10_title: "Cross-Investment Between the United States and Gulf Countries: What the Data Show",
    art11_date: "April 2025", art11_title: "The Marine Le Pen Case: Judicial Transparency and Democratic Process in France",
    art12_date: "April 2025", art12_title: "Implementing Political Platforms: The Case of Donald Trump",
    art13_date: "August 2026", art13_title: "The Problem Is Neither Capitalism nor Socialism: Private Universities Reveal Tunisia's Distorted Economic Model",
    art13_lede: "Tunisia Turns Socialist Against Competition and Capitalist for Rent-Seeking.",
  },
  ar: {
    nav_home: "الرئيسية", nav_about: "نبذة عني", nav_research: "البحث",
    nav_publications: "المنشورات", nav_articles: "مقالات", nav_cv: "السيرة الذاتية", nav_contact: "تواصل",
    hero_eyebrow: "اقتصادي",
    hero_role: "باحث شاب في الاقتصاد",
    hero_title_1: "محمد براء", hero_title_2: "اللافي",
    hero_lead: "باحث شاب في الاقتصاد، يدرس حاليًا في مدرسة باريس للاقتصاد. تتمحور أعمالي حول النمو الاقتصادي والمؤسسات والتنمية.",
    hero_cta_1: "مشاهدة منشوراتي", hero_cta_2: "تواصل معي",
    quote_text: "«لا تكمن الصعوبة في الأفكار الجديدة، بل في التحرر من الأفكار القديمة.»",
    quote_cite: "جون ماينارد كينز",
    stat_1: "منشورات وأوراق عمل", stat_2: "مقالات منشورة", stat_3: "سنوات من البحث", stat_4: "اللغات المتحدثة",
    about_eyebrow: "نبذة عني", about_title: "من أنا؟",
    about_p1: "طالب ماجستير في تحليل السياسات الاقتصادية بمدرسة باريس للاقتصاد، ولديّ خلفية في الاقتصاد التطبيقي والتحليل الكمي والبحث التجريبي، وأعمل على البيانات الاقتصادية وأساليب الاقتصاد القياسي وأدوات الاستدلال السببي للإجابة عن أسئلة ذات صلة بالسياسات العامة.",
    about_p2: "تتركز أبحاثي حول الاقتصاد الكلي وتقييم السياسات العامة، وأطبّق أساليب الاقتصاد القياسي الدقيقة على أسئلة تهمّ المؤسسات والشركات على حدّ سواء — من تصميم السياسات إلى اتخاذ القرارات الاستراتيجية. أسعى لإنتاج أبحاث تجمع بين الدقة التحليلية والأثر الواقعي.",
    about_more: "المزيد",
    recherche_eyebrow: "البحث", recherche_title: "مجالات الاهتمام",
    recherche_lead: "ثلاثة محاور تلتقي فيها الدقة التحليلية الاقتصادية بالسياسات والاستراتيجية.",
    card1_tag: "01", card1_title: "الاقتصاد القياسي التطبيقي وتقييم السياسات", card1_desc: "أساليب الاستدلال السببي (IV وDiD وRDD والرقابة الاصطناعية) مطبّقة على أسئلة السياسات العامة، وهي الأدوات الأساسية للاستشارات الاقتصادية وتقييم السياسات.",
    card2_tag: "02", card2_title: "الاقتصاد الكلي ومخاطر الدول", card2_desc: "تحليل الاقتصاد الكلي ومخاطر السيادة: التضخم، الاستدامة المالية، مخاطر الدول، المالية العمومية، التنظيم.",
    card3_tag: "03", card3_title: "الإنتاجية والتنمية واستراتيجية النمو", card3_desc: "استراتيجية الإنتاجية والتنمية والنمو على المدى الطويل، على المستوى الاقتصادي الكلي ومستوى الدول.",
    info_edu_t: "التكوين", info_edu_s: "مدرسة باريس للاقتصاد",
    info_res_t: "البحث", info_res_s: "النمو، المؤسسات، التنمية",
    info_pass_t: "الاهتمام", info_pass_s: "الاقتصاد التطبيقي والسياسات العامة",
    work_eyebrow: "أعمال حديثة", work_title: "أحدث المنشورات والمقالات", work_view: "عرض الكل",
    sections_title: "استكشاف الموقع",
    footer_quick: "روابط سريعة", footer_contact: "تواصل", footer_stay: "ابقَ على تواصل",
    footer_stay_p: "لأي تعاون أكاديمي أو سؤال حول أعمالي.",
    footer_rights: "جميع الحقوق محفوظة.",
    page_pub_title: "المنشورات", page_pub_sub: "مقالات محكّمة، أوراق عمل، وملاحظات بحثية.",
    page_art_title: "مقالات وتدوينات", page_art_sub: "مقالات رأي وتدوينات.",
    page_cv_title: "السيرة الذاتية", page_cv_sub: "التكوين والخبرة والمهارات.",
    cv_hero_title: "سيرة ذاتية كاملة في وثيقة واحدة.",
    cv_hero_sub: "التكوين والمسار المهني والمنشورات وأوراق العمل والمهارات — السجل الكامل، محدّث باستمرار.",
    cv_research: "الخبرة البحثية", cv_teaching: "التدريس", cv_fields: "التخصصات",
    cv_fact_edu: "مدرسة باريس للاقتصاد — ماستر في تحليل وسياسات الاقتصاد (APE)",
    cv_fact_research: "مساعد باحث، جامعة CY Cergy Paris",
    cv_fact_teaching: "مساعد تدريس (الاقتصاد الجزئي)، جامعة باريس 2 بانتيون-أساس",
    cv_fact_fields: "الاقتصاد العمومي (المالية العمومية)، الاقتصاد السياسي، الاقتصاد الكلي، المؤسسات",
    page_contact_title: "تواصل", page_contact_sub: "لأي سؤال حول أعمالي أو تعاون أو طلب بيانات النسخ، لا تتردد في مراسلتي.",
    cv_edu: "التكوين", cv_pos: "الخبرة", cv_skills: "المهارات", cv_lang: "اللغات", cv_download: "تحميل السيرة الذاتية (PDF) ↓",
    contact_send: "إرسال", contact_name: "الاسم", contact_email: "البريد الإلكتروني", contact_msg: "الرسالة",
    lang_native: "الفرنسية (بطلاقة)", lang_ar: "العربية (اللغة الأم)", lang_en: "الإنجليزية (بطلاقة)", lang_de: "الألمانية (مبتدئ)",

    edu1_yr: "سبتمبر 2025 — حاليًا", edu1_title: "ماجستير في تحليل السياسات الاقتصادية (APE)", edu1_sub: "مدرسة باريس للاقتصاد",
    edu2_yr: "سبتمبر 2022 — يونيو 2025", edu2_title: "إجازة في الاقتصاد، تخصص فرعي في الإعلامية — مذكرة التخرج: 18/20", edu2_sub: "جامعة باريس 1 بانتيون-سوربون",
    edu3_yr: "2022", edu3_title: "بكالوريا شعبة الرياضيات — 18.60/20، الرتبة 91 من 6482 وطنيًا", edu3_sub: "المعهد الثانوي بمدنين، تونس",

    pos1_yr: "يونيو 2026 — حاليًا", pos1_title: "مساعد باحث - تدريب", pos1_sub: "جامعة سيرجي باريس (CY) — بإشراف باميلا بومباردا",
    pos2_yr: "مارس 2023 — حاليًا", pos2_title: "أعمال بدوام جزئي في قطاع الفندقة", pos2_sub: "مورست بالتوازي مع الدراسة لتمويل المسار الجامعي",
    pos3_yr: "سبتمبر 2023 — جانفي 2024", pos3_title: "مدرّس رياضيات وإحصاء", pos3_sub: "L1ECO+",

    cv_skill_1: "الاقتصاد القياسي والاستدلال السببي", cv_skill_2: "RCT, IV, DiD, RDD, Synthetic Control",
    cv_skill_3: "Python, R, SQL, VBA", cv_skill_4: "LaTeX",

    pub1_date: "مارس 2026", pub1_type: "ورقة عمل", pub1_status: "مسودة متاحة",
    pub1_venue: "مدرسة باريس للاقتصاد — طريقة الرقابة الاصطناعية", pub1_authors: "مؤلف منفرد",
    pub1_title: "كيف كان يمكن أن يبدو حال المملكة العربية السعودية بدون رؤية 2030؟ أدلة مبكرة من طريقة الرقابة الاصطناعية",

    pub7_date: "أوت 2026", pub7_type: "إعادة إنتاج وتوسيع", pub7_status: "مسودة متاحة",
    pub7_venue: "مدرسة باريس للاقتصاد (PSE)", pub7_authors: "مؤلف منفرد",
    pub7_title: "إعادة إنتاج وتوسيع تحليل الأثر الاقتصادي للصدمات السياسية في تونس: من الربيع العربي إلى التدابير الاستثنائية لجويلية 2021",

    pub2_date: "مايو 2026", pub2_type: "إعادة إنتاج بحثية", pub2_status: "مسودة متاحة",
    pub2_venue: "مدرسة باريس للاقتصاد", pub2_authors: "بالاشتراك مع D. Agafiev Macambira وP.-A. Etienne",
    pub2_title: "إعادة إنتاج بحث Forbes وWarnock (2012): موجات تدفق رؤوس الأموال",

    pub3_date: "قيد الإنجاز — 2026", pub3_type: "مشروع بحثي", pub3_status: "قيد الكتابة",
    pub3_title: "الاستثمار الأجنبي المباشر والنمو: أدلة من تونس ومصر والأردن والمغرب", pub3_authors: "بالاشتراك مع مصباح اللافي",

    pub4_date: "أوت 2026", pub4_type: "ورقة عمل", pub4_status: "الورقة متاحة",
    pub4_venue: "مدرسة باريس للاقتصاد (PSE)",
    pub4_title: "من يستفيد من منظومة الدعم في تونس؟", pub4_authors: "مؤلف منفرد",

    pub5_date: "جويلية 2026", pub5_type: "ورقة عمل", pub5_status: "الورقة متاحة",
    pub5_venue: "مدرسة باريس للاقتصاد — الاقتصاد السياسي للمؤسسات العمومية",
    pub5_title: "المنشآت العمومية في تونس: تقييم اقتصادي ومالي لإحدى عشرة مؤسسة وخيارات الإصلاح", pub5_authors: "مؤلف منفرد",

    pub6_date: "قيد الإنجاز — 2026", pub6_type: "مشروع بحثي", pub6_status: "قيد الكتابة",
    pub6_title: "الأجر الأدنى في تونس: التشغيل والإنتاجية ونتائج سوق الشغل", pub6_authors: "مؤلف منفرد",

    pub_soon: "مسودة قريبًا",

    read_more: "قراءة ←",
    coming_soon: "قريباً",
    brand_name: "محمد براء اللافي",
    showcase_pub_desc: "أوراق عمل ومقالات", showcase_art_desc: "ملاحظات بحثية وتعليقات",
    showcase_cv_desc: "التكوين والخبرة", showcase_contact_desc: "راسلني",
    contact_success: "شكرًا! تم إرسال الرسالة (تجريبي).",
    compose_eyebrow: "تواصل معي",
    contact_need_prefix: "بحاجة إلى",
    contact_need_suffix: "يسعدني تواصلك معي.",
    contact_words: "بيانات,تعاون بحثي,مقابلة أو حوار,مجرد تحية,ملاحظات",
    qmark: "؟",
    email_copy_label: "تم النسخ!",
    topic_eco: "اقتصاد", topic_politique: "سياسة", topic_social: "مجتمع",
    art1_date: "يوليو 2026", art1_title: "الشركة التونسية للكهرباء والغاز: الحوكمة العمومية والتسعير ومسارات الإصلاح",
    steg_lede: "قراءة في أزمة الانقطاعات المتكررة للتيار الكهربائي، بين مسؤولية الحوكمة الداخلية للشركة والنموذج الاقتصادي الأوسع الذي تعمل في إطاره منذ الاستقلال.",
    share_label: "شارك:", share_copied: "تم نسخ الرابط!",
    cite_apa: "استشهاد (APA)", cite_copied: "تم نسخ الاستشهاد!",
    art2_lede: "هل آن الأوان لإعادة التفكير في سياسة دعم الغذاء في تونس؟",
    art5_lede: "هل ما يزال الحزب الديمقراطي حزب الفقراء؟",
    art3_lede: "من التجربة المغربية: لماذا تحتاج التنمية إلى رؤية طويلة المدى؟",
    art4_lede: "مقارنة لتكلفة المعيشة في 9 دول إفريقية، تتجاوز سعر الصرف الاسمي.",
    art6_lede: "هل تستطيع تونس مواصلة توسيع التوظيف العمومي؟",
    art7_lede: "بعد كل حرب... من يبني ما دمرته الحروب في الشرق الأوسط؟",
    art9_lede: "ماذا تخبرنا نتائج التعداد العام للسكان في تونس؟",
    art10_lede: "علاقة اقتصادية كثيرا ما تُقدَّم على أنها غير متوازنة — فماذا تقول أرقام الاستثمار الأجنبي المباشر فعلا؟",
    art2_date: "ديسمبر 2025", art2_title: "دعم المواد الغذائية في تونس: بين الحماية الاجتماعية وتحديات الصحة العامة",
    art3_date: "ديسمبر 2025", art3_title: "النموذج التنموي المغربي: الاستثمار والبنية التحتية والتنافسية",
    art4_date: "نوفمبر 2025", art4_title: "الدينار التونسي في إفريقيا: هل يكفي سعر الصرف لقياس قوة العملة؟",
    art5_date: "نوفمبر 2025", art5_title: "التصويت في الولايات المتحدة: ما وراء الأفكار الشائعة عن الأحزاب السياسية",
    art6_date: "أكتوبر 2025", art6_title: "قانون المالية التونسي 2026: التشغيل العمومي واستدامة المالية العمومية",
    art7_date: "سبتمبر 2025", art7_title: "إعادة الإعمار في الشرق الأوسط: مقارنة بين مساهمات دول المنطقة",
    art8_date: "سبتمبر 2025", art8_title: "لبنان: عقدان ضائعان من النمو الاقتصادي؟",
    art8_lede: "كيف خسر لبنان عشرين عاماً من التنمية؟",
    art9_date: "مايو 2025", art9_title: "التعداد السكاني في تونس: أبرز الدروس الديموغرافية والاقتصادية",
    art10_date: "مايو 2025", art10_title: "الاستثمارات المتبادلة بين الولايات المتحدة ودول الخليج: ماذا تقول البيانات؟",
    art11_date: "أبريل 2025", art11_title: "قضية مارين لوبان: الشفافية القضائية وسير العمل الديمقراطي في فرنسا",
    art12_date: "أبريل 2025", art12_title: "تنفيذ البرامج السياسية: حالة دونالد ترامب",
    art13_date: "أوت 2026", art13_title: "المشكلة ليست في الرأسمالية ولا في الاشتراكية: الجامعات الخاصة تكشف النموذج الاقتصادي المشوّه في تونس",
    art13_lede: "اشتراكية في مواجهة المنافسة، رأسمالية في حماية الاحتكار.",
  }
};

/* Source of truth for "Recent work" on the homepage.
   Combines publications.html and articles.html entries so the two stay in
   sync automatically. `order` is a language-independent YYYYMM sort key.
   Publication titles are kept in their original (English) form across all
   languages, matching the convention already used on publications.html. */
const RECENT_WORK = [
  { kind: 'pub', order: 202608, titleKey: 'pub7_title', typeKey: 'pub7_type', dateKey: 'pub7_date', link: 'publication-tunisia-two-shocks.html' },
  { kind: 'pub', order: 202608, titleKey: 'pub4_title', typeKey: 'pub4_type', dateKey: 'pub4_date', link: 'publication-subsidy-reform-tunisia.html' },
  { kind: 'art', order: 202608, titleKey: 'art13_title', dateKey: 'art13_date', typeKey: 'topic_eco', link: 'article-facs-privees.html' },
  { kind: 'pub', order: 202607, titleKey: 'pub5_title', typeKey: 'pub5_type', dateKey: 'pub5_date', link: 'publication-public-enterprises-tunisia.html' },
  { kind: 'pub', order: 202605, title: 'Replication of Forbes and Warnock 2012', typeKey: 'pub2_type', dateKey: 'pub2_date', link: 'publications.html' },
  { kind: 'pub', order: 202603, title: 'What Would Saudi Arabia Look Like Without Vision 2030? Early Evidence from Synthetic Controls', typeKey: 'pub1_type', dateKey: 'pub1_date', link: 'publications.html' },
  { kind: 'art', order: 202607, titleKey: 'art1_title', dateKey: 'art1_date', typeKey: 'topic_eco', link: 'article-steg.html' },
  { kind: 'art', order: 202512, titleKey: 'art2_title', dateKey: 'art2_date', typeKey: 'topic_social', link: 'article-subventions-alimentaires.html' },
  { kind: 'art', order: 202512, titleKey: 'art3_title', dateKey: 'art3_date', typeKey: 'topic_eco', link: 'article-maroc.html' },
  { kind: 'art', order: 202511, titleKey: 'art4_title', dateKey: 'art4_date', typeKey: 'topic_eco', link: 'article-dinar.html' },
  { kind: 'art', order: 202511, titleKey: 'art5_title', dateKey: 'art5_date', typeKey: 'topic_politique', link: 'article-vote-usa.html' },
  { kind: 'art', order: 202510, titleKey: 'art6_title', dateKey: 'art6_date', typeKey: 'topic_eco', link: 'article-loi-finances-2026.html' },
  { kind: 'art', order: 202509, titleKey: 'art7_title', dateKey: 'art7_date', typeKey: 'topic_politique', link: 'article-reconstruction-mena.html' },
  { kind: 'art', order: 202509, titleKey: 'art8_title', dateKey: 'art8_date', typeKey: 'topic_eco', link: 'articles.html' },
  { kind: 'art', order: 202505, titleKey: 'art9_title', dateKey: 'art9_date', typeKey: 'topic_social', link: 'article-recensement.html' },
  { kind: 'art', order: 202505, titleKey: 'art10_title', dateKey: 'art10_date', typeKey: 'topic_eco', link: 'article-us-gulf-investments.html' },
  { kind: 'art', order: 202504, titleKey: 'art11_title', dateKey: 'art11_date', typeKey: 'topic_politique', link: 'articles.html' },
  { kind: 'art', order: 202504, titleKey: 'art12_title', dateKey: 'art12_date', typeKey: 'topic_politique', link: 'articles.html' },
];
const RECENT_WORK_COUNT = 3;

function renderRecentWork(lang) {
  const grid = document.getElementById('recent-work-grid');
  if (!grid) return;
  const dict = I18N[lang] || I18N.en;
  const items = [...RECENT_WORK].sort((a, b) => b.order - a.order).slice(0, RECENT_WORK_COUNT);
  grid.innerHTML = items.map(item => {
    const tag = dict[item.typeKey] !== undefined ? dict[item.typeKey] : item.typeKey;
    const title = item.titleKey ? (dict[item.titleKey] !== undefined ? dict[item.titleKey] : item.titleKey) : item.title;
    const date = dict[item.dateKey] !== undefined ? dict[item.dateKey] : '';
    const viewLabel = dict.work_view !== undefined ? dict.work_view : 'View all';
    return `<div class="card">
        <span class="tag">${tag}</span>
        <h3>${title}</h3>
        <p class="meta">${date}</p>
        <a href="${item.link}" class="link-more">${viewLabel} →</a>
      </div>`;
  }).join('');
}

/* Page title translation: keeps the browser tab simple ("Mohamed Baraa Lafi",
   "CV", "Contact"...) and translated, instead of long "X — Mohamed Baraa Lafi" titles. */
function applyPageTitle(lang) {
  const dict = I18N[lang] || I18N.en;
  const page = document.body.getAttribute('data-page');
  const map = {
    home: 'Mohamed Baraa Lafi',
    publications: dict.nav_publications,
    articles: dict.nav_articles,
    cv: dict.nav_cv,
    contact: dict.nav_contact,
  };
  if (page && map[page] !== undefined) { document.title = map[page]; return; }
  // Individual article pages: <body data-title-key="art1_title"> -> "Article Title - Mohamed Baraa Lafi"
  const titleKey = document.body.getAttribute('data-title-key');
  if (titleKey && dict[titleKey] !== undefined) {
    document.title = dict[titleKey] + ' - ' + dict.brand_name;
  }
}

/* Reusable share bar: works on any page that includes the markup below.
   #share-copy button copies the current URL; #share-fb / #share-gmail links
   open pre-filled share dialogs. Safe no-op if the elements aren't present. */
function initShareBar() {
  const url = window.location.href;
  const title = document.title;

  const fb = document.getElementById('share-fb');
  if (fb) fb.href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);

  const xShare = document.getElementById('share-x');
  if (xShare) xShare.href = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title);

  const linkedin = document.getElementById('share-linkedin');
  if (linkedin) linkedin.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url);

  const gmail = document.getElementById('share-gmail');
  if (gmail) {
    gmail.href = 'https://mail.google.com/mail/?view=cm&fs=1&su=' + encodeURIComponent(title) +
      '&body=' + encodeURIComponent(title + '\n' + url);
  }

  const copyBtn = document.getElementById('share-copy');
  const copiedMsg = document.getElementById('share-copied-msg');
  if (copyBtn && !copyBtn.dataset.bound) {
    copyBtn.dataset.bound = '1';
    copyBtn.addEventListener('click', () => {
      const done = () => {
        if (copiedMsg) {
          copiedMsg.hidden = false;
          clearTimeout(copyBtn._t);
          copyBtn._t = setTimeout(() => { copiedMsg.hidden = true; }, 2500);
        }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href).then(done).catch(done);
      } else {
        const tmp = document.createElement('input');
        tmp.value = window.location.href;
        document.body.appendChild(tmp);
        tmp.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(tmp);
        done();
      }
    });
  }
}

/* Academic "Cite" buttons for publication pages: builds a plain-text
   APA-style citation and a BibTeX entry directly from the page's own
   metadata (title, authors, venue, badge type, date, canonical URL), so
   individual publication pages don't need to hard-code a citation string.
   Safe no-op if the elements aren't present (e.g. on article pages). */
function initCiteBox() {
  const apaBtn = document.getElementById('cite-apa');
  const bibBtn = document.getElementById('cite-bibtex');
  if (!apaBtn && !bibBtn) return;

  const titleEl = document.querySelector('.pub-title');
  const authorsEl = document.querySelector('.pub-authors');
  if (!titleEl || !authorsEl) return;

  const title = titleEl.textContent.trim();
  const venueEl = authorsEl.querySelector('.venue');
  const venue = venueEl ? venueEl.textContent.trim() : '';
  const typeEl = document.querySelector('.badge-type');
  const pubType = typeEl ? typeEl.textContent.trim() : '';
  const dateEl = document.querySelector('.pub-meta-row .tag');
  const dateText = dateEl ? dateEl.textContent.trim() : '';
  const yearMatch = dateText.match(/\d{4}/);
  const year = yearMatch ? yearMatch[0] : '';
  const canonical = document.querySelector('meta[property="og:url"]');
  const url = canonical ? canonical.content : window.location.href;

  let authorNames = Array.prototype.map.call(authorsEl.querySelectorAll('b'), (b) => b.textContent.trim()).filter(Boolean);
  if (!authorNames.length) authorNames = ['Mohamed Baraa Lafi'];

  const isArabicName = (name) => /[\u0600-\u06FF]/.test(name);
  const initialsOf = (given) => given.split(' ').filter(Boolean).map((part) =>
    part.split('-').map((p) => (p ? p[0].toUpperCase() + '.' : '')).join('-')
  ).join(' ');
  const invert = (name) => {
    if (isArabicName(name)) return name; // Arabic names are kept in natural order (no Latin-style inversion).
    const parts = name.trim().split(/\s+/);
    if (parts.length < 2) return name;
    const family = parts[parts.length - 1];
    return family + ', ' + initialsOf(parts.slice(0, -1).join(' '));
  };
  const invertFull = (name) => {
    if (isArabicName(name)) return name;
    const parts = name.trim().split(/\s+/);
    if (parts.length < 2) return name;
    const family = parts[parts.length - 1];
    return family + ', ' + parts.slice(0, -1).join(' ');
  };
  const joinApa = (list) => {
    if (list.length === 1) return list[0];
    if (list.length === 2) return list[0] + ' & ' + list[1];
    return list.slice(0, -1).join(', ') + ', & ' + list[list.length - 1];
  };

  const apaAuthors = joinApa(authorNames.map(invert));
  const apaParts = [apaAuthors + ' (' + year + ').', title + '.'];
  if (venue) apaParts.push(venue + '.');
  if (pubType) apaParts.push(pubType + '.');
  apaParts.push('Retrieved from ' + url);
  const apaText = apaParts.join(' ');

  const bibAuthorsAttr = authorsEl.getAttribute('data-bibtex-authors');
  const bibAuthors = bibAuthorsAttr || authorNames.map(invertFull).join(' and ');

  const keyAttr = authorsEl.getAttribute('data-cite-key');
  let citeKey = keyAttr;
  if (!citeKey) {
    const lastFamily = (authorNames[0].trim().split(/\s+/).pop() || 'lafi').toLowerCase().replace(/[^a-z]/g, '');
    const slug = window.location.pathname.split('/').pop()
      .replace(/^publication-/, '').replace(/-ar\.html$/, '').replace(/\.html$/, '');
    const firstWord = (slug.split('-')[0] || 'paper').toLowerCase();
    citeKey = lastFamily + year + firstWord;
  }
  const institution = (venue.split('—')[0] || venue).trim();

  const bibtex = '@techreport{' + citeKey + ',\n' +
    '  author      = {' + bibAuthors + '},\n' +
    '  title       = {' + title + '},\n' +
    '  institution = {' + (institution || venue) + '},\n' +
    '  year        = {' + year + '},\n' +
    (pubType ? '  type        = {' + pubType + '},\n' : '') +
    '  url         = {' + url + '}\n' +
    '}';

  const citedMsg = document.getElementById('cite-copied-msg');
  const copyText = (text) => {
    const done = () => {
      if (citedMsg) {
        citedMsg.hidden = false;
        clearTimeout(citedMsg._t);
        citedMsg._t = setTimeout(() => { citedMsg.hidden = true; }, 2500);
      }
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(done);
    } else {
      const tmp = document.createElement('textarea');
      tmp.value = text;
      document.body.appendChild(tmp);
      tmp.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(tmp);
      done();
    }
  };

  if (apaBtn && !apaBtn.dataset.bound) {
    apaBtn.dataset.bound = '1';
    apaBtn.addEventListener('click', () => copyText(apaText));
  }
  if (bibBtn && !bibBtn.dataset.bound) {
    bibBtn.dataset.bound = '1';
    bibBtn.addEventListener('click', () => copyText(bibtex));
  }
}

/* Article detail pages have a dedicated URL per language (article-x.html /
   article-x-ar.html) so that shared links show a title, description and
   cover image that actually match the language of the page being shared. */
function articleLangFilename(filename, lang) {
  const isArUrl = /-ar\.html$/.test(filename);
  if (lang === 'ar' && !isArUrl) return filename.replace(/\.html$/, '-ar.html');
  if (lang === 'en' && isArUrl) return filename.replace(/-ar\.html$/, '.html');
  return filename;
}

/* Contact form demo handler: shows a localized confirmation message
   instead of actually sending anything (no backend on this static site). */
function handleContactSubmit(e) {
  e.preventDefault();
  const lang = document.documentElement.getAttribute('lang') === 'ar' ? 'ar' : 'en';
  const dict = I18N[lang] || I18N.en;
  alert(dict.contact_success);
}

/* ---------------------------------------------------------------------------
   Top reading-progress bar: a thin animated line under the sticky nav that
   fills up as the visitor scrolls down the page. Injected once via JS so it
   works identically on every page without editing 40 HTML files by hand. */
function initScrollProgress() {
  if (document.querySelector('.scroll-progress')) return;
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  const fill = document.createElement('span');
  fill.className = 'scroll-progress-fill';
  bar.appendChild(fill);
  document.body.prepend(bar);

  let ticking = false;
  function update() {
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop || 0;
    const height = (doc.scrollHeight - doc.clientHeight) || 1;
    const pct = Math.min(100, Math.max(0, (scrollTop / height) * 100));
    fill.style.width = pct + '%';
    ticking = false;
  }
  update();
  window.addEventListener('scroll', () => {
    if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  window.addEventListener('resize', update);
}

/* ---------------------------------------------------------------------------
   Scroll-triggered reveal: elements with class="reveal" fade/slide in the
   moment they enter the viewport (not just once, on page load), so pages
   that scroll — publications, articles, CV — feel alive as you read them. */
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('in-view'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4, rootMargin: '0px 0px -6% 0px' });
  items.forEach(el => obs.observe(el));
}

/* ---------------------------------------------------------------------------
   Publications list: turns the static document-type icon into a live,
   dynamically-computed number badge — "01", "02", "03"… in the order the
   papers are listed, exactly like a researcher's numbered publication list.
   The number counts up when it scrolls into view, and flips over on hover
   to reveal the original document-type icon underneath. */
function initPubNumbers() {
  const icons = document.querySelectorAll('.pub-row .pub-icon');
  if (!icons.length) return;
  icons.forEach((icon, i) => {
    if (icon.dataset.numInit) return;
    icon.dataset.numInit = '1';
    const svgHTML = icon.innerHTML;
    const num = String(i + 1).padStart(2, '0');
    icon.innerHTML =
      '<div class="pub-icon-inner">' +
        '<div class="pub-icon-face pub-icon-face-front"><span class="pub-num-value" data-target="' + num + '">00</span></div>' +
        '<div class="pub-icon-face pub-icon-face-back">' + svgHTML + '</div>' +
      '</div>';
  });

  const values = document.querySelectorAll('.pub-num-value');
  const animate = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    let cur = 0;
    const stepMs = Math.max(35, Math.min(90, 500 / Math.max(target, 1)));
    const tick = () => {
      cur += 1;
      el.textContent = String(cur).padStart(2, '0');
      if (cur < target) setTimeout(tick, stepMs);
    };
    tick();
  };
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { animate(entry.target); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    values.forEach(v => obs.observe(v));
  } else {
    values.forEach(v => { v.textContent = v.getAttribute('data-target'); });
  }
}

/* ---------------------------------------------------------------------------
   Contact page: elegant rotating word ("Need data? / a collaboration? / …")
   built entirely from the current-language dictionary so it stays in sync
   with the EN/AR switch. Each word has a matching icon (by position, so the
   icon stays put across languages) and the pill's width is measured once
   across every word in both languages, so swapping words never reflows the
   sentence around it. Safe no-op on any page without the markup below. */
const ROTATOR_ICONS = [
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12V6a2 2 0 1 1 4 0v5"/><path d="M12 10V4a2 2 0 1 1 4 0v7"/><path d="M16 10.5V7a2 2 0 1 1 4 0v7a8 8 0 0 1-8 8h-1c-2.5 0-4-.8-5.5-2.3l-3-3a2 2 0 0 1 2.7-2.9L7 15"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
];

let _contactRotatorTimer = null;
let _rotatorMaxWidth = null;
function measureRotatorMaxWidth(sampleEl) {
  if (_rotatorMaxWidth !== null) return _rotatorMaxWidth;
  const words = []
    .concat((I18N.en.contact_words || '').split(','))
    .concat((I18N.ar.contact_words || '').split(','))
    .map(w => w.trim()).filter(Boolean);
  const probe = document.createElement('span');
  const cs = getComputedStyle(sampleEl);
  probe.style.cssText = 'position:absolute; left:-9999px; top:-9999px; white-space:nowrap; visibility:hidden;';
  probe.style.fontFamily = cs.fontFamily;
  probe.style.fontSize = cs.fontSize;
  probe.style.fontWeight = cs.fontWeight;
  probe.style.letterSpacing = cs.letterSpacing;
  document.body.appendChild(probe);
  let max = 0;
  words.forEach(w => { probe.textContent = w; max = Math.max(max, probe.offsetWidth); });
  document.body.removeChild(probe);
  _rotatorMaxWidth = max;
  return max;
}

function initContactRotator(lang) {
  const prefixEl = document.getElementById('composeNeedPrefix');
  const suffixEl = document.getElementById('composeNeedSuffix');
  const wordEl = document.getElementById('composeWord');
  const iconEl = document.getElementById('composeWordIcon');
  const qmarkEl = document.getElementById('composeQMark');
  if (!prefixEl || !suffixEl || !wordEl) return;

  const dict = I18N[lang] || I18N.en;
  const words = (dict.contact_words || 'data').split(',').map(w => w.trim()).filter(Boolean);
  prefixEl.textContent = dict.contact_need_prefix || 'Need';
  suffixEl.textContent = dict.contact_need_suffix || '';
  if (qmarkEl) qmarkEl.textContent = dict.qmark || '?';

  // Reserve a fixed width equal to the longest word across both languages,
  // so the pill never resizes (and the sentence never reflows) as it rotates.
  const maxWidth = measureRotatorMaxWidth(wordEl);
  wordEl.style.minWidth = maxWidth + 'px';
  wordEl.style.textAlign = 'center';

  if (_contactRotatorTimer) { clearInterval(_contactRotatorTimer); _contactRotatorTimer = null; }
  let idx = 0;
  const show = (i) => {
    wordEl.style.opacity = '0';
    wordEl.style.transform = 'translateY(6px)';
    if (iconEl) iconEl.style.opacity = '0';
    setTimeout(() => {
      wordEl.textContent = words[i];
      if (iconEl) iconEl.innerHTML = ROTATOR_ICONS[i % ROTATOR_ICONS.length];
      wordEl.style.transform = 'translateY(-6px)';
      requestAnimationFrame(() => {
        wordEl.style.opacity = '1';
        wordEl.style.transform = 'translateY(0)';
        if (iconEl) iconEl.style.opacity = '1';
      });
    }, 220);
  };
  wordEl.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
  if (iconEl) iconEl.style.transition = 'opacity 0.22s ease';
  wordEl.textContent = words[0];
  if (iconEl) iconEl.innerHTML = ROTATOR_ICONS[0];
  if (words.length > 1) {
    _contactRotatorTimer = setInterval(() => {
      idx = (idx + 1) % words.length;
      show(idx);
    }, 2400);
  }
}

/* Copy-to-clipboard for the contact email, with a small "Copied!" confirmation. */
function initEmailCopy() {
  const btn = document.getElementById('emailCopyBtn');
  const label = document.getElementById('emailCopyLabel');
  if (!btn) return;
  const email = btn.getAttribute('data-email') || '';
  btn.addEventListener('click', () => {
    const done = () => {
      btn.classList.add('copied');
      if (label) label.classList.add('show');
      clearTimeout(btn._t);
      btn._t = setTimeout(() => { btn.classList.remove('copied'); if (label) label.classList.remove('show'); }, 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(done).catch(done);
    } else {
      const tmp = document.createElement('input');
      tmp.value = email;
      document.body.appendChild(tmp);
      tmp.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(tmp);
      done();
    }
  });
}

function getPrefs() {
  const params = new URLSearchParams(window.location.search);
  const theme = params.get('theme') === 'dark' ? 'dark' : 'light';
  let lang = params.get('lang');
  if (!['en', 'ar'].includes(lang)) {
    const pageDefault = document.documentElement.getAttribute('lang');
    lang = pageDefault === 'ar' ? 'ar' : 'en';
  }
  return { theme, lang };
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.innerHTML = theme === 'dark'
      ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" fill="none" stroke-width="2" stroke-linecap="round"/>'
      : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="none" stroke-width="2" stroke-linejoin="round"/>';
  }
}

function applyLang(lang) {
  if (document.body.getAttribute('data-page') === 'article') {
    const filename = window.location.pathname.split('/').pop();
    const target = articleLangFilename(filename, lang);
    if (target !== filename) {
      const url = new URL(target, window.location.href);
      const theme = new URLSearchParams(window.location.search).get('theme');
      if (theme) url.searchParams.set('theme', theme);
      window.location.href = url.pathname.split('/').pop() + url.search;
      return;
    }
  }
  const dict = I18N[lang] || I18N.en;
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });
  document.querySelectorAll('.lang-switch button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  renderRecentWork(lang);
  applyPageTitle(lang);
  initShareBar();
  initCiteBox();
  initContactRotator(lang);
  document.querySelectorAll('[data-lang-block]').forEach(el => {
    el.style.display = (el.getAttribute('data-lang-block') === lang) ? 'block' : 'none';
  });
}

function updateLinksWithPrefs(theme, lang) {
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('#') || href.startsWith('tel')) return;
    if (a.hasAttribute('download')) return;
    try {
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;
      const filename = url.pathname.split('/').pop();
      if (/^(article|publication)-[a-z0-9-]+\.html$/.test(filename)) {
        const target = articleLangFilename(filename, lang);
        url.searchParams.set('theme', theme);
        a.setAttribute('href', target + url.search + url.hash);
        return;
      }
      url.searchParams.set('theme', theme);
      url.searchParams.set('lang', lang);
      a.setAttribute('href', url.pathname.split('/').pop() + url.search + url.hash);
    } catch (e) { /* ignore malformed */ }
  });
}

function initPrefs() {
  const { theme, lang } = getPrefs();
  applyTheme(theme);
  applyLang(lang);
  updateLinksWithPrefs(theme, lang);
  return { theme, lang };
}

document.addEventListener('DOMContentLoaded', () => {
  let { theme, lang } = initPrefs();

  initScrollProgress();
  initScrollReveal();
  initPubNumbers();
  initEmailCopy();

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      applyTheme(theme);
      updateLinksWithPrefs(theme, lang);
      const url = new URL(window.location.href);
      url.searchParams.set('theme', theme);
      window.history.replaceState({}, '', url);
    });
  }

  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => {
      lang = btn.dataset.lang;
      applyLang(lang);
      updateLinksWithPrefs(theme, lang);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url);
    });
  });

  const burger = document.getElementById('burger');
  const primaryNav = document.getElementById('primary-nav');
  if (burger && primaryNav) {
    burger.addEventListener('click', () => primaryNav.classList.toggle('open'));
    primaryNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => primaryNav.classList.remove('open')));
  }
});
