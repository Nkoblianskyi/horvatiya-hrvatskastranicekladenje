import { HskHeader } from "@/components/hsk-header"
import { HskFooter } from "@/components/hsk-footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <HskHeader />

      <div className="pt-4">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <header className="text-center mb-12 pb-8 border-b-2 border-[var(--sport-blue)]">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Politika Privatnosti</h1>
              <p className="text-[var(--sport-grey)]">
                Posljednje ažuriranje:{" "}
                {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <p className="text-sm text-[var(--sport-grey)] mt-2">hrvatskastranicekladenje.com</p>
            </header>

            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">Uvod</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed">
                  Dobrodošli na Hrvatskastranicekladenje.com. Vaša privatnost je izuzetno važna za nas. Ova Politika
                  privatnosti objašnjava kako prikupljamo, koristimo, obrađujemo i štitimo vaše osobne podatke kada
                  posjetite našu web stranicu i koristite naše usluge.
                </p>
                <p className="text-[var(--sport-grey)] leading-relaxed mt-4">
                  Korištenjem naše web stranice, pristajete na prikupljanje i upotrebu informacija u skladu s ovom
                  politikom. Ako se ne slažete s bilo kojim dijelom ove politike, molimo vas da ne koristite našu
                  stranicu.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">Koje Podatke Prikupljamo</h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-[var(--sport-blue)] pl-6 bg-[var(--sport-light-grey)] p-6 rounded-r-lg">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Podaci Koje Dobrovoljno Pružate</h3>
                    <ul className="list-disc list-inside space-y-2 text-[var(--sport-grey)] ml-4">
                      <li>Email adresa (ako se pretplatite na newsletter)</li>
                      <li>Ime i prezime (ako nas kontaktirate)</li>
                      <li>Sadržaj vaših poruka i upita</li>
                      <li>Sve druge informacije koje odlučite podijeliti s nama</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-[var(--sport-orange)] pl-6 bg-[var(--sport-light-grey)] p-6 rounded-r-lg">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Automatski Prikupljeni Podaci</h3>
                    <ul className="list-disc list-inside space-y-2 text-[var(--sport-grey)] ml-4">
                      <li>IP adresa</li>
                      <li>Tip preglednika i verzija</li>
                      <li>Operativni sustav</li>
                      <li>Stranice koje posjećujete na našoj web stranici</li>
                      <li>Vrijeme i datum posjete</li>
                      <li>Vrijeme provedeno na pojedinim stranicama</li>
                      <li>Referral URL (stranica s koje ste došli)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">Kako Koristimo Vaše Podatke</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed mb-4">
                  Prikupljene podatke koristimo za sljedeće svrhe:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--sport-grey)] ml-4">
                  <li>Pružanje i poboljšanje naših usluga i sadržaja</li>
                  <li>Personalizacija vašeg korisničkog iskustva</li>
                  <li>Odgovaranje na vaše upite i pružanje korisničke podrške</li>
                  <li>Slanje newslettera i obavijesti (samo ako ste pristali)</li>
                  <li>Analiza korištenja web stranice i poboljšanje funkcionalnosti</li>
                  <li>Zaštita od prijevara i zloupotreba</li>
                  <li>Ispunjavanje pravnih obveza</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">Dijeljenje Podataka s Trećim Stranama</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed mb-4">
                  Ne prodajemo, ne iznajmljujemo niti dijelimo vaše osobne podatke s trećim stranama u komercijalne
                  svrhe. Možemo podijeliti vaše podatke samo u sljedećim okolnostima:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--sport-grey)] ml-4">
                  <li>S vašom izričitom suglasnošću</li>
                  <li>S pouzdanim pružateljima usluga koji nam pomažu u poslovanju (npr. hosting, analitika)</li>
                  <li>Kada je to potrebno za poštivanje zakona ili pravnih postupaka</li>
                  <li>Za zaštitu prava, imovine ili sigurnosti naše stranice i korisnika</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">Kolačići i Slične Tehnologije</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed">
                  Koristimo kolačiće i slične tehnologije praćenja za poboljšanje vašeg iskustva na našoj stranici. Za
                  detaljnije informacije o tome kako koristimo kolačiće, molimo pogledajte našu{" "}
                  <a href="/cookie-policy" className="text-[var(--sport-blue)] hover:underline font-semibold">
                    Politiku kolačića
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">Sigurnost Podataka</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed">
                  Sigurnost vaših osobnih podataka nam je prioritet. Koristimo prikladne tehničke i organizacijske mjere
                  zaštite kako bismo spriječili neovlašteni pristup, otkrivanje, izmjenu ili uništavanje vaših podataka.
                  Međutim, nijedna metoda prijenosa podataka preko interneta ili metoda elektroničke pohrane nije 100%
                  sigurna, stoga ne možemo garantirati apsolutnu sigurnost.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">Vaša Prava</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed mb-4">
                  U skladu s primjenjivim zakonima o zaštiti podataka, imate sljedeća prava:
                </p>
                <div className="space-y-4">
                  <div className="bg-[var(--sport-light-grey)] p-4 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Pravo na pristup</h4>
                    <p className="text-[var(--sport-grey)] text-sm">
                      Možete zatražiti kopiju osobnih podataka koje čuvamo o vama.
                    </p>
                  </div>
                  <div className="bg-[var(--sport-light-grey)] p-4 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Pravo na ispravak</h4>
                    <p className="text-[var(--sport-grey)] text-sm">
                      Možete zatražiti ispravak netočnih ili nepotpunih podataka.
                    </p>
                  </div>
                  <div className="bg-[var(--sport-light-grey)] p-4 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Pravo na brisanje</h4>
                    <p className="text-[var(--sport-grey)] text-sm">
                      Možete zatražiti brisanje vaših osobnih podataka u određenim okolnostima.
                    </p>
                  </div>
                  <div className="bg-[var(--sport-light-grey)] p-4 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Pravo na ograničenje obrade</h4>
                    <p className="text-[var(--sport-grey)] text-sm">
                      Možete zatražiti ograničenje obrade vaših podataka u određenim situacijama.
                    </p>
                  </div>
                  <div className="bg-[var(--sport-light-grey)] p-4 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Pravo na prigovor</h4>
                    <p className="text-[var(--sport-grey)] text-sm">
                      Možete prigovoriti obradi vaših osobnih podataka u određenim okolnostima.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">Linkovi na Vanjske Stranice</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed">
                  Naša web stranica može sadržavati linkove na vanjske web stranice kladionica i drugih pružatelja
                  usluga. Nismo odgovorni za prakse zaštite privatnosti ili sadržaj tih vanjskih stranica. Preporučujemo
                  da pročitate politiku privatnosti svake stranice koju posjetite.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">Djeca i Privatnost</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed">
                  Naša usluga nije namijenjena osobama mlađim od 18 godina. Svjesno ne prikupljamo osobne podatke od
                  djece. Ako ste roditelj ili skrbnik i saznate da je vaše dijete pružilo osobne podatke, molimo
                  kontaktirajte nas kako bismo mogli poduzeti odgovarajuće korake.
                </p>
              </section>

              <section className="bg-[var(--sport-light-grey)] p-8 border-l-4 border-[var(--sport-blue)] rounded-r-lg">
                <h2 className="text-3xl font-bold text-foreground mb-4">Promjene Politike Privatnosti</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed">
                  Zadržavamo pravo ažuriranja ove Politike privatnosti s vremena na vrijeme. O svim promjenama ćemo vas
                  obavijestiti objavljivanjem nove politike na ovoj stranici i ažuriranjem datuma "Posljednje
                  ažuriranje" na vrhu ove stranice. Preporučujemo da povremeno pregledate ovu stranicu kako biste bili
                  informirani o tome kako štitimo vaše podatke.
                </p>
              </section>

              <section className="bg-gradient-to-br from-[var(--sport-blue)] to-[#2d5aa0] p-8 rounded-xl text-white">
                <h2 className="text-3xl font-bold mb-4">Kontaktirajte Nas</h2>
                <p className="text-white/90 leading-relaxed mb-4">
                  Ako imate bilo kakvih pitanja o ovoj Politici privatnosti ili želite ostvariti svoja prava, molimo
                  kontaktirajte nas:
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-lg">
                    Email:{" "}
                    <a
                      href="mailto:privacy@hrvatskastranicekladenje.com"
                      className="text-white hover:text-[var(--sport-orange)] underline transition-colors"
                    >
                      privacy@hrvatskastranicekladenje.com
                    </a>
                  </p>
                  <p className="text-white/90 text-sm mt-4">Odgovorit ćemo na vaš zahtjev u roku od 30 dana.</p>
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>

      <HskFooter />
    </div>
  )
}
