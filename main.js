/* The SMART Modern Public School — sample site script (vanilla JS, no build step). */
(function () {
  "use strict";
  var LS_KEY = "smart-lang";
  var UR = {
"ph": "عارضی",
"nav.home": "ہوم",
"nav.about": "ہمارے بارے میں",
"nav.adm": "داخلے",
"nav.fees": "فیس اور اوقات",
"nav.gallery": "گیلری",
"nav.contact": "رابطہ",
"menu": "مینو",
"f.choose": "جماعت منتخب کریں",
"wa": "واٹس ایپ پر بات کریں",
"cta.t": "اپنے بچے کو بہترین آغاز دیں — اسمارٹینز میں شامل ہوں!",
"cta.p": "پلے گروپ سے آٹھویں جماعت تک داخلے جاری ہیں۔ شہدادکوٹ روڈ پر تشریف لائیں یا آج ہی واٹس ایپ کریں۔",
"btn.apply": "داخلے کے لیے اپلائی کریں",
"btn.wa": "واٹس ایپ کریں",
"w1t": "ہم ہر بچے کو اپنا سمجھتے ہیں",
"w1p": "شفیق اساتذہ جو ہر اسمارٹین کو نام سے جانتے ہیں اور گھر والوں کی طرح خیال رکھتے ہیں۔",
"w2t": "کھلونوں اور سرگرمیوں سے تعلیم",
"w2p": "بچے کھیل، تعمیر اور دریافت کے ذریعے سیکھتے ہیں — صرف رٹے سے نہیں۔",
"w3t": "مفت کمپیوٹر کلاسز",
"w3p": "کم عمری سے ڈیجیٹل مہارتیں، ہمارے طلبہ کے لیے مفت۔",
"w4t": "ٹرافیاں اور حوصلہ افزائی",
"w4p": "ہم محنت اور کامیابی کو ٹرافیوں اور انعامات سے سراہتے ہیں۔",
"w5t": "جمعہ کی سرگرمیاں",
"w5p": "ہفتہ وار دلچسپ سرگرمیاں جو اعتماد، تخلیقی صلاحیت اور ٹیم ورک بڑھاتی ہیں۔",
"w6t": "کتابیں بہترین دوست ہیں",
"w6p": "مطالعے کا شوق جو اسمارٹینز کے ساتھ عمر بھر رہتا ہے۔",
"pg.1t": "ابتدائی سال",
"pg.1l": "پلے گروپ اور پری پرائمری",
"pg.1p": "کھیل، نظمیں، رنگ اور کھلونے — پڑھنے، گنتی اور اچھے اخلاق کی طرف پہلے نرم قدم۔",
"pg.2t": "پرائمری",
"pg.2l": "جماعت 1 تا 5",
"pg.2p": "سرگرمیوں پر مبنی اسباق کے ساتھ انگریزی، اردو، ریاضی اور سائنس کی مضبوط بنیاد۔",
"pg.3t": "مڈل",
"pg.3l": "جماعت 6 تا 8",
"pg.3p": "گہری تعلیم، اعتماد اور کردار — اسمارٹینز کو اگلے بڑے قدم کے لیے تیار کرنا۔",
"pg.free": "مفت",
"pg.ct": "مفت کمپیوٹر کلاسز",
"pg.cp": "ہر اسمارٹین کو بغیر اضافی خرچ کے عملی کمپیوٹر تعلیم — ٹائپنگ، بنیادی سافٹ ویئر اور ٹیکنالوجی کا محفوظ استعمال۔",
"pg.cn": "نصاب کی تفصیل",
"pg.board": "بورڈ / الحاق اور ذریعہ تعلیم:",
"a1t": "کھلونوں سے تعلیم",
"a1p": "رنگین اشکال، بلاکس اور پزلز سے بات آسانی سے سمجھ آتی ہے۔",
"a2t": "اسمارٹ کلاس رومز",
"a2p": "اسمارٹینز جدید ذرائع سے سیکھتے ہیں۔",
"a3t": "جمعہ کی سرگرمیاں",
"a3p": "ہر ہفتے اسمبلی، کھیل اور تخلیقی سرگرمیاں۔",
"a4t": "ٹرافیاں اور انعامات",
"a4p": "ہر کامیابی جشن کی حقدار ہے۔",
"tq.t1": "“نمونہ رائے — اسمارٹین خاندانوں کی اصل آراء ان کی اجازت سے یہاں شامل کی جائیں گی۔”",
"tw.t1": "پلے گروپ کے طالب علم کی والدہ",
"tq.t2": "“نمونہ رائے — اسمارٹین خاندانوں کی اصل آراء ان کی اجازت سے یہاں شامل کی جائیں گی۔”",
"tw.t2": "تیسری جماعت کے طالب علم کے والد",
"tq.t3": "“نمونہ رائے — اسمارٹین خاندانوں کی اصل آراء ان کی اجازت سے یہاں شامل کی جائیں گی۔”",
"tw.t3": "سابق اسمارٹین",
"h.pill": "داخلے جاری · پلے گروپ تا آٹھویں جماعت",
"h.t1": "دی اسمارٹ ماڈرن",
"h.t2": "پبلک اسکول",
"tagline": "کمال کی جستجو",
"h.lead": "قمبر کا ایک خوشگوار اور شفیق اسکول جہاں ہم ہر بچے کو اپنا سمجھتے ہیں۔ سرگرمیوں پر مبنی تعلیم، مفت کمپیوٹر کلاسز اور باوقار اسمارٹینز — کیونکہ آپ کے بچے بہترین تعلیم کے حقدار ہیں۔",
"h.c1": "کھلونوں سے تعلیم",
"h.c2": "مفت کمپیوٹر کلاسز",
"h.c3": "ٹرافیاں اور انعامات",
"h.f1": "آپ کی پیاری مسکراہٹ",
"h.f1s": "ہمارا انعام ہے",
"h.f2": "اسمارٹینز",
"h.f2s": "پلے گروپ ← آٹھویں جماعت",
"as.t": "داخلے جاری ہیں!",
"as.p": "پلے گروپ سے آٹھویں جماعت تک اپنے بچے کا داخلہ کروائیں اور اس کا مستقبل سنواریں۔",
"as.session": "سیشن کی تاریخیں:",
"btn.how": "داخلے کا طریقہ",
"why.eb": "والدین ہمیں کیوں چنتے ہیں",
"why.t": "ایک اسکول جو گھر جیسا لگے",
"why.i": "اسمارٹ ماڈرن میں تعلیم خوشگوار، محفوظ اور حوصلہ افزائی سے بھرپور ہے۔",
"prog.eb": "پروگرام",
"prog.t": "اسمارٹین کا تعلیمی سفر",
"prog.i": "پلے گروپ کے پہلے دن سے آٹھویں جماعت کے آخری دن تک — ایک واضح اور شفیق راستہ۔",
"sl.s1": "ہم ہر بچے کو اپنا سمجھتے ہیں",
"sl.s2": "آپ کے بچے بہترین تعلیم کے حقدار ہیں",
"sl.s3": "آپ کی پیاری مسکراہٹ ہمارا انعام ہے",
"sl.s4": "تبدیلی تعلیم سے شروع ہوتی ہے",
"sl.s5": "کتابیں بہترین دوست ہیں",
"act.eb": "اسمارٹینز سرگرمِ عمل",
"act.t": "ایسی تعلیم جو کھیل جیسی لگے",
"act.i": "اسمارٹ ماڈرن کی روزمرہ زندگی کی ایک جھلک۔",
"pr.eb": "پرنسپل کا خوش آمدیدی پیغام",
"pr.q": "“دی اسمارٹ ماڈرن پبلک اسکول میں خوش آمدید، جہاں ہم ہر بچے کو اپنا سمجھتے ہیں۔ آپ کے بچے کی پیاری مسکراہٹ ہی ہمارا انعام ہے۔”",
"pr.name": "پرنسپل کا نام",
"pr.role": "پرنسپل، دی اسمارٹ ماڈرن پبلک اسکول",
"pr.note": "پیغام، نام اور تصویر اسکول فراہم کرے گا۔",
"galp.eb": "گیلری",
"galp.t": "یادگار لمحات",
"btn.gal": "مکمل گیلری دیکھیں",
"cap.g1": "ٹیبلٹ کے ساتھ سیکھتے اسمارٹینز",
"cap.g2": "کھلونوں کے ذریعے تعلیم",
"cap.g3": "ہونہار طلبہ کے لیے ٹرافیاں اور انعامات",
"cap.g4": "باوقار اسمارٹینز",
"cap.g5": "سرگرمیوں پر مبنی تعلیم",
"cap.g6": "صبح کی اسمبلی",
"tst.eb": "والدین کی رائے",
"tst.t": "خوش خاندان، خوش اسمارٹینز",
"tst.note": "یہ صرف ترتیب کے لیے نمونہ آراء ہیں — اصل والدین کی آراء سے تبدیل کی جائیں گی۔",
"skip": "مواد پر جائیں",
"brand.name": "اسمارٹ ماڈرن",
"brand.sub": "پبلک اسکول · قمبر",
"nav.apply": "ابھی اپلائی کریں",
"ft.name": "دی اسمارٹ ماڈرن پبلک اسکول",
"ft.about": "قمبر میں پلے گروپ سے مڈل (آٹھویں جماعت) تک — سرگرمیوں پر مبنی تعلیم، مفت کمپیوٹر کلاسز، اور ایسی ٹیم جو ہر بچے کو اپنا سمجھتی ہے۔",
"ft.links": "صفحات",
"ft.contact": "تشریف لائیں اور کال کریں",
"addr.short": "نزد درگاہ حسین آباد، شہدادکوٹ روڈ، قمبر",
"ft.rights": "دی اسمارٹ ماڈرن پبلک اسکول، قمبر۔",
"ft.credit": "نمونہ ویب سائٹ — ڈیزائن: ای کام ایجنٹ لیب",
"chat.tip": "🤖 ہمارا اے آئی داخلہ معاون جلد آ رہا ہے! فی الحال واٹس ایپ پر پیغام بھیجیں۔",
"chat.lbl": "ہم سے بات کریں",
"chat.soon": "جلد آ رہا ہے",
"ab.crumb": "ہمارے بارے میں",
"ab.h1": "ہمارے اسکول کے بارے میں",
"ab.sub": "کمال کی جستجو — اسمارٹینز کی کہانی۔",
"ab.since": "قیام",
"ab.eb": "ہماری کہانی",
"ab.h": "جہاں ہر اسمارٹین کو اپنا سمجھا جاتا ہے",
"ab.p1": "دی اسمارٹ ماڈرن پبلک اسکول درگاہ حسین آباد کے قریب شہدادکوٹ روڈ، قمبر، ضلع قمبر شہدادکوٹ، سندھ میں واقع ہے۔ ہم پلے گروپ سے مڈل (آٹھویں جماعت) تک بچوں کو سرگرمیوں اور کھلونوں کے ذریعے پڑھاتے ہیں، اور اپنے طلبہ کو مفت کمپیوٹر کلاسز فراہم کرتے ہیں۔",
"ab.p2": "ہمارے طلبہ فخر سے خود کو <strong>اسمارٹینز</strong> کہتے ہیں۔ ہمارا نعرہ سادہ ہے: <em>کمال کی جستجو</em>۔",
"ab.ph": "اسکول کی تاریخ، قیام کی کہانی اور سنگِ میل اسکول فراہم کرے گا۔",
"st.1": "طلبہ",
"st.2": "اساتذہ",
"st.3": "جماعتیں",
"st.3v": "پلے گروپ – 8",
"st.4": "انعامات",
"mv.eb": "ہمارا یقین",
"mv.t": "مشن، وژن اور اقدار",
"mv.mt": "ہمارا مشن",
"mv.mp": "ہر بچے کو اپنا سمجھنا اور ہر اسمارٹین کو بہترین تعلیم دینا — خوشگوار سرگرمیوں پر مبنی تعلیم، شفیق اساتذہ اور کمپیوٹر جیسی جدید مہارتوں کے ذریعے۔",
"mv.vt": "ہمارا وژن",
"mv.vp": "تبدیلی تعلیم سے شروع ہوتی ہے۔ ہم چاہتے ہیں کہ اسمارٹینز پُراعتماد، مہربان اور جستجو کرنے والے نوجوان بنیں جو عمر بھر کمال کی تلاش میں رہیں۔",
"mv.lt": "ہماری اقدار",
"mv.ll": "<li>شفقت — آپ کی مسکراہٹ ہمارا انعام ہے</li><li>جستجو — کتابیں بہترین دوست ہیں</li><li>ہر کام میں عمدگی</li><li>احترام، دیانت اور اچھے اخلاق</li>",
"pr.m2": "[پرنسپل کا والدین کے نام مکمل پیغام یہاں شامل ہوگا — اسمارٹینز کے لیے وژن، تدریسی طریقہ، اور اسکول دیکھنے کی دعوت۔]",
"st1t": "رابطہ کریں",
"st1p": "کال، واٹس ایپ کریں یا نیچے انکوائری فارم بھریں۔",
"st2t": "اسکول دیکھیں",
"st2p": "درگاہ حسین آباد، شہدادکوٹ روڈ پر ہمارے اساتذہ سے ملیں۔",
"st3t": "جائزہ اور فارم",
"st3p": "مناسب جماعت کے لیے دوستانہ گفتگو، پھر فارم مکمل کریں۔",
"st4t": "خوش آمدید، اسمارٹین!",
"st4p": "کتابوں اور یونیفارم کی معلومات لیں اور پڑھائی شروع کریں۔",
"opt.o1": "پلے گروپ",
"opt.o2": "نرسری / پریپ",
"opt.o3": "جماعت 1",
"opt.o4": "جماعت 2",
"opt.o5": "جماعت 3",
"opt.o6": "جماعت 4",
"opt.o7": "جماعت 5",
"opt.o8": "جماعت 6",
"opt.o9": "جماعت 7",
"opt.o10": "جماعت 8",
"ad.crumb": "داخلے",
"ad.h1": "داخلے",
"ad.sub": "داخلے جاری ہیں — پلے گروپ تا آٹھویں جماعت۔ آپ کے بچے بہترین تعلیم کے حقدار ہیں!",
"stp.eb": "4 آسان مراحل",
"stp.t": "اسمارٹینز میں شامل ہونے کا طریقہ",
"f.t": "داخلہ انکوائری",
"f.demo": "ڈیمو فارم — کوئی ڈیٹا نہیں بھیجا جاتا",
"f.student": "بچے کا نام",
"f.parent": "والد / سرپرست کا نام",
"f.phone": "فون / واٹس ایپ",
"f.class": "مطلوبہ جماعت",
"f.msg": "پیغام (اختیاری)",
"f.send": "انکوائری بھیجیں",
"f.ok": "✅ شکریہ! یہ ڈیمو فارم ہے، اس لیے کچھ نہیں بھیجا گیا۔ براہ کرم 0336-2506588 پر کال یا واٹس ایپ کریں۔",
"docs.t": "مطلوبہ دستاویزات",
"docs.l": "<li>بچے کا ب فارم / پیدائشی سرٹیفکیٹ</li><li>والد / سرپرست کے شناختی کارڈ کی کاپی</li><li>پاسپورٹ سائز تصاویر</li><li>سابقہ اسکول کا سرٹیفکیٹ (اگر ہو)</li>",
"docs.n": "عام فہرست — حتمی فہرست اسکول تصدیق کرے گا۔",
"ses.t": "سیشن اور عمر کی رہنمائی",
"ses.p": "سیشن کے آغاز کی تاریخ:",
"ses.a": "جماعت کے لحاظ سے عمر:",
"side.q": "سوالات؟ ہم سے بات کریں",
"fr1": "پلے گروپ",
"fr2": "نرسری / پریپ",
"fr3": "جماعت 1 تا 5 (پرائمری)",
"fr4": "جماعت 6 تا 8 (مڈل)",
"fr5": "کمپیوٹر کلاسز",
"free": "مفت",
"fe.crumb": "فیس اور اوقات",
"fe.h1": "فیس اور اوقات",
"fe.sub": "والدین کے لیے واضح اور آسان معلومات۔",
"fe.n": "نیچے دی گئی فیس اور اوقات عارضی ہیں اور اسکول کی تصدیق کے بعد اپ ڈیٹ ہوں گے۔ موجودہ فیس کے لیے کال یا واٹس ایپ کریں۔",
"fe.h": "فیس کا ڈھانچہ",
"fe.c1": "جماعت",
"fe.c2": "داخلہ فیس",
"fe.c3": "ماہانہ فیس",
"fe.c4": "سالانہ اخراجات",
"ti.h": "اسکول کے اوقات",
"ti.c1": "موسم",
"ti.c2": "دن",
"ti.c3": "وقت",
"ti.s": "گرمیاں",
"ti.d": "پیر تا ہفتہ",
"ti.w": "سردیاں",
"ti.f": "جمعہ (سرگرمیاں)",
"ti.fd": "جمعہ",
"ti.n": "کام کے دنوں کی بھی تصدیق باقی ہے۔",
"of.h": "دفتری اوقات",
"of.1": "داخلہ دفتر",
"of.2": "کمپیوٹر لیب",
"of.3": "فون پر معلومات",
"ga.crumb": "گیلری",
"ga.h1": "گیلری",
"ga.sub": "اسمارٹ ماڈرن میں مسکراہٹیں، تعلیم اور تقریبات۔",
"ga.n": "تصویر بڑی کرنے کے لیے اس پر ٹیپ کریں۔ تصاویر اسکول کے فیس بک پیج سے ہیں — زیادہ معیاری تصاویر بعد میں شامل کی جا سکتی ہیں۔",
"cap.g7": "کتابیں بہترین دوست ہیں",
"cap.g8": "یونیفارم میں اسمارٹینز",
"cap.g9": "ہماری کلاسوں کے اندر",
"cap.g10": "توجہ سے پڑھائی",
"cap.g11": "علم کے ساتھی",
"cap.g12": "مستقبل کے رہنما",
"cap.g13": "داخلے جاری ہیں — کتابیں بہترین دوست ہیں",
"cap.g14": "اسمارٹ ماڈرن کی طرف سے عید مبارک",
"ga.more": "مزید ویڈیوز اور تصاویر ہمارے سوشل پیجز پر دیکھیں",
"co.crumb": "رابطہ",
"co.h1": "ہم سے رابطہ کریں",
"co.sub": "ہم آپ اور آپ کے ننھے اسمارٹین سے ملنا چاہیں گے۔",
"co.addr": "پتہ",
"addr.full": "نزد درگاہ حسین آباد، شہدادکوٹ روڈ، قمبر، ضلع قمبر شہدادکوٹ، سندھ، پاکستان",
"co.mob": "موبائل اور واٹس ایپ",
"co.land": "لینڈ لائن",
"co.email": "ای میل",
"co.hrs": "دفتری اوقات",
"co.dir": "راستہ معلوم کریں",
"car.t": "ہمیں اساتذہ کی ضرورت ہے!",
"car.p": "خواتین اساتذہ درخواست دے سکتی ہیں — اپنی سی وی واٹس ایپ یا ای میل کریں۔"
};

  function applyLang(lang) {
    var html = document.documentElement, ur = lang === "ur";
    html.lang = ur ? "ur" : "en";
    html.dir = ur ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (!el.hasAttribute("data-en")) el.setAttribute("data-en", el.innerHTML);
      el.innerHTML = ur && UR[k] != null ? UR[k] : el.getAttribute("data-en");
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var p = el.getAttribute("data-i18n-attr").split(":"), attr = p[0], k = p[1], store = "data-en-" + attr;
      if (!el.hasAttribute(store)) el.setAttribute(store, el.getAttribute(attr) || "");
      el.setAttribute(attr, ur && UR[k] ? UR[k] : el.getAttribute(store));
    });
    var t = document.querySelector(".lang-toggle");
    if (t) {
      t.querySelector(".lt-txt").textContent = ur ? "English" : "اردو";
      t.setAttribute("lang", ur ? "en" : "ur");
      t.setAttribute("aria-label", ur ? "Switch to English" : "اردو میں دیکھیں — Switch to Urdu");
    }
    try { localStorage.setItem(LS_KEY, lang); } catch (e) {}
  }

  var saved = "en";
  try { saved = localStorage.getItem(LS_KEY) || "en"; } catch (e) {}

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(saved);
    var toggle = document.querySelector(".lang-toggle");
    if (toggle) toggle.addEventListener("click", function () { applyLang(document.documentElement.lang === "ur" ? "en" : "ur"); });

    /* Header shadow on scroll */
    var hdr = document.querySelector(".site-header");
    function onScroll() { if (hdr) hdr.classList.toggle("scrolled", window.scrollY > 10); }
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

    /* Mobile menu */
    var btn = document.querySelector(".menu-btn"), nav = document.getElementById("main-nav");
    if (btn && nav) {
      btn.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        document.body.classList.toggle("nav-open", open);
      });
      nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); document.body.classList.remove("nav-open"); });
      });
    }

    /* Chat bubble (AI admissions assistant — coming soon) */
    var chat = document.querySelector(".chat-bubble"), tip = document.getElementById("chat-tip"), tmr;
    if (chat && tip) chat.addEventListener("click", function () {
      var s = tip.classList.toggle("show");
      chat.setAttribute("aria-expanded", s ? "true" : "false");
      clearTimeout(tmr);
      if (s) tmr = setTimeout(function () { tip.classList.remove("show"); chat.setAttribute("aria-expanded", "false"); }, 6000);
    });

    /* Demo form — nothing is sent */
    var form = document.querySelector("form[data-demo]");
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = form.querySelector(".form-msg");
      if (msg) { msg.classList.add("show"); msg.focus(); }
      form.reset();
    });

    /* Reveal on scroll */
    var rev = document.querySelectorAll(".why-card,.stage,.act-card,.t-card,.mv-card,.step,.tile,.c-card,.computer-card,.principal-card");
    if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }); }, { rootMargin: "0px 0px -40px 0px" });
      rev.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
    }

    /* Lightbox */
    var tiles = Array.prototype.slice.call(document.querySelectorAll(".tile[data-full]"));
    var lb = document.querySelector(".lightbox");
    if (lb && tiles.length) {
      var img = lb.querySelector("img"), cap = lb.querySelector(".lb-cap"), idx = 0, last = null;
      var show = function (i) {
        idx = (i + tiles.length) % tiles.length;
        var t = tiles[idx], c = t.querySelector(".cap");
        img.src = t.getAttribute("data-full");
        img.alt = c ? c.textContent : ""; cap.textContent = c ? c.textContent : "";
      };
      var open = function (i) { last = document.activeElement; show(i); lb.classList.add("open"); document.body.style.overflow = "hidden"; lb.querySelector(".lb-close").focus(); };
      var close = function () { lb.classList.remove("open"); document.body.style.overflow = ""; if (last) last.focus(); };
      tiles.forEach(function (t, i) { t.addEventListener("click", function () { open(i); }); });
      lb.querySelector(".lb-close").addEventListener("click", close);
      lb.querySelector(".lb-prev").addEventListener("click", function () { show(idx - 1); });
      lb.querySelector(".lb-next").addEventListener("click", function () { show(idx + 1); });
      lb.addEventListener("click", function (e) { if (e.target === lb || e.target.tagName === "FIGURE") close(); });
      document.addEventListener("keydown", function (e) {
        if (!lb.classList.contains("open")) return;
        var rtl = document.documentElement.dir === "rtl";
        if (e.key === "Escape") close();
        if (e.key === "ArrowRight") show(rtl ? idx - 1 : idx + 1);
        if (e.key === "ArrowLeft") show(rtl ? idx + 1 : idx - 1);
      });
    }

    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  });
})();
