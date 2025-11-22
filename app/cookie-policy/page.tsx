import { HskHeader } from "@/components/hsk-header"
import { HskFooter } from "@/components/hsk-footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <HskHeader />

      <div className="pt-4">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <header className="text-center mb-12 pb-8 border-b-2 border-[var(--sport-blue)]">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Politika Kolačića</h1>
              <p className="text-[var(--sport-grey)]">
                Posljednje ažuriranje:{" "}
                {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <p className="text-sm text-[var(--sport-grey)] mt-2">hrvatskastranicekladenje.com</p>
            </header>

            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">Što su Kolačići</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed">
                  Kolačići (cookies) su male tekstualne datoteke koje web stranice pohranjuju na vaše računalo ili
                  mobilni uređaj tijekom posjete. Omogućavaju stranicama pamćenje vaših radnji i postavki kroz određeno
                  vrijeme, čime poboljšavaju vaše korisničko iskustvo na hrvatskastranicekladenje.com.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">Kako Koristimo Kolačiće</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed mb-4">
                  Hrvatskastranicekladenje.com koristi kolačiće za sljedeće svrhe:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--sport-grey)] ml-4">
                  <li>Omogućavanje osnovnih funkcionalnosti web stranice</li>
                  <li>Pamćenje vaših postavki i preferencija između posjeta</li>
                  <li>Analiza načina korištenja stranice za poboljšanje sadržaja</li>
                  <li>Prikupljanje anonimnih statističkih podataka o ponašanju korisnika</li>
                  <li>Personalizacija sadržaja prema vašim interesima i potrebama</li>
                  <li>Pružanje relevantnih informacija o kladionicama</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Vrste Kolačića koje Koristimo</h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-[var(--sport-blue)] pl-6 bg-[var(--sport-light-grey)] p-6 rounded-r-lg">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">1. Nužni Kolačići</h3>
                    <p className="text-[var(--sport-grey)] leading-relaxed">
                      Ovi kolačići su neophodni za ispravno funkcioniranje naše web stranice. Omogućavaju osnovne
                      funkcije poput navigacije i pristupa sigurnim područjima. Ovi kolačići ne mogu se isključiti jer
                      bi stranica prestala raditi ispravno bez njih.
                    </p>
                    <p className="text-sm text-[var(--sport-grey)] mt-2 italic">Trajanje: Sesija / Stalni</p>
                  </div>

                  <div className="border-l-4 border-[var(--sport-orange)] pl-6 bg-[var(--sport-light-grey)] p-6 rounded-r-lg">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">2. Analitički Kolačići</h3>
                    <p className="text-[var(--sport-grey)] leading-relaxed">
                      Omogućavaju nam brojanje posjeta i praćenje izvora prometa kako bismo mogli mjeriti i poboljšavati
                      performanse naše stranice. Pomoću njih razumijemo koje stranice i sadržaji su najpopularniji. Svi
                      podaci prikupljeni ovim kolačićima su agregirani i potpuno anonimni.
                    </p>
                    <p className="text-sm text-[var(--sport-grey)] mt-2 italic">Trajanje: Do 2 godine</p>
                  </div>

                  <div className="border-l-4 border-[var(--sport-green)] pl-6 bg-[var(--sport-light-grey)] p-6 rounded-r-lg">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">3. Funkcionalni Kolačići</h3>
                    <p className="text-[var(--sport-grey)] leading-relaxed">
                      Omogućavaju nam pružanje poboljšane funkcionalnosti i personalizacije. Mogu biti postavljeni od
                      strane nas ili vanjskih pružatelja usluga čije smo usluge dodali na naše stranice. Ovi kolačići
                      pamte vaše izbore kako bi vam pružili personalizirano iskustvo.
                    </p>
                    <p className="text-sm text-[var(--sport-grey)] mt-2 italic">Trajanje: Do 1 godine</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">Upravljanje Kolačićima</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed mb-4">
                  Većina web preglednika automatski prihvaća kolačiće, ali možete promijeniti postavke vašeg preglednika
                  kako biste odbili kolačiće ako želite. Imajte na umu da onemogućavanje kolačića može utjecati na
                  funkcionalnost naše stranice i ograničiti vaše korisničko iskustvo.
                </p>
                <p className="text-[var(--sport-grey)] leading-relaxed mb-4">
                  Za detaljne upute o upravljanju kolačićima u različitim preglednicima, posjetite stranice pomoći vašeg
                  preglednika:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--sport-grey)] ml-4">
                  <li>Google Chrome</li>
                  <li>Mozilla Firefox</li>
                  <li>Safari</li>
                  <li>Microsoft Edge</li>
                  <li>Opera</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">Kolačići Trećih Strana</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed">
                  Neke stranice mogu sadržavati sadržaj od trećih strana (npr. YouTube videozapise, Google mape), koji
                  mogu postavljati vlastite kolačiće. Ne kontroliramo postavljanje ovih kolačića, stoga preporučujemo da
                  provjerite web stranice trećih strana za više informacija o njihovim kolačićima i kako upravljati
                  njima.
                </p>
              </section>

              <section className="bg-[var(--sport-light-grey)] p-8 border-l-4 border-[var(--sport-blue)] rounded-r-lg">
                <h2 className="text-3xl font-bold text-foreground mb-4">Promjene Politike</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed">
                  Povremeno možemo ažurirati ovu Politiku kolačića kako bismo odrazili promjene u našim praksama ili iz
                  drugih operativnih, pravnih ili regulatornih razloga. Preporučujemo da povremeno pregledate ovu
                  stranicu kako biste bili informirani o tome kako koristimo kolačiće.
                </p>
              </section>

              <section className="bg-gradient-to-br from-[var(--sport-blue)] to-[#2d5aa0] p-8 rounded-xl text-white">
                <h2 className="text-3xl font-bold mb-4">Kontakt Informacije</h2>
                <p className="text-white/90 leading-relaxed mb-3">
                  Za sva pitanja vezana uz našu politiku kolačića, možete nas kontaktirati na:
                </p>
                <p className="font-semibold text-lg">
                  Email:{" "}
                  <p
                    className="text-white hover:text-[var(--sport-orange)] underline transition-colors"
                  >
                    info@hrvatskastranicekladenje.com
                  </p>
                </p>
                <p className="text-white/90 mt-4 text-sm">Odgovorit ćemo na vaš upit u najkraćem mogućem roku.</p>
              </section>
            </div>
          </article>
        </div>
      </div>

      <HskFooter />
    </div>
  )
}
