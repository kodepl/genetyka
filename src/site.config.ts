const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${Math.round(w * 0.56)}&q=80`;

const site = {
  name: "Genetyka",
  domain: "genetyka.com.pl",
  tagline: "DNA, dziedziczenie i genetyka medyczna — bez mitów i bez żargonu dla samego żargonu",
  email: "redakcja@genetyka.com.pl",
  city: "Warszawa",
  address: "ul. Królewska 18, lok. 4, 00-103 Warszawa",
  author: "Dr hab. Magdalena Wójcik",
  authorBio:
    "Genetyczka kliniczna i popularyzatorka nauki. Od piętnastu lat tłumaczy wyniki badań DNA rodzinom i lekarzom pierwszego kontaktu.",
  authorRole: "Genetyczka kliniczna",
  authorAvatar:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
  heroImage: u("photo-1628595353829-04b8544a750f", 1600),
  aboutImage: u("photo-1532187863486-abf9db3851ee", 1200),
  covers: {
    "Genetyka medyczna": u("photo-1530026405186-ed1f139313f8"),
    "DNA i dziedziczenie": u("photo-1559757148-5c350d0d3c56"),
    "Badania prenatalne": u("photo-1555252337-9f8e92e665df"),
    Onkogenetyka: u("photo-1576086213369-97a306d36557"),
    default: u("photo-1628595353829-04b8544a750f"),
  } as Record<string, string>,
  rubrics: [
    {
      name: "Genetyka medyczna",
      blurb: "Choroby rzadkie, farmakogenetyka, sekwencjonowanie — kiedy wynik zmienia leczenie.",
    },
    {
      name: "DNA i dziedziczenie",
      blurb: "Autosomalne, sprzężone z X, epigenetyka — wzorce, które widać w rodowodzie.",
    },
    {
      name: "Badania prenatalne",
      blurb: "NIPT, triple test, USG — co wykrywa każde badanie i czego nie zastąpi.",
    },
    {
      name: "Onkogenetyka",
      blurb: "BRCA, Lynch, panel nowotworowy — ryzyko dziedziczone i profilaktyka.",
    },
  ],
};

export function rubricSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/ą/g, "a")
    .replace(/ć/g, "c")
    .replace(/ę/g, "e")
    .replace(/ł/g, "l")
    .replace(/ń/g, "n")
    .replace(/ó/g, "o")
    .replace(/ś/g, "s")
    .replace(/ź|ż/g, "z")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function coverFor(category?: string, image?: string) {
  if (image && !image.includes("source.unsplash.com")) return image;
  return site.covers[category || ""] || site.covers.default;
}

export default site;
