"use client"

export function HskResponsible() {
  return (
    <section id="responsible" className="py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-[1050px]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-6">Odgovorno Klađenje</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Sportsko klađenje može biti uzbudljiva zabava, ali samo ako se prakticira odgovorno i s mjerom.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
            <p className="leading-relaxed">
              Klađenje nikada ne bi trebalo biti način za zaradu ili rješavanje financijskih problema. To je oblik
              zabave koji dolazi s troškovima, baš kao što biste platili ulaznicu za utakmicu ili koncert. Ključ je u
              tome da taj trošak bude kontroliran i planiran.
            </p>

            <h3 className="text-2xl font-bold text-slate-700 mt-10 mb-4">Prepoznavanje Problema</h3>

            <p className="leading-relaxed">
              Problem s kockanjem često počinje neprimjetno. Ono što je započelo kao povremena zabava postaje sve češće,
              a iznosi koji se ulažu rastu. Važno je biti iskren sam sa sobom i prepoznati rane znakove:
            </p>

            <div className="bg-white rounded-lg p-6 my-6 border-l-4 border-red-500">
              <ul className="space-y-3 list-none pl-0">
                <li className="leading-relaxed">Trošite više novca na klađenje nego što ste prvotno planirali</li>
                <li className="leading-relaxed">Često razmišljate o klađenju i sljedećoj okladi</li>
                <li className="leading-relaxed">Pokušavate vratiti izgubljeni novac dodatnim opkladama</li>
                <li className="leading-relaxed">Zanemarujete obaveze ili odnose zbog klađenja</li>
                <li className="leading-relaxed">Posudujete novac za klađenje ili krijete gubitke</li>
                <li className="leading-relaxed">Osjećate krivnju ili nemir nakon klađenja</li>
              </ul>
            </div>

            <p className="leading-relaxed">
              Ako prepoznajete bilo koji od ovih znakova kod sebe ili netko blizak pokazuje takve simptome, vrijeme je
              za pauzu i razgovor sa stručnjakom.
            </p>

            <h3 className="text-2xl font-bold text-slate-700 mt-10 mb-4">Praktični Savjeti</h3>

            <p className="leading-relaxed">
              Postavljanje granica nije znak slabosti - to je znak odgovornosti. Prije nego što započnete s klađenjem,
              odredite točan iznos koji možete priuštiti izgubiti. Taj iznos nikada ne bi trebao biti novac namijenjen
              računu, hrani ili drugim nužnim stvarima.
            </p>

            <p className="leading-relaxed">
              Većina legalno licenciranih kladionica u Hrvatskoj nudi alate za odgovorno klađenje. To uključuje
              mogućnost postavljanja dnevnih, tjednih ili mjesečnih limita depozita, kao i opciju samoisključenja na
              određeno vrijeme. Nemojte oklijevati koristiti ove alate.
            </p>

            <div className="bg-amber-50 rounded-lg p-6 my-6 border-l-4 border-amber-500">
              <p className="font-semibold text-slate-700 mb-2">Važno Pravilo</p>
              <p className="leading-relaxed">
                Nikada ne pokušavajte "vratiti" izgubljeni novac povećanjem uloga ili učestalosti klađenja. To je
                najčešći put u ozbiljne probleme s kockanjem.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-700 mt-10 mb-4">Gdje Potražiti Pomoć</h3>

            <p className="leading-relaxed">
              U Hrvatskoj postoje specijalizirane ustanove koje pružaju besplatnu pomoć osobama s problemom kockanja.
              Razgovor sa stručnjakom je povjerljiv i može značajno pomoći u prevladavanju problema.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 my-6">
              <p className="font-semibold text-slate-700 mb-4">Kontakti za Pomoć</p>
              <p className="leading-relaxed mb-2">
                <span className="font-medium">Centar za liječenje ovisnosti:</span> 01 4872 555
              </p>
              <p className="leading-relaxed mb-2">
                <span className="font-medium">Nacionalna linija za pomoć:</span> dostupna radnim danom
              </p>
              <p className="leading-relaxed text-sm mt-4">
                Poziv je povjerljiv i besplatan. Ne postoji razlog za odgađanje razgovora ako smatrate da imate problem.
              </p>
            </div>

            <p className="leading-relaxed">
              Zapamtite: klađenje je aktivnost za punoletne osobe koje mogu kontrolirati svoje ponašanje i financije.
              Ako niste sigurni, bolje je odustati nego riskirati.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
