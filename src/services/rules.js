export const rules = [
  {
    id: 0,
    type: "step",
    title: "Obnovení vyčerpaných karet",
    text: "",
    list: [
      {
        title: "Akce údržby",
        note:
          'Příklad: "Richard zjistil, že má kartu Smlouva, která vyžaduje akci údržby. Nejdříve získá 2$ za Smlouvu. Následně musí provést test s 1 kostkou, abz zjistil jestli si kartu nechá i do následujícícho kola."',
      },
      {
        title: "Úprava dovedností",
        note:
          "Možnost nastavit ukazatele dovedností podle toho, jak velké máš soustředění.",
      },
    ],
    goTo: 1,
  },
  {
    id: 1,
    type: "condition",
    title: "Jsi ve Vnějším světě?",
    decisions: [
      { answer: true, text: "ANO", goTo: 2 },
      { answer: false, text: "NE", goTo: 3 },
    ],
  },
  {
    id: 2,
    type: "step",
    title: "Jsi v Arkhamu",
    text: "",
    list: [],
    goTo: 0,
  },
  {
    id: 3,
    type: "step",
    title: "Jsi ve vnejsim svete",
    text: "",
    list: [],
    goTo: 0,
  },
];

export function getRules() {
  return rules.filter((r) => r);
}

export function getRule(id) {
  return rules.find((r) => r.id === id);
}
