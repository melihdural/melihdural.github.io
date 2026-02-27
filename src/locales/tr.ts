export const tr = {
    // Navigation
    nav: {
        about: "Ben kimim?",
        fullstack: "Ne yapıyorum?",
        enterprise: "İşler",
        games: "Oyun geçmişi",
        contact: "Yaz"
    },

    // Hero
    hero: {
        badge: "Fullstack Developer (.NET + React/Vue)",
        title: {
            line1: "Fikirleri",
            line2: "çalışan ürünlere çeviriyorum."
        },
        subtitle:
            "Frontend’de React/Vue, backend’de .NET ile uçtan uca ürün geliştiriyorum. Hızlı çalışan, bakımı kolay, ölçeklenebilir sistemler kurmayı seviyorum.",
        cta: {
            projects: "İşlere göz at",
            story: "Kısa hikâyem"
        }
    },

    // About
    about: {
        sectionTitle: "Ben kimim?",
        heading: {
            line1: "Arkeoloji okudum.",
            line2: "Şimdi yazılım geliştiriyorum."
        },
        paragraphs: {
            p1:
                "Hacettepe Üniversitesi’nde Arkeoloji okudum. Orada öğrendiğim şey şuydu: karmaşık bir şeyi parçalayarak anlamak ve doğru soruyu sormak. Aynı refleksi bugün yazılımda kullanıyorum.",
            p2:
                "Yaklaşık 3 yıldır fullstack geliştirici olarak çalışıyorum. React/Vue ile arayüz kuruyor, .NET ile servis yazıyor, PostgreSQL/MySQL/Oracle tarafında veriyi yönetiyorum. Mikroservis, mesajlaşma (RabbitMQ) ve caching (Redis) gibi konularla da uğraşıyorum.",
            // Versiyon A (Hobi/üretim dahil - sende gerçekten varsa tut)
            p3:
                "Kod dışında da üretmeyi seviyorum. Bazen müzikle, bazen kahveyle, bazen de kafamdaki bir fikri küçük bir otomasyona dönüştürerek. Yaratıcılık tarafım, “işe yarayan bir şeye” dönüştüğünde keyif alıyorum."
            // Versiyon B (Hobi istemiyorsan p3 yerine bunu koy)
            // p3:
            //   "Benim için işin özü şu: fikri basitleştir, doğru yere çöz, sonra sağlamlaştır. Gereksiz şov yerine; çalışan, sürdürülebilir ve ölçülebilir iş çıkarmaya odaklanıyorum."
        },
        interests: {
            // Bunlar sende gerçekten varsa kalsın; yoksa boş bırak veya çıkar.
            coffee: { title: "Kahve", desc: "Nitelikli kahve" },
            commerce: { title: "Otomasyon", desc: "Küçük araçlar & script’ler" },
            electronics: { title: "Elektronik", desc: "Devreler & tadilat" }
        }
    },

    // Tech Stack
    tech: {
        sectionTitle: "Ne kullanıyorum?",
        heading: "Günlük stack",
        badges: {
            expert: "Güçlü",
            advanced: "İyi",
            intermediate: "Kullanıyorum"
        },
        stack: {
            dotnet: {
                title: ".NET / C#",
                desc: "Web API’ler, servis tasarımı, performans ve bakımı kolay backend."
            },
            react: {
                title: "React",
                desc: "Hızlı, temiz ve ölçeklenebilir arayüzler."
            },
            vue: {
                title: "Vue",
                desc: "Proje ihtiyacına göre hızlı geliştirme ve net UI akışı."
            },
            message: {
                title: "RabbitMQ / Redis",
                desc: "Mesajlaşma, job akışları ve caching gibi altyapı ihtiyaçları."
            },
            ts: {
                title: "TypeScript",
                desc: "Daha az sürpriz, daha okunabilir kod."
            },
            micro: {
                title: "Microservices",
                desc: "Modüler servisler, sınırları net domain’ler, büyüyebilir yapı."
            }
        }
    },

    // Corporate Projects
    corporate: {
        sectionTitle: "İşler",
        heading: "Projeler",
        roles: {
            fullstack: "Fullstack Geliştirici"
        },
        readCaseStudy: "Detayları İncele",
        projects: {
            seeco: {
                title: "SEECO MIS — Sanayi ve Teknoloji Bakanlığı",
                desc:
                    "SEECO Programı kapsamında (Avrupa Bölgesel Kalkınma Fonu destekli) MIS + web sitesi geliştirme çalışmaları. Sistem; servis odaklı bir yapıda uçtan uca proje operasyonlarını kapsıyor: yönetim paneli, bileşen bazlı uygulama takibi, alt-hibe başvuruları, finans yönetimi, satınalma & sözleşme yönetimi, izleme-değerlendirme (M&E), çevresel ve sosyal çerçeve, şikâyet/geri bildirim mekanizması (GRM) ve doküman/kayıt yönetimi. Kapsamda ayrıca ihtiyaç analizi (donanım dahil), prototipleme, eğitimler, kurum sunucularına kurulum ve proje boyunca bakım/destek süreçleri yer alıyor.",
                link: "https://www.bysgrup.com.tr/website-and-project-management-information-system-mis-design-maintenance-and-repair-service-procurement-i-1119"
            },
            iqjvc: {
                title: "IQ JVC — İŞKUR",
                desc:
                    "İŞKUR için yürütülen ‘İş ve Meslek Danışmanlığı Hizmetlerinin Geliştirilmesi’ programı kapsamında (AB destekli; DAI Global Austria liderliğinde, BYS alt yüklenici). Ürün tarafında iki hedef gruba (öğrenciler ve yetişkin iş arayanlar) yönelik online mesleki yönelim ve danışmanlık test platformu bulunuyor. Soru havuzu ve test bataryası boyutlarının kurgulanması, adaptif test yazılımının iteratif prototiplerle geliştirilmesi, fonksiyonel testler, pilot/deneme saha çalışması desteği ve psikometrik analiz + norm tabloları üretimi gibi süreçleri kapsıyor. Çıktı olarak danışmanların kullanacağı saha/kurum ve birleşik raporlarla veri temelli yönlendirme hedefleniyor.",
                link: "https://www.bysgrup.com.tr/technical-assistance-for-improving-job-and-vocational-counselling-services-project--iq-jvc--c-1085"
            },
            ceb: {
                title: "SHIFA MMIS — Sağlık Bakanlığı",
                desc:
                    "Türkiye’de sağlık altyapısının güçlendirilmesine yönelik SHIFA Programı kapsamında (Avrupa Konseyi Kalkınma Bankası destekli) Sağlık Bakanlığı için yürütülen çalışma. Ana ürün; çok sayıda ildeki inşaat/yenileme ve tıbbi ekipman tedarik süreçlerini izlemek için bir İzleme Yönetim Bilgi Sistemi (MMIS). Sistem; kurumsal izleme, analiz ve raporlama ihtiyacına göre tasarlanıyor ve paydaşlarla resmî raporlama kanallarını destekliyor. Kapsam; risk yönetimi (risk kayıtları, tedarik takibi, Gantt güncellemeleri) ve kapasite geliştirme (eğitim planları, atölyeler, kılavuzlar) gibi süreçlerle de tamamlanıyor.",
                link: "https://www.bysgrup.com.tr/technical-assistance-for-the-provision-of-capacity-building-measures-to-the-ministry-of-health-in-turkey-for-strengthening-healthcare-infrastructure-for-all--shifa--project--c-1083"
            },
            eltTool: {
                title: "ELT Tool — Yeşilay (Devam ediyor)",
                desc:
                    "Oracle ODI / Microsoft SSIS benzeri bir ELT/ETL aktarım aracı. Farklı veri kaynakları arasında akışlar kurma, bağlantıları yönetme, mapping/dönüşüm adımlarını tanımlama ve çalıştırmaları izleme üzerine odaklanıyor. Hedef; tek seferlik script’ler yerine ekiplerin günlük kullanabileceği net bir işletim deneyimi: çalışma geçmişi, hata görünürlüğü ve tekrar edilebilir pipeline’lar.",
                link: ""
            },
            gradient: {
                title: "Gradient - Şirket içi (Devam ediyor)",
                desc:
                    "Yapay zeka destekli bir test yönetim ürünü. Kullanıcılar soru bankaları, test havuzları ve paketler oluşturuyor; davet linki ile katılımcıları testlere yönlendiriyor. Amaç sadece ‘form oluşturmak’ değil: içerik üretimi, dağıtım ve sonuçların ölçümlenmesini tek bir akışta toparlayan hızlı ve düzenli bir sistem kurmak.",
                link: ""
            }
        }
    },

    // Games
    games: {
        sectionTitle: "Oyun geçmişi",
        heading: "Unity dönemi",
        tech: "Unity / C#"
    },

    // Footer
    footer: {
        subtitle: "Fullstack Developer"
    }
};