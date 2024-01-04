import Card from "../components/Card"

const Features = () => {
    return (
        <section className="pt-4">
            <div className="container px-lg-5">
                <div className="row gx-lg-5">
                    <Card iconName="mic" title="Sesli Komutlar" text="TPG AI, sesli komutlarınızı anlayarak size hızlı ve doğru cevaplar verir. İhtiyaçlarınıza uygun bilgiyi ve yönergeleri sunar." />
                    <Card iconName="headset" title="Kişisel Asistan" text="TPG AI, takvim yönetimi, hatırlatıcılar, notlar ve daha fazlası gibi kişisel görevlerinizi kolayca yönetmenize yardımcı olur. Her zaman yanınızda olan bir asistan gibi çalışır." />
                    <Card iconName="archive-fill" title="Bilgiye Erişim" text="TPG AI, geniş bir bilgi tabanına sahiptir ve sorularınıza anında cevaplar verir. Araştırma yaparken size önemli bilgiler sunar." />
                    <Card iconName="box-fill" title="Özelleştirilebilir" text="TPG AI, sizin tercihlerinize ve ihtiyaçlarınıza göre özelleştirilebilir. Size en uygun deneyimi sağlar." />
                    <Card iconName="shield-lock-fill" title="Güvenlik" text="TPG AI, güçlü güvenlik önlemleri ile korunur. Kişisel verilerinizin gizliliğini korur ve güvenli bir şekilde kullanır." />
                    <Card iconName="translate" title="Dil Çevirisi ve İletişim Kolaylığı" text="TPG AI, farklı diller arasında hızlı ve doğru çeviriler yapabilir, Uluslararası işlerde dil engellerini aşmanıza destek olur." />
                </div>
            </div>
        </section>
    )
}
export default Features;