import { HskHeader } from "@/components/hsk-header"
import { HskFooter } from "@/components/hsk-footer"
import { HskCookieConsent } from "@/components/hsk-cookie-consent"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
    <HskHeader/>
      {/* Hero Section */}
      <section className="relative bg-white pt-4 md:pt-8 pb-12 md:pb-16 border-b-2 border-slate-200">
        <div className="container mx-auto px-4 max-w-[1050px]">
          <div className="text-center">
            <div className="inline-block px-6 py-2 bg-[var(--sport-blue)] text-white font-bold text-xs uppercase tracking-wide mb-6">
              O Nama
            </div>  
            <h1 className="font-bold text-4xl md:text-6xl mb-6 uppercase tracking-tight text-slate-900">
              Hrvatska Stranica Klađenje
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-slate-600">
              Vaš stručni vodič kroz svijet online klađenja u Hrvatskoj
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1050px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold text-3xl md:text-4xl text-slate-900 mb-6 uppercase">Naša Misija</h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  Hrvatska Stranica Klađenje nastala je iz potrebe za transparentnim i pouzdanim vodičem kroz hrvatsko
                  tržište online klađenja. U industriji punoj marketinških trikova, mi donosimo činjenice i objektivne
                  analize.
                </p>
                <p>
                  Naš tim stručnjaka detaljno ispituje svaku platformu - od sigurnosti i licenci do korisničkog iskustva
                  i kvalitete podrške. Ne prihvaćamo plaćanja za bolje ocjene, jer naša jedina obveza je prema vama.
                </p>
                <p>
                  Već godinama pratimo trendove na hrvatskom tržištu klađenja i kontinuirano evaluiramo sve dostupne
                  platforme kako bismo vam pružili najpreciznije i najkorisnije informacije za donošenje informiranih
                  odluka.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "150+", label: "Analiziranih Kladionica" },
                { number: "7+", label: "Godina Iskustva" },
                { number: "24/7", label: "Praćenje Industrije" },
                { number: "100%", label: "Nezavisnost" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-slate-50 border-2 border-slate-200 p-6 text-center hover:border-[var(--sport-blue)] transition-colors"
                >
                  <div className="text-3xl font-bold mb-2 text-[var(--sport-blue)]">{stat.number}</div>
                  <div className="text-xs uppercase tracking-wide text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-[1050px]">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl text-slate-900 mb-4 uppercase">Naši Principi</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Vrijednosti koje definiraju naš pristup analizi i recenzijama
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Objektivnost",
                description:
                  "Transparentna metodologija ocjenjivanja temeljena na stvarnim testiranjima i faktičkim podacima.",
              },
              {
                title: "Sigurnost",
                description: "Detaljno provjeravamo licence, certifikate i sigurnosne protokole prije svake preporuke.",
              },
              {
                title: "Transparentnost",
                description: "Otvoreno komuniciramo našu metodologiju i partnerstva bez skrivenih agenda.",
              },
              {
                title: "Korisnički Fokus",
                description: "Sve analiziramo iz perspektive igrača - od registracije do isplate sredstava.",
              },
              {
                title: "Aktualnost",
                description: "Kontinuirano praćenje tržišta s redovitim ažuriranjem recenzija i informacija.",
              },
              {
                title: "Odgovornost",
                description: "Promoviranje sigurnog klađenja i edukacija o odgovornom pristupu igrama na sreću.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 border-2 border-slate-200 hover:border-[var(--sport-blue)] transition-colors"
              >
                <div className="w-8 h-1 bg-[var(--sport-blue)] mb-4"></div>
                <h3 className="font-bold text-lg text-slate-900 mb-3 uppercase">{value.title}</h3>
                <p className="text-slate-700 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1050px]">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl text-slate-900 mb-4 uppercase">Naša Metodologija</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Šest ključnih kriterija za sveobuhvatnu procjenu svake platforme
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Licenciranje i Sigurnost",
                description:
                  "Temeljita provjera valjanosti licenci, SSL enkripcije, politika privatnosti i mjera zaštite podataka. Preporučujemo isključivo potpuno licencirane i sigurne operatore.",
              },
              {
                title: "Bonusi i Promocije",
                description:
                  "Detaljna analiza uvjeta bonusa, zahtjeva za klađenje, vremenskih ograničenja i programa vjernosti. Čitamo sva pravila kako ne biste morali vi.",
              },
              {
                title: "Korisničko Iskustvo",
                description:
                  "Testiranje web stranica i mobilnih aplikacija na brzinu, intuitivnost i funkcionalnost. Kvalitetna platforma mora biti jednostavna za sve korisnike.",
              },
              {
                title: "Sportska Ponuda i Kvote",
                description:
                  "Usporedba raspona sportova, broja tržišta i konkurentnosti kvota. Evaluacija live betting opcija i specijalnih ponuda.",
              },
              {
                title: "Metode Plaćanja",
                description:
                  "Analiza brzine transakcija, dostupnih metoda, naknada i limita. Najbolje platforme omogućavaju brze i sigurne transakcije.",
              },
              {
                title: "Korisnička Podrška",
                description:
                  "Provjera dostupnosti, vremena odgovora i stručnosti tima podrške kroz sve kanale komunikacije.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 border-2 border-slate-200 hover:border-[var(--sport-orange)] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--sport-orange)] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-2 uppercase">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Gambling Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-[1050px]">
          <div className="bg-white p-8 md:p-10 border-2 border-[var(--sport-orange)]">
            <h2 className="font-bold text-3xl md:text-4xl text-[var(--sport-orange)] mb-6 uppercase text-center">
              Odgovorno Klađenje
            </h2>
            <div className="space-y-4 text-base text-slate-700 leading-relaxed">
              <p className="text-center">
                Zalažemo se za odgovorno i sigurno klađenje. Klađenje treba biti zabava, nikada način zarade.
              </p>
              <div className="grid md:grid-cols-2 gap-3 mt-6">
                {[
                  "Postavljajte limite i pridržavajte ih se",
                  "Nikada ne pokušavajte vratiti gubitke",
                  "Kladite se samo novcem koji možete priuštiti izgubiti",
                  "Potražite pomoć ako klađenje postane problem",
                ].map((tip, index) => (
                  <div key={index} className="flex items-start gap-2 bg-slate-50 p-3">
                    <div className="w-2 h-2 bg-[var(--sport-orange)] rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-slate-900 text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <HskFooter />
      <HskCookieConsent />
    </div>
  )
}
