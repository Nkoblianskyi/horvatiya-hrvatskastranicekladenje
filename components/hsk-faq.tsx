"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function HskFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Kako znati je li kladionica sigurna i legalna?",
      answer:
        "Provjerite posjeduje li kladionica važeću licencu Ministarstva financija Republike Hrvatske. Ta informacija obično je vidljiva u podnožju web stranice. Dodatno, sve platforme koje preporučujemo su prošle našu detaljnu sigurnosnu provjeru koja uključuje enkripciju podataka i certifikate nezavisnih auditorskih kuća.",
    },
    {
      question: "Što znači bonus dobrodošlice i kako ga iskoristiti?",
      answer:
        "Bonus dobrodošlice je promocija koju kladionice nude novim korisnicima, obično u obliku dodatnih sredstava na prvi depozit. Međutim, svi bonusi dolaze s uvjetima - potrebno je odigrati određeni iznos prije nego možete podići bonus sredstva. Pažljivo pročitajte uvjete prije prihvaćanja bilo kojeg bonusa jer oni mogu značajno varirati između kladionica.",
    },
    {
      question: "Koliko dugo traje isplata dobitka?",
      answer:
        "Brzina isplate ovisi o kladionici i odabranoj metodi plaćanja. E-novčanici poput Skrilla ili Netellera obično omogućuju isplatu u roku 24-48 sati, dok bankovni prijenosi mogu trajati 3-5 radnih dana. Dodatno, prva isplata obično zahtijeva verifikaciju identiteta što može produžiti proces za dan ili dva.",
    },
    {
      question: "Mogu li se kladiti putem mobitela?",
      answer:
        "Sve moderne kladionice nude mobilnu verziju svojih platformi, bilo kroz responzivnu web stranicu bilo kroz dedicirane aplikacije za iOS i Android. Većina korisnika danas preferira klađenje putem mobitela zbog praktičnosti, a funkcionalnost je gotovo identična desktop verziji.",
    },
    {
      question: "Što ako kladionica ne želi isplatiti moj dobitak?",
      answer:
        "Prvo kontaktirajte korisničku službu kladionice i zatražite detaljno objašnjenje. Većina problema nastaje zbog kršenja uvjeta korištenja ili neuspješne verifikacije. Ako problem nije riješen i smatrate da ste u pravu, možete podnijeti pritužbu Ministarstvu financija koje regulira industriju u Hrvatskoj. Pohranite svu komunikaciju i dokaze.",
    },
    {
      question: "Kako ste vi financirani i jeste li nepristrani?",
      answer:
        "Djelujemo kao neovisna platforma. Naš prihod dolazi iz partnerskih programa s kladionicama, ali to ne utječe na naše ocjene. Ocjenjujemo sve platforme po istim kriterijima bez obzira na poslovne odnose. Ako kladionica ne ispunjava standarde, nećemo je preporučiti bez obzira na potencijalni prihod.",
    },
  ]

  return (
    <section id="faq" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1050px]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-6">Često Postavljena Pitanja</h2>
            <p className="text-lg text-slate-600">Odgovori na najčešća pitanja koja nam postavljaju korisnici</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-2 border-slate-200 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-lg text-slate-800 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 bg-slate-100 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-700 mb-3">Nemate li odgovor na svoje pitanje?</h3>
            <p className="text-slate-600 mb-6">
              Kontaktirajte nas putem emaila i potruditi ćemo se odgovoriti što prije.
            </p>
            <p
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              info@hrvatskastranicekladenje.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
