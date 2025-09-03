export class RemasterCharacterSheet extends ActorSheetPF2e {}

Hooks.once("init", () => {
  Actors.registerSheet("pf2e", RemasterCharacterSheet, {
    label: "Remaster Character Sheet",
    types: ["character"],
    makeDefault: false,
  });
});
